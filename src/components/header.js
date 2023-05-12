import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="nav-header">
      <h1 className="nav-logo">Math Magicians </h1>
      <ul className="nav-unorder">
        <li className="nav-list">
          <Link to="./" className="nav-link">Home</Link>
        </li>
        <li>
          <Link to="./calculator" className="nav-link">Calculator</Link>
        </li>
        <li>
          <Link to="./quotes" className="nav-link link-quote">Quotes</Link>
        </li>
      </ul>
    </nav>
  );
}
export default Header;
