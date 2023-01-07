import Service from "../components/service";
import data from "../data/services.json";

export default function ServiceList() {
  return (
    <section className="lg:container lg:mx-auto pt-4 pb-4">
      <div>
        <h3 className="font-bold text-4xl mb-[72px] text-white">Our Services</h3>
      </div>
    <div className="grid grid-rows-1 gap-4 sm:grid-cols-2">
      {data.services.map((service) => (
        <Service key={service.uid} props={service} />
      ))}
    </div>
  </section>
  );
}
