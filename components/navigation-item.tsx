import Link from "next/link";

export default function NavigationItem({ item }) {
  return (
    <div className="hover:underline underline-offset-8">
      <Link href={item.link}>{item.title}</Link>
    </div>
  );
}
