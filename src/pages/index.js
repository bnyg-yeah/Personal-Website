import Header from "../components/Header";
import Logo from "../components/Logo";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

export default function Home() {
  return (
    // Add className="App" so your globals.css background applies:
    <div
      className="App"
      style={{
        display: "flex", // make it a flexbox…
        flexDirection: "column", // …that stacks children vertically
        minHeight: "100vh", // ensure it’s always as tall as the viewport
        justifyContent: "space-between", // push first child group to top and footer to bottom
      }}
    >
      {/* 2. Group all “top” content together */}
      <div>
        <Header
          title="Brighton Young .dev"
          subtitle="Explore my work and projects"
        />
        <Navigation />
        <Logo />
        {/* any other homepage content */}
      </div>

      {/* 3. Footer lives here, and flex “space-between” pushes it to the bottom */}
      <Footer />
    </div>
  );
}
