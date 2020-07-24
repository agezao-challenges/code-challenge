import React from 'react';
import { render } from '../../utils/test-utils';
import { MockedProvider } from '@apollo/client/testing';
import { GET_ASSETS } from '../../services/queries/GET_ASSETS'
import MarketSummary from './MarketSummary';

const mocks = [
  {
    request: {
      query: GET_ASSETS,
      variables: {
        limit: 25,
        searchQuery: '%%'
      },
    },
    result: {
      "data": {
        "assets": [
          {
            "assetName": "NEO",
            "assetSymbol": "NEO",
            "marketCap": 856432075,
            "marketCapRank": 19,
            "markets": [
              {
                "ticker": {
                  "lastPrice": "11.27510000",
                  "baseVolume": "157048.50010000"
                }
              },
            ]
          },
        ]
      }
    },
  },
];

test('renders the MarketSummary component and its dependencies', () => {
  const { getByText } = render(
    <MockedProvider mocks={mocks}>
      <MarketSummary />
    </MockedProvider>,
  );

  const greetingElement = getByText(/Cryptocurrency Market/i);
  expect(greetingElement).toBeInTheDocument();
});

