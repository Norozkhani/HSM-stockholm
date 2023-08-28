import "./App.css";
import LandingPage from "./Components/LandingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Jobs from "./Components/Jobs";
import Projects from "./Components/Projects";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="About" element={<About />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Jobs" element={<Jobs />} />
          <Route path="Projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
