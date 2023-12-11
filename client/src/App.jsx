import React from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { Outlet } from 'react-router-dom';
// import Login from './pages/Login';
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

  //work in progress
/*
function AppRoutes() {
  <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/" element={<App />} />
    <Route path="*" element={<Navigate to="/login" />} />
  </Routes>
};
*/

export default App;
