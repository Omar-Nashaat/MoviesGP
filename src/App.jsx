import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Layout from "./pages/Layout/Layout";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import ResultPage from "./pages/ResultPage/ResultPage";

const routes = createBrowserRouter([
  { path: "", element: <Login /> },
  { path: "login", element: <Login /> },
  {
    path: "",
    element: <Layout />,
    children: [
      { path: "home", element: <Home /> },
      { path: "result", element: <ResultPage /> },
      { path: "result/:type", element: <ResultPage /> },

      // { path: '*', element: <NotFound /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={routes}></RouterProvider>;
}

export default App;
