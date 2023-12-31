import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import {BrowserRouter} from "react-router-dom"
import {Toaster} from "react-hot-toast";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import AppContextProvider from './Blogs/context//AppContext'
import {Provider} from "react-redux"
import Store from "./ShoppingCart/redux/Store"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AppContextProvider>
    <Provider store={Store}>
      <App />
    </Provider>
    </AppContextProvider>
    <Toaster/>
    <ToastContainer/>
  </BrowserRouter>
);
