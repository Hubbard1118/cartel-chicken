import './App.css';
import './style.css';
import { Outlet } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

// React Bootstrap Configuration
import "bootstrap/dist/css/bootstrap.min.css"

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

