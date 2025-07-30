import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Photos() {
  return (
    <div>
      <Header title="Photo Gallery" subtitile='These are my favourite photos taken from my travels' />
      {/* render <img src="/images/..." /> for your photos */}
      <Footer />
    </div>
  );
}
