// import logo from "./logo.svg";
import "./App.css";
import Cartscreen from "./screens/Cartscreen";
import Dashboard from "./screens/Dashboard";
import Loginscreen from "./screens/Loginscreen";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route exact path="/home" element={<Dashboard />}></Route>
          <Route path="/cart" element={<Cartscreen />}></Route>
          <Route path="/register" element={<Loginscreen />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
