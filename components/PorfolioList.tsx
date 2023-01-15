import Porfolio from "./Porfolio";
import data from "../data/porfolios.json";
import LinkArrow from "./LinkArrow";

export default function PorfolioList() {
  return (
    <section className="container mx-4 sm:mx-auto pt-4 pb-4">
      <div>
        <h3 className="text-3xl text-center font-bold md:mb-16 md:text-3xl mb-[72px] text-white">
          Our Porfolio
        </h3>
      </div>
      <div className="flex flex-col sm:flex-row justify-center aligns-baseline gap-16">
        {data.porfolios.map((porfolio) => (
          <Porfolio key={porfolio.uid} props={porfolio} />
        ))}
      </div>
      <LinkArrow label={"See more of our project"} url={"./porfolio"} />
    </section>
  );
}
