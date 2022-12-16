import Link from 'next/link'

export default function Header() {
  return (
    <h2 className=''>
      <Link href='/' className='hover:underline'>
        Homepage
      </Link>
    </h2>
  );
}