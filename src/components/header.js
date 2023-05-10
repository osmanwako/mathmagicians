function Header() {
  return (
    <nav className="nav-header">
      <h1 className="nav-logo">Math Magicians </h1>
      <ul className="nav-unorder">
        <li className="nav-list">
          <a href="/" className="nav-link">Home</a>
        </li>
        <li>
          <a href="/calculator" className="nav-link">Calculator</a>
        </li>
        <li>
          <a href="/quotes" className="nav-link link-quote">Quotes</a>
        </li>
      </ul>
    </nav>
  );
}
export default Header;
