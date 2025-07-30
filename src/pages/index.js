import Header from "../components/Header";
import Logo from "../components/Logo";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

export default function Home() {
  return (
    <div className="App">
      <Header
        title="Brighton Young .dev"
        subtitle="Explore my work and projects"
      />
      <Navigation />
      {/* Logo component can be used here if needed */}
      <Logo />
      {/* …homepage content… */}
      <Footer />
    </div>
  );
}
