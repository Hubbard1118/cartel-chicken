import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { Outlet } from 'react-router-dom';
import './App.css';
import './style.css';

const client = new ApolloClient({
    uri: '/graphql',
    cache: new InMemoryCache(),
  });

function App() {
    return (
      <ApolloProvider client={client}>
        <div className="align-center bg-primary pt-3">
          <Outlet />
        </div>
      </ApolloProvider>
    );
  }

export default App;

