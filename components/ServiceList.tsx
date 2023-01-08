import Service from "./Service";
import data from "../data/services.json";

export default function ServiceList() {
  return (
    <section className="container mx-4 sm:mx-auto pt-4 pb-4">
      <div>
        <h3 className="font-bold text-2xl md:text-4xl mb-[72px] text-white">
          Our Services
        </h3>
      </div>
      <div className="flex flex-col sm:flex-row justify-center aligns-baseline gap-16">
        {data.services.map((service) => (
          <Service key={service.uid} props={service} />
        ))}
      </div>
    </section>
  );
}
