import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/styles/index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './app/router';



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <React.StrictMode>
    <RouterProvider router={router  } />
  </React.StrictMode>
  </StrictMode>,
)
