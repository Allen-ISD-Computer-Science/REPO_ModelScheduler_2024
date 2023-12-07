import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { NextUIProvider } from "@nextui-org/react";

import Home from './pages/index';
import Classes from './pages/classes';
import Scheduler from './pages/scheduler';
import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
  { path: "/", element: <Home />, },
  { path: "/classes", element: <Classes />, },
  { path: "/scheduler", element: <Scheduler />, },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextUIProvider>
      <main className="dark text-foreground bg-background">
        <RouterProvider router={router} />
      </main>
    </NextUIProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
