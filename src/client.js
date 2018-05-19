import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  connectToDevTools: true, 
  uri: "https://8v9r9kpn7q.lp.gql.zone/graphql" // Todos
  // uri: "https://w5xlvm3vzz.lp.gql.zone/graphql" // ExchangeRates
  // uri: "https://nx9zvp49q7.lp.gql.zone/graphql" // Dogs
});

export default client;
