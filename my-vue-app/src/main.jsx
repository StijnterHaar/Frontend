import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Trainer from "./comp/Trainer";
import "./index.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="p-4 flex justify-center gap-4">
        <Link to="/" className="">
          Home
        </Link>
        <Link to="/Trainer" className="">
          Trainer
        </Link>
      </div>
      <Routes>
        <Route path="/" element={<App></App>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
