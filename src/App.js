import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import About from "./pages/About";
import Destinations from "./pages/Destinations";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Promotions from "./pages/Promotions";
import Register from "./pages/Register";
import Sac from "./pages/Sac";
import Purchase from "./pages/Purchase";
import Dashboard from "./pages/Dashboard";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useAuth } from "./hooks/useAuth";

function App() {
  const { auth } = useAuth();
  return (
    <BrowserRouter>
      <ToastContainer autoClose={5000} />
      <Routes>
        <Route path="/" element={auth ? <Home /> : <Navigate to="/login" />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="login" element={!auth ? <Login /> : <Navigate to="/" />} />
        <Route
          path="register"
          element={!auth ? <Register /> : <Navigate to="/" />}
        />
        <Route
          path="destinations"
          element={auth ? <Destinations /> : <Navigate to="/login" />}
        />
        <Route
          path="promotions"
          element={auth ? <Promotions /> : <Navigate to="/login" />}
        />
        <Route
          path="about"
          element={auth ? <About /> : <Navigate to="/login" />}
        />
        <Route path="sac" element={auth ? <Sac /> : <Navigate to="/sac" />} />
        <Route
          path="purchase"
          element={auth ? <Purchase /> : <Navigate to="/login" />}
        />

        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
