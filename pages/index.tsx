import Layout from "../components/Layout";
import ServiceList from "../components/ServiceList";
import HeroSection from "../components/HeroSection";
import AboutUs from "../components/AboutUs";
import ContactForm from "../components/ContactForm";
export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <ServiceList />
      <AboutUs />
      <ContactForm />
    </Layout>
  );
}
