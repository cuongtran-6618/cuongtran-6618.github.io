import Link from "next/link";

export default function LinkButton({ label, url }) {
  return (
    <Link href={url} title={label} className="text-xs italic">
      {label}
    </Link>
  );
}
