import Footer from './footer';
import Meta from './meta';
import Navigation from './navigation';

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <div className='lg:container lg:mx-auto'></div><Navigation />
      <div className="min-h-screen">        
        <main className="lg:container lg:mx-auto">{children}</main>
      </div>
      <Footer />
    </>
  )
}