import React from 'react';
import { useQuery } from '@apollo/client';
import {
  Box,
  Spinner,
  SimpleGrid,
  Heading,
} from "@chakra-ui/core";
import { IMarket } from '../../Models/Market';
import { GET_MARKETS } from '../../services/queries/GET_MARKETS';
import SymbolMarketCard from '../SymbolMarketCard/SymbolMarketCard';

export default ({ symbol }: { symbol: string }): React.ReactElement => {
  const { loading, error, data } = useQuery<{markets: IMarket[]}>(GET_MARKETS, { variables: { symbol } });

  if (loading) return <Box textAlign="center"><Spinner /></Box>;

  if (error) return <p>Something went wrong. This was the response: {error.message} {error.message.indexOf('413') > -1 ? "(413 usually means that the free tier was reached)" : '' }</p>;

  const exchanges = data?.markets
    .map((market: IMarket): string => market.exchangeSymbol)
    .filter((elem, pos, arr) => arr.indexOf(elem) === pos);

  return (
    <Box marginTop={30}>
      {
        exchanges?.map(exchange => (
          <Box
            marginBottom={25}
            paddingBottom={25}
            borderBottomWidth={2}
          >
            <Heading marginBottom={3} size="lg">{exchange}</Heading>

            <SimpleGrid
              columns={[1, 1, 2]}
              spacingX="20px"
              spacingY="15px"
            >
              {
                data?.markets
                .filter((m: IMarket) => m.exchangeSymbol === exchange)
                .map((market: IMarket) =>
                  <SymbolMarketCard
                    key={market.exchangeSymbol+Math.random()}
                    market={market}
                  />)
              }
            </SimpleGrid>
          </Box>
        ))
      }
    </Box>
  );
};
