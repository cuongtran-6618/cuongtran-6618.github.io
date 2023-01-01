import Layout from "../components/layout";
import Slider from "../components/slider";
import data from "../data/services.json";
import Service from "../components/service";

export default function Home() {
  return (
    <Layout>
      <section className="lg:container lg:mx-auto mt-4 mb-4">
        <div className="grid grid-cols-2">
          {data.services.map((service) => (
            <Service key={service.uid} props={service} />
          ))}
        </div>
      </section>
    </Layout>
  );
}
