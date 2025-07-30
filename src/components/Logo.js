import "./Logo.module.css";

function Logo() {
  return (
    <div className="logo">
      <img
        src="/icons/android-chrome-512x512.png"
        alt="Logo"
        className="Logo"
        loading="lazy" // Lazy loading for performance
      />
    </div>
  );
}

export default Logo;
