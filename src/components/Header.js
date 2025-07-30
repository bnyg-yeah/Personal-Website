import "./Header.module.css";

function Header({ title, subtitle }) {
  return (
    <header className="header">

      <h1 className="header_title">{title}</h1>

      {/* this lets header be optional */}
      {subtitle && <p className="header_subtitle">{subtitle}</p>} 

    </header>
  );
}

export default Header;