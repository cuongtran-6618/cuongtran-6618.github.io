import Link from "next/link";

export default function NavigationItem({ item }) {
  return (
    <li className="hover:underline underline-offset-8 font-medium text-lg">
      <Link href={item.link}>{item.title}</Link>
    </li>
  );
}