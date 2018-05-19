import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import Todo from './Todo';

const GET_TODOS = gql`
  {
    todos @client {
      id
      completed
      text
    }
    visibilityFilter @client
  }
`;

const TodoList = () => (
  <Query query={GET_TODOS}>
    {({ data: { todos, visibilityFilter } }) => (
      <ul>
        {getVisibleTodos(todos, visibilityFilter).map(todo => (
          <Todo key={todo.id} {...todo} />
        ))}
      </ul>
    )}
  </Query>
);

export default TodoList
