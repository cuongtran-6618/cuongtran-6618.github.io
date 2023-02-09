import SectionHeader from "./SectionHeader";
import company from "../data/company.json";

export default function BackHome() {
  return (
    <div className="text-center mt-12 text-white bg-black p-4 lg:p-20">
      <div className="container mt-8">
        <div className="mb-24">
          <SectionHeader title={"Contact"} />
          <div className="">
            {company.info.address}            
          </div>
          <div>
            {company.info.telephone}
          </div>
        </div>
        
        <div className="mb-8">© 2023 {company.info.name} Oy</div>
      </div>
    </div>
  );
}
