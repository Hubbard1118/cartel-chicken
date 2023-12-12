import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";


import App from './App.jsx';
import Landing from './pages/Landing.jsx'
import Home from './pages/Home';
import Profile from './pages/profile.jsx'
import Signup from './pages/Signup';
import Login from './pages/Login';
import NotFound from './pages/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Landing />
      },{
        path: '/login',
        element: <Login />
      }, {
        path: '/signup',
        element: <Signup />
      },{
        path: '/home',
        element: <Home />
      },{
        path: '/profile',
        element: <Profile />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
