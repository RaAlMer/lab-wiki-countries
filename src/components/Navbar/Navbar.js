import "./Navbar.css";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">
        <h1>LAB - WikiCountries</h1>
      </Link>
    </div>
  );
}
