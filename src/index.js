import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/Register/Register";
import Login from "./pages/Register/Login";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/">
        <Route index element={<App></App>} />
        <Route path="register" element={<Register></Register>} />
        <Route path="login" element={<Login></Login>} />
      </Route>
    </Routes>
  </BrowserRouter>
);
