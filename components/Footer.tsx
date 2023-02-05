import Link from "next/link";
import company from "../data/company.json";

export default function BackHome() {
  return (
    <div className="text-center mt-12 text-white bg-black p-20">
      <div className="container">
        <Link href="/">Home page</Link>
        <div>© 2023 {company.info.name} Oy</div>
      </div>
    </div>
  );
}
