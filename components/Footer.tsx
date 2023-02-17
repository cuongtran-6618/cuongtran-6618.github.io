import SectionHeader from "./SectionHeader";
import company from "../data/company.json";

export default function BackHome() {
  return (
    <div className="text-center text-white bg-black p-4 lg:p-20">
      <div className="container mt-8 lg:max-w-5xl">
        <div className="mb-8">
          <div className="flex flex-col mb-12 gap-12 md:justify-center md:aligns-baseline md:flex-row md:gap-4 md:gap-8">
            <div className="p-4 lg:px-12 text-white w-full md:w-1/2 lg:w-1/3 text-left lg:text-center">
              <div className="">
                {company.info.address}            
              </div>
              <div>
                {company.info.telephone}
              </div>
            </div>
            <div className="p-4 lg:px-12 text-white w-full md:w-1/2 lg:w-1/3 text-left lg:text-center">
              <div className="">
                Linkedin            
              </div>
              <div>
                Facebook
              </div>
            </div>
          </div>
          
        </div>
        
        <div className="mb-12">© 2023 {company.info.name} Oy</div>
      </div>
    </div>
  );
}
