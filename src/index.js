import './styles/index.css';
import './styles/tailwind.css';

import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { NextUIProvider } from "@nextui-org/react";

import SelectedClassesContext from '@/context/selectedClasses';

import Home from '@/pages/index';
import Classes from '@/pages/classes';
import Scheduler from '@/pages/scheduler';
import reportWebVitals from '@/reportWebVitals';

const router = createBrowserRouter([
  { path: "/", element: <Home />, },
  { path: "/classes", element: <Classes />, },
  { path: "/scheduler", element: <Scheduler />, },
]);

const App = () => {
  const [selectedClasses, setSelectedClasses] = useState([]);

  return (
    <React.StrictMode>
      <NextUIProvider>
        <SelectedClassesContext.Provider value={{ selectedClasses, setSelectedClasses }}>
          <main className="dark text-foreground bg-background">
            <RouterProvider router={router} />
          </main>
        </SelectedClassesContext.Provider>
      </NextUIProvider>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
