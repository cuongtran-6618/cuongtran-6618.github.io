export default function Porfolio({ props }) {
  return (
    <div className="p-4 md:p-12 border text-white w-full md:w-1/2 lg:w-1/3">
      <h4 className="text-2xl mt-4 sm:mt-8 mb-6 uppercase font-medium">
        {props.title}
      </h4>
      <div className="container">{props.content}</div>
    </div>
  );
}
