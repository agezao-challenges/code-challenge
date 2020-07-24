import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import {
  Box,
  Spinner,
  Text,
  theme,
} from "@chakra-ui/core";
import ReactImageFallback from "react-image-fallback";
import { calculateWeightedMeanOfTickers } from '../../utils';
import { IAsset } from '../../Models/Asset';
import { ITicker } from '../../Models/Ticker';
import { GET_ASSETS } from '../../services/queries/GET_ASSETS';

export default (props: { searchQuery?: String }): React.ReactElement => {
  const [limit, setLimit] = useState<number>(25);

  const { loading, error, data } =
    useQuery<{assets: IAsset[]}>(
      GET_ASSETS,
      {
        variables: {
          limit,
          searchQuery: `%${props.searchQuery || ''}%`,
        }
      });

  if (loading) return <Box textAlign="center"><Spinner /></Box>;

  if (error) return <p>Something went wrong. This was the response: {error.message} {error.message.indexOf('413') > -1 ? "(413 usually means that the free tier was reached)" : '' }</p>;

  return (
    <Box marginTop={30}>

      <table style={{border: `1px solid ${theme.colors.gray[200]}`}}>
        <thead
          style={{background: theme.colors.gray[200], color: theme.colors.black}}
        >
          <tr>
            <th>Name</th>
            <th>Pair</th>
            <th>Symbol</th>
            <th>Market Cap</th>
            <th>Average Last Price</th>
          </tr>
        </thead>
        
        <tbody>
          { data?.assets.map((asset: IAsset) =>
            <ValueRow
              key={asset.assetName+asset.assetSymbol}
              {...asset}
            />)
          }
        </tbody>

        <tfoot>
          <tr>
            <td colSpan={5}>
              <LimitSelector limit={limit} setLimit={setLimit} />
            </td>
          </tr>
        </tfoot>
      </table>
    </Box>
  );
};

export const ValueRow: React.FC<IAsset> = ({ assetName, assetSymbol, marketCap, markets }) => {
  const tickers: ITicker[] | undefined = markets?.map((market): ITicker => market.ticker).filter(Boolean);
  const averageLastPrice: number = calculateWeightedMeanOfTickers(tickers || []);

  return (
    <tr>
      <td><Link to={`/currencies/${assetSymbol}/markets`}>{assetName}</Link></td>
      <td>{assetSymbol}/USD</td>
      <td>
        <ReactImageFallback
          src={`https://cryptoicons.org/api/icon/${assetSymbol.toLowerCase()}/30`}
          fallbackImage=""
          initialImage=""
        />
      </td>
      <td>
        { Intl.NumberFormat(
          'en-US',
          {
            style: 'currency',
            currency: 'USD'
          }).format(marketCap)
        }
      </td>
      <td>
        {
          tickers && tickers.length > 0
          ? Intl.NumberFormat(
            'en-US',
            {
              style: 'currency',
              currency: 'USD'
            }).format(averageLastPrice)
          : '-'
        }
      </td>
    </tr>
  );
};

export const LimitSelector: React.FC<{ limit: number, setLimit: any }> = ({ limit, setLimit }) => {
  const LimitSelectorTextItem: React.FC<{ text: string, active?: boolean, limit?: number }> = ({ text, active, limit }) => (
    <Text
      fontSize="lg"
      paddingLeft="1em"
      color={limit ? theme.colors.blue[500] : theme.colors.gray[400]}
      textDecoration={active ? 'underline' : 'none'}
      cursor={limit ? 'pointer' : 'default'}
      onClick={() => limit && setLimit(limit)}
    >
      {text}
    </Text>
  );

  return (
    <Box
      d="flex"
      justifyContent="flex-end"
      paddingRight="1em"
    >
      <LimitSelectorTextItem text="View" />
      <LimitSelectorTextItem text="25" limit={25} active={limit === 25} />
      <LimitSelectorTextItem text="50" limit={50} active={limit === 50} />
      <LimitSelectorTextItem text="all" limit={99999} active={limit === 99999} />
    </Box>
  );
};