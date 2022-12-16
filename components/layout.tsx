import Footer from "./footer";
import Meta from "./meta";
import Navigation from "./navigation";

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <div className="lg:container lg:mx-auto">
        <Navigation />
      </div>
      <div className="min-h-screen">
        <main className="lg:mx-auto">{children}</main>
      </div>
      <Footer />
    </>
  );
}
