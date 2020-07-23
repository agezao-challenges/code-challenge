const env = window.location.host.includes('localhost:') ? 'local' : 'prod';

export default {
  env,
  blocktapGraphQlUrl: 'https://api.blocktap.io/graphql',
};
