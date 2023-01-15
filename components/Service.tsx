import LinkButton from "./LinkButton";
import Icon from "./Icon";

export default function Service({ props }) {
  return (
    <div className="service-item p-5 text-center border primary-color text-white sm:p-12">
      <Icon name={props.icon} />
      <h5 className="font-rubik font-medium uppercase text-xl">
        {props.title}
      </h5>
      <div className="p-7 text-base md:text-base">{props.content}</div>
    </div>
  );
}
