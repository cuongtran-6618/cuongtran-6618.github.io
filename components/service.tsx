import Link from "next/link";
import LinkButton from "./link-button";

export default function Service({ props }) {
  return (
    <div className="container rounded-sm p-4 border border-slate-200">
      <h4 className="text-xl">{props.title}</h4>
      <div className="container mt-7 mb-4">{props.content}</div>
      <LinkButton label={"See more"} url={props.link} />
    </div>
  );
}
