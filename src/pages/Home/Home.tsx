import React from 'react';
import { Helmet } from "react-helmet";
import {
  Box,
} from "@chakra-ui/core";
import Topbar from '../../components/Topbar/Topbar';

export default (props: any): React.ReactElement => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Home • CoinMarketCap</title>
      </Helmet>

      <Topbar />

      <Box
        margin="0 auto"
        maxW="6xl"
        p={6}
        overflow="hidden"
      >
        cool
      </Box>
    </React.Fragment>
  );
};
