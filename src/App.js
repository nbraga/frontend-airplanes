import { BrowserRouter, Route, Routes } from "react-router-dom";

import About from "./pages/About";
import Destinations from "./pages/Destinations";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Promotions from "./pages/Promotions";
import Register from "./pages/Register";
import Sac from "./pages/Sac";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer autoClose={5000} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="destinations" element={<Destinations />} />
        <Route path="promotions" element={<Promotions />} />
        <Route path="about" element={<About />} />
        <Route path="sac" element={<Sac />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
