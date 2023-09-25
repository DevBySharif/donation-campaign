import { createBrowserRouter } from "react-router-dom";
import Details from "../DonationDetails/Details";
import Mainlayout from "../Layout/Mainlayout";
import Donation from "../Pages/Donation/Donation";
import Error from "../Pages/ErrorPage/Error";
import Home from "../Pages/Home/Home";
import Statistics from "../Pages/Statistics/Statistics";

const myRoute = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/donation",
        element: <Donation></Donation>,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/details/:id",
        element: <Details></Details>,
        loader: () => fetch("/data.json"),
      },
    ],
  },
]);

export default myRoute;
