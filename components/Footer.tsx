import Link from "next/link";
import company from "../data/company.json";

export default function BackHome() {
  return (
    <div className="text-center my-12 text-white">
      <Link href="/">Home page</Link>
      <div>© 2023 {company.info.name} Oy</div>
    </div>
  );
}
