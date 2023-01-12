import Service from "./Service";
import data from "../data/services.json";
import LinkArrow from "./LinkArrow";

export default function ServiceList() {
  return (
    <section className="container mx-4 sm:mx-auto pt-4 pb-4">
      <div>
        <h3 className="text-2xl md:text-3xl mb-8 md:mb-16 text-white">
          Our Services
        </h3>
      </div>
      <div className="flex flex-col sm:flex-row justify-center aligns-baseline gap-16">
        {data.services.map((service) => (
          <Service key={service.uid} props={service} />
        ))}
      </div>
      <LinkArrow
        label={"Contact us for more information   "}
        url={"./contact"}
      />
    </section>
  );
}
