import "./styles/index.css";
import "./styles/tailwind.css";

import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";

import SelectedClassesContext from "@/context/selectedClasses";

import Home from "@/pages/index";
import Classes from "@/pages/classes";
import Scheduler from "@/pages/scheduler";
import Login from "@/pages/login";
import reportWebVitals from "@/reportWebVitals";

const router = createBrowserRouter(
  [
    { path: "/", element: <Home /> },
    { path: "/classes", element: <Classes /> },
    { path: "/scheduler", element: <Scheduler /> },
    { path: "/login", element: <Login /> },
  ],
  {
    basename: process.env.PUBLIC_URL ? `${process.env.PUBLIC_URL}/` : "/",
  }
);

const App = () => {
  const [selectedClasses, setSelectedClasses] = useState([]);

  return (
    <React.StrictMode>
      <NextUIProvider>
        <SelectedClassesContext.Provider value={{ selectedClasses, setSelectedClasses }}>
          <main>
            <RouterProvider router={router} />
          </main>
        </SelectedClassesContext.Provider>
      </NextUIProvider>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

// Ignore ResizeObserver loop error from virtualized list (<VList>)
window.addEventListener('error', function (e) {
  const resizeObserverErrDiv = document.getElementById('webpack-dev-server-client-overlay-div');
  const resizeObserverErr = document.getElementById('webpack-dev-server-client-overlay');

  if (e.message === "ResizeObserver loop completed with undelivered notifications.") {
    console.log(e);
    // prevent React's listener from firing
    e.stopImmediatePropagation();
    // prevent the browser's console error message 
    e.preventDefault();
    // prevent webpack from showing a compile error in the console
    if (resizeObserverErr) resizeObserverErr.style.display = 'none';
    if (resizeObserverErrDiv) resizeObserverErrDiv.style.display = 'none';
  } else {
    // show webpack overlay for other errors
    if (resizeObserverErr) resizeObserverErr.style.display = 'block';
    if (resizeObserverErrDiv) resizeObserverErrDiv.style.display = 'block';
  }
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
