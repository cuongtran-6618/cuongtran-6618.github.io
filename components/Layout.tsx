import Footer from "./Footer";
import Meta from "./Meta";
import Navigation from "./Navigation";

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <div className="">
        <Navigation />
      </div>
      <div className="min-h-screen">
        <main className="lg:mx-auto">{children}</main>
      </div>
      <Footer />
    </>
  );
}
