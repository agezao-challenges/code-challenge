import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, ColorModeProvider, CSSReset } from '@chakra-ui/core';
import { ApolloProvider } from '@apollo/client';
import apolloClient from './infrastructure/apollo-client';
import * as serviceWorker from "./serviceWorker";
import { Router } from './routes';
import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <ColorModeProvider>
        <CSSReset />

        <ApolloProvider client={apolloClient}>
          <Router />
        </ApolloProvider>
      </ColorModeProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
