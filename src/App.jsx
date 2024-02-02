import { useState, Suspense } from "react";
import reactLogo from "./assets/react.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { store } from "../components/redux/store";
import { Provider } from "react-redux";
import viteLogo from "/vite.svg";
import "./App.css";
import Products from "../components/products/Products";
import "./index.css";
import Users from "../components/users/Users";
import Filter from "../components/filters/Filter";
import Demo123 from "../components/pagination/Pagination";

const App = () => {
  return (
    <>
      <div className="bg-red-500">seif</div>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
};

function App2() {
  const [count, setCount] = useState(0);

  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/users" element={<Users />} />
          <Route path="/products" element={<Products />} />
          {/* <Route path="/account" element={<Dashboard />}>
            <Route index element={<Main />} />
            <Route path="history" element={<Order />}>
              <Route index element={<Mainorder />} />
              <Route path="details" element={<Details />} />
            </Route>
            <Route path="setting" element={<Setting />} />
          </Route> */}
        </Routes>
        {/* <Footer /> */}
      </Router>
    </Provider>
  );
}

export default App;
