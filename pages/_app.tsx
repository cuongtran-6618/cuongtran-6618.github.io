import next from "next";
import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import { Rubik } from "@next/font/google";

const rubik = Rubik({ subsets: ["latin"], weight: ["400", "500", "700"] });

function MyApp({ Component, pageProps }) {
  return (
    <main className={rubik.className}>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
