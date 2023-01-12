import Person from "./Person";
import data from "../data/teams.json";

export default function TeamList() {
  return (
    <section className="container mx-4 sm:mx-auto pt-4 pb-4">
      <div>
        <h3 className="text-2xl mb-8 md:mb-16 md:text-3xl mb-[72px] text-white">
          Our team
        </h3>
      </div>
      <div className="flex flex-col sm:flex-row justify-center aligns-baseline gap-4">
        {data.teams.map((person) => (
          <Person key={person.uid} props={person} />
        ))}
      </div>
    </section>
  );
}
