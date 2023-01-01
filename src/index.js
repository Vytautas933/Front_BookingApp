import React from 'react';
import ReactDOM from 'react-dom/client';
import forumPage from './pages/forumPage';
import explorePage from './pages/explorePage'
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "forum",
    element: <forumPage/>,
  },
  {
    path: "explore",
    element: <explorePage/>,
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App/> */}
  </React.StrictMode>
);



