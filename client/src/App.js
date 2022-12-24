// import logo from "./logo.svg";
import "./App.css";
import Cartscreen from "./screens/Cartscreen";
import Dashboard from "./screens/Dashboard";
import Loginscreen from "./screens/Loginscreen";

function App() {
  return (
    <div className="App">
      {/* <Loginscreen /> */}
      <Dashboard />
      <br></br>
      <Cartscreen />
    </div>
  );
}

export default App;
