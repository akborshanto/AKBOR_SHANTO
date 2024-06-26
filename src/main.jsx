import React from 'react'
import ReactDOM from 'react-dom/client'
import { router } from './routes/Routes';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
import {

  RouterProvider,
} from "react-router-dom";
import './index.css'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
