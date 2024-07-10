
import React from 'react';
//components
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';

//pages


// react router
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/room/:id',
    element: <RoomDetails />,
  },
  {
    path: '/restaurants',
    element: <Restaurant />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
])




const App = () => {
  return <div>
    <Header />
    <RouterProvider router={router} />
    <Service />
  <Special />
    <Footer />
  </div>;
};

export default App;