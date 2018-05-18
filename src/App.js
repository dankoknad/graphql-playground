import React, { Component } from 'react';
import { ApolloProvider } from "react-apollo";
import ExchangeRates from './ExchangeRates'
import client from './client'

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="text-center">
          <h2>My first Apollo app <span role="img" aria-label="emoji rocket">🚀</span></h2>
          <ExchangeRates />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
