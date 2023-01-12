import LinkButton from "./LinkButton";
import Icon from "./Icon";

export default function Service({ props }) {
  return (
    <div className="service-item p-4 sm:p-12 border primary-color text-white">
      <Icon name={props.icon} />
      <h5 className="">
        {props.title}
      </h5>
      <div className="container text-base md:text-base">{props.content}</div>
    </div>
  );
}
