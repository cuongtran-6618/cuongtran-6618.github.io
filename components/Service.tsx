import Icon from "./Icon";

export default function Service({ props }) {
  return (
    <div className="service-item text-center border primary-color text-white pt-8 px-4 pb-8 w-full md:w-1/2 lg:w-1/3 md:p-12 md:h-auto">
      <Icon name={props.icon} />
      <h5 className="font-rubik font-medium uppercase text-xl">
        {props.title}
      </h5>
      <div className="pt-6 text-base md:text-base break-words">
        {props.content}
      </div>
    </div>
  );
}
