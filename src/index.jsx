import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "sonner";
import MyProvider from "./context/provider";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <MyProvider>
        <App />
        <Toaster
          position="top-center"
          closeButton
          duration={5}
          pauseWhenPageIsHidden
        />
      </MyProvider>
    </React.StrictMode>
  </BrowserRouter>
);
