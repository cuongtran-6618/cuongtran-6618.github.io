import LinkButton from "./link-button";

export default function Service({ props }) {
  return (
    <div className="service-item rounded-sm p-4 border border-slate-200 ruby-red text-white">
      <h4 className="text-xl">{props.title}</h4>
      <div className="container mt-7 mb-4">{props.content}</div>
    </div>
  );
}
