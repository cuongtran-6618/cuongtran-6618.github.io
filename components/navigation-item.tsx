import Link from "next/link";

export default function NavigationItem({ item }) {
  return (
    <li className="hover:underline underline-offset-8">
      <Link href={item.link}>{item.title}</Link>
    </li>
  );
}
