import "./App.css";
import NavBarComp from "./components/NavBarComp/NavBarComp";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Footer from "./components/Footer";
import Pp from "./pages/Pp";
import Tc from "./pages/Tc";
function App() {
  return (
    <div className="App">
      <Router>
        <NavBarComp />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/pp" element={<Pp />} />
          <Route path="/tc" element={<Tc />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
