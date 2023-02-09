import Service from "./Service";
import data from "../data/services.json";
import LinkArrow from "./LinkArrow";
import SectionHeader from "./SectionHeader";

export default function ServiceList() {
  return (
    <section className="block-container mx-auto mb-12 p-4" id="our-services-container">
      <div>
        <SectionHeader title={"Our Services"} />
      </div>
      <div className="flex flex-col mb-12 gap-12 md:justify-center md:aligns-baseline md:flex-row md:gap-4 md:gap-8">
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
