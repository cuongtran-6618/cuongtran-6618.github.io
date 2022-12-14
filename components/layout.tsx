import Footer from './footer';
import Meta from './meta';
import Navigation from './navigation';

export default function Layout({ children }) {
  return (
    <>
      <Navigation />
      <Meta />
      <div className="min-h-screen">        
        <main className="container mx-auto">{children}</main>
      </div>
      <Footer />
    </>
  )
}