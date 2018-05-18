import React, { Component } from 'react';
import { ApolloConsumer } from 'react-apollo';
import gql from "graphql-tag";

const GET_DOG_PHOTO = gql`
  query dog($breed: String!) {
    dog(breed: $breed) {
      id
      displayImage
    }
  }
`;

export default class DelayedQuery extends Component {
  state = { dog: null };

  onDogFetched = dog => this.setState(() => ({ dog }));

  render() {
    return (
      <ApolloConsumer>
        {client => (
          <div>
            {this.state.dog ? ( 
                <img src={this.state.dog.displayImage} alt="dog" />
              ) : (  
                <button 
                  onClick={async () => {
                    const { data } = await client.query({
                      query: GET_DOG_PHOTO,
                      variables: { breed: "bulldog" }
                    });
                    this.onDogFetched(data.dog);
                  }}
                >
                  Click me!
                </button>
              )
            }
          </div>
        )}
      </ApolloConsumer>
    );
  }
}