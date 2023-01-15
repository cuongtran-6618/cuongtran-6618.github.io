import Link from "next/link";

export default function BackHome() {
  return (
    <div className="text-center my-8 text-white">
      <Link href="/">Home page</Link>
      <div>© 2022 Arpeggio</div>
    </div>
  );
}
