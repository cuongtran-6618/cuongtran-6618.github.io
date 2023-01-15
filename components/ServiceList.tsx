import Service from "./Service";
import data from "../data/services.json";
import LinkArrow from "./LinkArrow";
import SectionHeader from "./SectionHeader";

export default function ServiceList() {
  return (
    <section className="block-container mx-auto">
      <div>
        <SectionHeader title={"Our Services"} />
      </div>
      <div className="flex flex-col md:justify-center md:aligns-baseline md:flex-row gap-4 md:gap-8 mb-10">
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
