import "./App.css";
import Navbar from "./Navbar";
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost"; // Import the BlogPost component for individual posts
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Home from "./pages/Home";
import Newsletter from "./pages/Newsletter";
import NewsletterPosts from "./components/NewsletterPosts"; // Import NewsletterDetail
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />{" "}
          {/* Route for individual blog posts */}
          <Route path="/newsletter" element={<Newsletter />} />{" "}
          {/* Route for newsletter landing page */}
          <Route path="/newsletter/:id" element={<NewsletterPosts />} />{" "}
          {/* Route for individual newsletters */}
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
