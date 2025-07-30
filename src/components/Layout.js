import Header from "./Header";
import Navigation from "./Navigation";
import Footer from "./Footer";
import Logo from "./Logo";

/**
 * A full-screen, flex container that places:
 *   • header + nav at the top,
 *   • whatever children you pass in the middle,
 *   • footer at the bottom,
 * and applies your .App background.
 */
export default function Layout({ title, subtitle, children }) {
  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        justifyContent: "space-between",
      }}
    >
      {/* Top: Site header + nav */}
      <div>
        <Header title={title} subtitle={subtitle} />
        <Navigation />
        <Logo />
      </div>
      

      {/* Middle: page-specific content */}
      <div>{children}</div>

      {/* Bottom: Footer */}
      <Footer />
    </div>
  );
}
