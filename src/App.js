import React, { Component } from 'react';
import { ApolloProvider } from "react-apollo";
import AddTodo from './AddTodo'
import TodoList from './TodoList'
// import Dogs from './Dogs'
// import DogPhoto from './DogPhoto'
// import ExchangeRates from './ExchangeRates'
// import DelayedQuery from './DelayedQuery'
import client from './client'

class App extends Component {
  state = {
    selectedDog: ''
  }

  onDogSelected = (e) => {
    this.setState({selectedDog: e.target.value})
  }

  render() {
    return (
      <ApolloProvider client={client}>
        <div className="text-center">
          <h2>My first Apollo app <span role="img" aria-label="emoji rocket">🚀</span></h2>
          <br /><br />
          <AddTodo />
          <br /><br />
          <TodoList />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
