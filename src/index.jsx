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
      </MyProvider>
      <Toaster
        position="top-center"
        closeButton
        duration={5000}
        pauseWhenPageIsHidden
      />
    </React.StrictMode>
  </BrowserRouter>
);
