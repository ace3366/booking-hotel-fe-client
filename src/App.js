import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/home/Home";
import { action as homeAction } from "./components/Header/Header.jsx";
import Detail, { loader as detailLoader } from "./pages/detail/Detail";
import { action as detailAction } from "./components/Form/BookingForm";
import Search, { loader as searchLoader } from "./pages/search/Search";
import Login, { action as loginAction } from "./pages/login-signUp/Login";
import SignUp, { action as signUpAction } from "./pages/login-signUp/SignUp";
import Transaction, {
  loader as transactionLoader,
} from "./pages/transaction/Transaction";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { index: true, element: <Home />, action: homeAction },
      { path: "login", element: <Login />, action: loginAction },
      { path: "register", element: <SignUp />, action: signUpAction },
      { path: "search", element: <Search />, loader: searchLoader },
      {
        path: "detail/:hotelId",
        element: <Detail />,
        loader: detailLoader,
        action: detailAction,
      },
      {
        path: "transaction",
        element: <Transaction />,
        loader: transactionLoader,
        // action: detailAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
