import "tailwindcss/tailwind.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} className="font-serif" />;
}

export default MyApp;
