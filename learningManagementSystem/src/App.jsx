import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Course from "./pages/Course";
import Cart from "./pages/Cart";
import { Toaster } from "sonner";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="course" element={<Course />} />
        <Route path="cart" element={<Cart />} />
      </Route>
    )
  );
  return (
    <>
      <Toaster richColors position="top-center" />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
