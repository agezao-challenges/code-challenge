import React from 'react';
import { render } from '../../utils/test-utils';
import { MockedProvider } from '@apollo/client/testing';
import { GET_MARKETS } from '../../services/queries/GET_MARKETS'
import SymbolMarkets from './SymbolMarkets';

const mocks = [
  {
    request: {
      query: GET_MARKETS,
      variables: {
        symbol: 'NEO'
      },
    },
    result: {
      "data": {
        "markets": [
          {
            "exchangeSymbol": "Bibox",
            "quoteSymbol": "BTC",
            "baseSymbol": "NEO",
            "ticker": {
              "percentChange": "-3.78000000",
              "lastPrice": "0.00117334",
              "lowPrice": "0.00117216",
              "highPrice": "0.00122474"
            }
          },
          {
            "exchangeSymbol": "Bibox",
            "quoteSymbol": "ETH",
            "baseSymbol": "NEO",
            "ticker": {
              "percentChange": "-6.42000000",
              "lastPrice": "0.04115597",
              "lowPrice": "0.04095543",
              "highPrice": "0.04416633"
            }
          },
        ]
      }
    },
  },
];

const routeComponentPropsMock = {
  history: {} as any,
  location: {} as any,
  match: { params: { symbol: 'NEO' } } as any,
}

test('renders the Home component and its dependencies', () => {
  const { getByText } = render(
    <MockedProvider mocks={mocks}>
      <SymbolMarkets {...routeComponentPropsMock} />
    </MockedProvider>,
  );

  const greetingElement = getByText(/Neo/i);
  expect(greetingElement).toBeInTheDocument();
});

