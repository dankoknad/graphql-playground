import ApolloClient from "apollo-boost";
import { defaults, resolvers } from "./resolvers";
import { typeDefs } from './typeDefs'

const client = new ApolloClient({
  connectToDevTools: true,
  uri: `https://nx9zvp49q7.lp.gql.zone/graphql`,
  clientState: {
    defaults,
    resolvers,
    typeDefs
  }
});

export default client;
