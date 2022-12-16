import Link from "next/link";

export default function Service({ props }) {
  return (
    <div className='container'>
      <h3>{props.title}</h3>
      <div className='container'>{props.content}</div>
      <Link href={props.link} className='hover:underline'>
        See more
      </Link>
    </div>
  );
}
