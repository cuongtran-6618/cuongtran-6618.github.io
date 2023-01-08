import LinkButton from "./LinkButton";
import Icon from "./Icon";

export default function Porfolio({ props }) {
  return (
    <div className="width-col-2 p-4 sm:p-12 border text-white">
      <h4 className="text-2xl mt-4 sm:mt-8 mb-6 uppercase font-medium">
        {props.title}
      </h4>
      <div className="container">{props.content}</div>
    </div>
  );
}
