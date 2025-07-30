import "../styles/globals.css";
import '../components/Header.module.css';
import '../components/Footer.module.css';
import '../components/Logo.module.css';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

