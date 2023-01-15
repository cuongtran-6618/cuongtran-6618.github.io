import Porfolio from "./Porfolio";
import data from "../data/porfolios.json";
import LinkArrow from "./LinkArrow";
import SectionHeader from "./SectionHeader";

export default function PorfolioList() {
  return (
    <section className="block-container mx-auto">
      <div>
        <SectionHeader title={"Our Porfolio"} />
      </div>
      <div className="flex flex-col mx-auto md:flex-row md:justify-center md:aligns-baseline md:gap-8 mb-10">
        {data.porfolios.map((porfolio) => (
          <Porfolio key={porfolio.uid} props={porfolio} />
        ))}
      </div>
      <LinkArrow label={"See more of our project"} url={"./porfolio"} />
    </section>
  );
}
