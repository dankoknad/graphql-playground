import React, { Component } from 'react';
import { ApolloProvider } from "react-apollo";
import Dogs from './Dogs'
import DogPhoto from './DogPhoto'
// import ExchangeRates from './ExchangeRates'
import client from './client'

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="text-center">
          <h2>My first Apollo app <span role="img" aria-label="emoji rocket">🚀</span></h2>
          <Dogs />
          <DogPhoto />
          {/* <ExchangeRates /> */}
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
