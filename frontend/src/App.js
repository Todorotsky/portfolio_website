import "./App.css";
import Navbar from "./Navbar";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Home from "./pages/Home"; // Import the Home component
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <Routes>
          <Route path="/" element={<Home />} /> {/* Use Home component here */}
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
