import Layout from "../components/Layout";
import ServiceList from "../components/ServiceList";
import HeroSection from "../components/HeroSection";
import TeamList from "../components/TeamList";

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <ServiceList />
      <TeamList />
    </Layout>
  );
}
