import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "./Navbar.css";
export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Troy Galicia
      </Link>
      <ul>
        <CustomLink to="/about">About</CustomLink>
        <CustomLink to="/blog">Blog</CustomLink>
        <CustomLink to="/newsletter">Newsletter</CustomLink>
        <CustomLink to="/projects">Projects</CustomLink>
        <CustomLink to="/resume">Resume</CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
