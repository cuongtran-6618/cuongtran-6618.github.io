import Link from "next/link";

export default function NavigationItem({ item }) {
  let navigationLink = <Link href={item.link}>{item.title}</Link>
  
  if (item.type === "anchor") {
    navigationLink = <Link href={'#' + item.link}>{item.title}</Link>
  }
  return (
    <li className="hover:underline underline-offset-8 text-[18px] uppercase">
      {navigationLink}
    </li>
  );
}
