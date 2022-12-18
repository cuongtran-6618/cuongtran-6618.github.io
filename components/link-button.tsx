import Link from "next/link";

export default function LinkButton({ label, url }) {
  return (
    <button className="border border-slate-300 px-4 py-2 rounded-full hover:bg-cyan-500 hover:text-white hover:border-cyan-500">
      <Link href={url} title={label} className="text-xs italic">
        {label}
      </Link>
    </button>
  );
}
