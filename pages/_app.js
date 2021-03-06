import "../styles/globals.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/custom.scss";
import "aos/dist/aos.css";

import Header from "../components/Header";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
