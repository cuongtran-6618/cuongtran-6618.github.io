import LinkButton from "./LinkButton";
import Icon from "./Icon";

export default function Service({ props }) {
  return (
    <div className="service-item width-col-2 p-4 sm:p-12 border primary-color text-white">
      <Icon name={props.icon} />
      <h4 className="text-2xl mt-4 sm:mt-8 mb-6 uppercase font-medium">
        {props.title}
      </h4>
      <div className="container">{props.content}</div>
    </div>
  );
}
