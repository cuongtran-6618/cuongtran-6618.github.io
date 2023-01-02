import Layout from "../components/layout";
import Slider from "../components/slider";
import data from "../data/services.json";
import Service from "../components/service";
import HeroSection from "../components/hero-section";

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <section className="lg:container lg:mx-auto pt-4 pb-4 rich-black">
        <div className="grid grid-rows-1 gap-4 sm:grid-cols-2 px-5">
          {data.services.map((service) => (
            <Service key={service.uid} props={service} />
          ))}
        </div>
      </section>
    </Layout>
  );
}
