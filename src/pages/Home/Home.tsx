import React from 'react';
import { Helmet } from "react-helmet";
import {
  Box,
} from "@chakra-ui/core";
import MarketSummary from '../../components/MarketSummary/MarketSummary';

export default (props: any): React.ReactElement => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Home • CoinMarketCap</title>
      </Helmet>

      <Box
        margin="0 auto"
        maxW="6xl"
        p={6}
        overflow="hidden"
      >
        <MarketSummary />
      </Box>
    </React.Fragment>
  );
};
