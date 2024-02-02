import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Test from "../components/Test.jsx";
import Users from "../components/users/Users.jsx";
import Products from "../components/products/Products.jsx";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { ThemeProvider } from "@material-tailwind/react";
ReactDOM.createRoot(document.getElementById("root")).render(
  <MantineProvider>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </MantineProvider>
);
