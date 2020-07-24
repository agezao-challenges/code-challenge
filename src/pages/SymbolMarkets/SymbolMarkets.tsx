import React from 'react';
import { Helmet } from "react-helmet";
import { RouteComponentProps, Link } from 'react-router-dom';
import {
  Box,
  Heading,
} from "@chakra-ui/core";
import SymbolMarkets from '../../components/SymbolMarkets/SymbolMarkets';

export default ({ match }: RouteComponentProps<{ symbol: string }>): React.ReactElement => {
  const symbol: string = match.params.symbol;

  return (
    <React.Fragment>
      <Helmet>
        <title>{symbol} Markets • CoinMarketCap</title>
      </Helmet>

      <Box
        margin="0 auto"
        maxW="6xl"
        p={6}
        overflow="hidden"
      >
        <small><Link to="/">{'<'} back to All Markets</Link></small>
        <Heading marginBottom={3} size="lg">{symbol} Markets</Heading>

        <SymbolMarkets symbol={symbol} />
      </Box>
    </React.Fragment>
  );
};
