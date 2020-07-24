## Personal log:

1. An overview (main) page with the list/table of 25 coins sorted by the highest market cap

- [x] We want you to make the page with exactly the same column headers
- [x] This page also contains a search box (search icon can be found in ui-examples folder) that enables users to search based on coin name. Search results will replace the default data
- [x] We would like the average price of each coin pair to USD
- [x] Show the coin icons
- [x] Search only based on coin name is sufficient

2. A page showing the coin pairs per exhange in the detail card view

- [x] This page should contains cards of coin pairs and the info like the example
- [x] This page data is based on one of the 25 coins that we are showing in step 1
- [x] Showing icons is not required
- [x] If it's not clear, this might help: https://coinmarketcap.com/currencies/bitcoin/markets

-

- [x] Routing and navigation
- [x] ES6 and React Hooks
- [x] Typescript Typing
- [x] Modularity and reusability of your code (think about components)
- [x] Mobile first responsive implementation of the pages
- [x] Search
- [x] Bonus (optional): Theme toggle for dark mode




To anyone reading this: It was fun, and I learned a couple of things in the process so it was definitely more than worthwhile. Thanks for the challenge :)

<hr />

# Frontend code challenge

## Cryptocurrency Single Page App

For the Bondify code challenge we ask you to create a crypto overview and search application. If you’re not familiar with crypto currencies have a look at https://coinmarketcap.com/.

You are going to build the following pages:

1. An overview (main) page with the list/table of 25 coins sorted by the highest market cap

- We want you to make the page with exactly the same column headers
- This page also contains a search box (search icon can be found in ui-examples folder) that enables users to search based on coin name. Search results will replace the default data
- We would like the average price of each coin pair to USD
- You're not required to show the coin icons
- Search only based on coin name is sufficient

Example:

![step 1:](./ui-examples/step1.png?raw=true&width=100)

2. A page showing the coin pairs per exhange in the detail card view

- This page should contains cards of coin pairs and the info like the example
- This page data is based on one of the 25 coins that we are showing in step 1
- Showing icons is not required
- If it's not clear, this might help: https://coinmarketcap.com/currencies/bitcoin/markets

Example:

![step 2:](./ui-examples/step3.png?raw=true)

**How to get started**

You will be using React, Typescript and [Apollo Client](https://www.apollographql.com/docs/react/v3.0-beta/).
We have set up the Apollo Client for you.
The API that you will be using is from bloktap.io.
The GraphQL explorer can be accessed via this link https://api.blocktap.io/graphiql.

This example query will shows you all the data that you will be needing:

You can check Blocktap documentation for more help: https://www.blocktap.io/docs

**We will judge your code based on the following criteria:**

- Knowledge of routing and navigation
- ES6 and React Hooks
- Typescript Typing
- Modularity and reusability of your code (think about components)
- Mobile first responsive implementation of the pages
- Search
- Your explanation if you diverted from the assignment, because you had a nicer way of doing things or if something was impossible to achieve
- _Bonus (optional):_ Theme toggle for dark mode

**Time to spend**

We expect you to spend 4-6 hours to complete this challenge. However you can do the assignment whenever you want within a 24 hour window after you *cloned* the repository. When you're finished send us the url of the *cloned* repository with your code.
