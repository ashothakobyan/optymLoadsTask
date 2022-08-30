import Main from "../components/main/Main";
import Register from "../components/register/Register";
import Login from "../components/login/Login";
import Test from "../components/test/test";
import AddDriver from "../components/addDriver/AddDriver";
import Drivers from "../components/drivers/Drivers";
import AddTractor from "../components/addTractor/AddTractor";
import Tractors from "../components/tracktors/Tracktors";
import AddTrailer from "../components/addTrailer/AddTrailer";
import Trailers from "../components/trailers/Trailers";
import FindLoad from "../components/findLoad/FindLoad";

export const routes = [
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/test",
    element: <Test />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/addDriver",
    element: <AddDriver />,
  },
  {
    path: "/drivers",
    element: <Drivers />,
  },
  {
    path: "/addTractor",
    element: <AddTractor />,
  },
  {
    path: "/tractors",
    element: <Tractors />,
  },
  {
    path: "/addTrailer",
    element: <AddTrailer />,
  },
  {
    path: "/trailers",
    element: <Trailers />,
  },
  {
    path: "/findLoad",
    element: <FindLoad />,
  },
];
