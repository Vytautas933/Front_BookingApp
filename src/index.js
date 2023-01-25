import React from 'react';
import ReactDOM from 'react-dom/client';
import ForumPage from './pages/ForumPage';
import ExplorePage from './pages/ExplorePage'
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
  
} from "react-router-dom";
import MainForumPag from './pages/MainForumPage';
import SellerPagePreview from './pages/SellerPagePreview'

// testas

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "forum",
    element: <ForumPage></ForumPage>,
  },
  {
    path: "explore",
    element: <ExplorePage/>,
  },
  {
    path: "mainforumpage",
    element: <MainForumPag />,
  },
  {
    path: "sellerpage/:id",
    element: <SellerPagePreview/>
  },
]);

// export function nav(){
//   <Link to="/"></Link>
// }


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App/> */}
  </React.StrictMode>
);



