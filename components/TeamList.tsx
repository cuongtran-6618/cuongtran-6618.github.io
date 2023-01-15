import Person from "./Person";
import data from "../data/teams.json";
import SectionHeader from "./SectionHeader";
export default function TeamList() {
  return (
    <section className="block-container mx-auto">
      <div>
        <SectionHeader title={"Our team"} />
      </div>
      <div className="flex flex-col md:justify-center md:aligns-baseline md:flex-row gap-4 md:gap-8 mb-10">
        {data.teams.map((person) => (
          <Person key={person.uid} props={person} />
        ))}
      </div>
    </section>
  );
}
