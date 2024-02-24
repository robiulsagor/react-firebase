import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ResetPass from "./pages/ResetPass";
import ProtectedRoutes from "./routes/ProtectedRoutes";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<ProtectedRoutes />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
        </Route>
        <Route path="/home/hello" element={<h2>Hi hello</h2>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reset" element={<ResetPass />} />
      </Routes>
    </Router>
  );
}
