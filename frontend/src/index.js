import "./styles/index.css";
import "./styles/tailwind.css";

import React, { useState, useEffect, Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";
import { useDisclosure } from "@nextui-org/use-disclosure";

const Home = lazy(() => import("@/pages/index"));
const Classes = lazy(() => import("@/pages/classes"));
const Scheduler = lazy(() => import("@/pages/scheduler"));
const Review = lazy(() => import("@/pages/review"));
const FAQ = lazy(() => import("@/pages/faq"));
import Loading from "@/pages/loading";
import reportWebVitals from "@/reportWebVitals";

import DesktopRecommendationModal from "@/components/Modals/DesktopRecommendationModal";
import Pages from "@/constants/Pages";
import Versions from "@/constants/Versions";

const router = createBrowserRouter(
  [
    { path: Pages.HOME, element: <Home /> },
    { path: Pages.CLASSES, element: <Classes /> },
    { path: Pages.SCHEDULER, element: <Scheduler /> },
    { path: Pages.REVIEW, element: <Review /> },
    { path: Pages.FAQ, element: <FAQ /> },
  ],
  {
    basename: "/",
  }
);

const App = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [version, setVersion] = useState(localStorage.getItem("version") || undefined);

  const isCurrentPath = (path) => {
    return location.pathname === path;
  };

  // Check if localStorage is outdated
  const isLocalStorageOutdated = () => {
    return version !== Versions.CLASSES_KEY;
  };

  // On initial load
  useEffect(() => {
    // If the user is on a small screen, open the warning modal
    if (
      window.innerWidth < 768 &&
      (isCurrentPath(Pages.CLASSES) || isCurrentPath(Pages.SCHEDULER) || isCurrentPath(Pages.SCHEDULER)) &&
      !sessionStorage.getItem("warningModalShown")
    ) {
      onOpen();
      sessionStorage.setItem("warningModalShown", "true");
    }

    // If localStorage version is outdated, reset it
    if (isLocalStorageOutdated()) {
      localStorage.removeItem("addedClasses");
      localStorage.removeItem("scheduledClasses");
      localStorage.setItem("version", Versions.CLASSES_KEY);
      setVersion(Versions.CLASSES_KEY);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <React.StrictMode>
      <NextUIProvider>
        <main>
          <DesktopRecommendationModal isOpen={isOpen} onOpenChange={onOpenChange} />
          <Suspense fallback={<Loading />}>
            <RouterProvider router={router} />
          </Suspense>
        </main>
      </NextUIProvider>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

// Ignore ResizeObserver loop error from virtualized list (<VList>)
window.addEventListener("error", function (e) {
  const resizeObserverErrDiv = document.getElementById("webpack-dev-server-client-overlay-div");
  const resizeObserverErr = document.getElementById("webpack-dev-server-client-overlay");

  if (
    e.message === "ResizeObserver loop completed with undelivered notifications." ||
    e.message === "ResizeObserver loop limit exceeded"
  ) {
    console.log(e);
    // prevent React's listener from firing
    e.stopImmediatePropagation();
    // prevent the browser's console error message
    e.preventDefault();
    // prevent webpack from showing a compile error in the console
    if (resizeObserverErr) resizeObserverErr.style.display = "none";
    if (resizeObserverErrDiv) resizeObserverErrDiv.style.display = "none";
  } else {
    // show webpack overlay for other errors
    if (resizeObserverErr) resizeObserverErr.style.display = "block";
    if (resizeObserverErrDiv) resizeObserverErrDiv.style.display = "block";
  }
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
