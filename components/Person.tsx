import LinkButton from "./LinkButton";
import Icon from "./Icon";
import Image from "next/image";

export default function Person({ props }) {
  let avatar = <Icon name="UserCircle" />;
  if (props.avatar !== "") {
  }
  return (
    <div className="width-col-2 p-4 sm:p-12 text-white text-center">
      <div className="avatar flex items-center justify-center">{avatar}</div>
      <h4 className="text-2xl mt-4 sm:mt-8 mb-6 uppercase font-medium">
        {props.title}
      </h4>
      <div className="">{props.email}</div>
      <div className="">{props.phone}</div>
    </div>
  );
}
