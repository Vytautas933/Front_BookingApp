import React from 'react';
import ReactDOM from 'react-dom/client';
import ForumPage from './pages/ForumPage';
import ExplorePage from './pages/ExplorePage'
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
    element: <ForumPage/>,
  },
  {
    path: "explore",
    element: <ExplorePage/>,
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App/> */}
  </React.StrictMode>
);



