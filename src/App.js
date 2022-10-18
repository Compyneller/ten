import "./App.css";
import NavBarComp from "./components/NavBarComp/NavBarComp";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
function App() {
  return (
    <div className="App">
      <NavBarComp />
      <Home />
    </div>
  );
}

export default App;
