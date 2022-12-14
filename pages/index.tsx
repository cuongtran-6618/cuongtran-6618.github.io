import Layout from "../components/Layout";
import ServiceList from "../components/ServiceList";
import HeroSection from "../components/HeroSection";
import TeamList from "../components/TeamList";
import PorfolioList from "../components/PorfolioList";

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <ServiceList />
      <PorfolioList />
      <TeamList />
    </Layout>
  );
}
