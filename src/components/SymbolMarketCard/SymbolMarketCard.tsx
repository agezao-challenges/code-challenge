import React from 'react';
import {
  Box,
  Heading,
  Text,
  theme,
} from "@chakra-ui/core";
import { IMarket } from '../../Models/Market';
import { ITicker } from '../../Models/Ticker';

export default ({ market }: { market: IMarket }): React.ReactElement => {
  return (
    <Box
      borderWidth="1px"
      rounded="lg"
      overflow="hidden"
      className="with-shadow light"
      padding="1em 1.5em"
    >
      <Heading marginBottom={3} size="md" fontWeight="500">{market.exchangeSymbol}</Heading>

      <Box
        d="flex"
        paddingBottom="6px"
        borderBottomWidth={1}
      >
        <Box marginRight="35px">
          <Heading
            marginBottom={0}
            size="lg"
            color={theme.colors.blue[800]}
          >
            {market.baseSymbol}/{market.quoteSymbol}
          </Heading>
          <Text color={theme.colors.gray[600]}>Pair</Text>
        </Box>

        <Box>
          <Heading
            marginBottom={0}
            size="lg"
            color={theme.colors.blue[800]}
          >
            { market.ticker
              ? Intl.NumberFormat(
                'en-US',
                {
                  style: 'currency',
                  currency: 'USD'
                }).format(parseFloat(market.ticker.lastPrice))
              : "-"
            }
          </Heading>
          <Text color={theme.colors.gray[600]}>Price</Text>
        </Box>
      </Box>

      <Box
        d="flex"
        paddingTop="12px"
        justifyContent="space-between"
      >
        <BottomCardText
          upperText={ market.ticker ? `${parseInt(market.ticker.lastPrice).toLocaleString()}.${market.quoteSymbol}` : '-' }
          lowerText="Last Price"
        />
        <BottomCardText
          upperText={ market.ticker ? `${parseFloat(market.ticker.percentChange).toFixed(2)}` : '-' }
          lowerText="24h Change"
        />
        <BottomCardText
          upperText={ market.ticker ? `${parseInt(market.ticker.lowPrice).toLocaleString()}.${market.quoteSymbol}` : '-' }
          lowerText="24h Low"
        />
        <BottomCardText
          upperText={ market.ticker ? `${parseInt(market.ticker.highPrice).toLocaleString()}.${market.quoteSymbol}` : '-' }
          lowerText="24h High"
        />
      </Box>
    </Box>
  );
};

const BottomCardText: React.FC<{ upperText: string, lowerText: string }> = ({ upperText, lowerText }: { upperText: string, lowerText: string }) => (
  <Box>
    <Heading
      marginBottom={0}
      size="sm"
    >
      { upperText }
    </Heading>
    <Text fontSize="sm" color={theme.colors.gray[600]}>{ lowerText }</Text>
  </Box>
)
