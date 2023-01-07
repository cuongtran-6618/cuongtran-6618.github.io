import Layout from "../components/layout";
import ServiceList from "../components/ServiceList";
import HeroSection from "../components/hero-section";

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <ServiceList />
    </Layout>
  );
}
