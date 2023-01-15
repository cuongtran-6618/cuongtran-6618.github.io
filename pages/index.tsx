import Layout from "../components/Layout";
import ServiceList from "../components/ServiceList";
import HeroSection from "../components/HeroSection";
import TeamList from "../components/TeamList";
import PorfolioList from "../components/PorfolioList";
import Contact from "../components/Contact";
export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <ServiceList />
      <PorfolioList />
      <Contact />
      <TeamList />
    </Layout>
  );
}
