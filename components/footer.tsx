import Link from "next/link";

export default function BackHome() {
    return (
        <div className="text-center">
            <Link href='/'>Home page</Link>
            <div>© 2022 Arpeggio</div>
        </div>
    )
}