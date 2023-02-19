import navigation from "../data/navigation.json";
import NavigationItem from "./NavigationItem";
import company from "../data/company.json";

export default function Footer() {
  return (
    <div className="text-center text-white bg-black p-4 lg:p-20 lg:pb-8">
      <div className="container mt-8">
        <div className="mb-8 grid grid-cols-1 lg:grid-cols-4">
          <div className="p-4 text-white w-full text-left">
            <div className="text-3xl">{company.info.name}</div>
          </div>
          <div className="flex flex-col mb-24 gap-12 md:justify-center md:aligns-baseline md:flex-row md:gap-8">
            <div className="p-4 lg:px-12 text-white w-full text-left">
              <div className="font-extrabold">Contact info</div>
              <div className="">Email: {company.info.email}</div>
              <div>Tel: {company.info.telephone}</div>
            </div>
          </div>
          <div className="p-4 lg:px-12 text-white w-full text-left uppercase">
            <div className="">
              <ul>
                {navigation.navigation.map((item) => (
                  <NavigationItem
                    key={item.uid}
                    item={item}
                    navigationClass=""
                  />
                ))}
              </ul>
            </div>
          </div>
          <div className="p-4 lg:px-12 text-white w-full md:w-1/2 lg:w-1/3 text-left lg:text-center">
            <div className="">Linkedin</div>
            <div>Facebook</div>
          </div>
        </div>
        <div className="mb-8">
          © {new Date().getFullYear()} Copyright {company.info.name} Solutions
          Oy
        </div>
      </div>
    </div>
  );
}
