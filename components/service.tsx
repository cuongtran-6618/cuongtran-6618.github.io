import Link from "next/link";

export default function Service({ props }) {
  return (
    <div className="container">
      <Link href="/" className="hover:underline">
        Homepage
      </Link>
    </div>
  );
}
