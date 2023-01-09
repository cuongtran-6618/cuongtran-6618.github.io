import Link from "next/link";
import Icon from "./Icon";

export default function LinkArrow({ label, url }) {
  return (
    <div className="">
      <Link
        href={url}
        title={label}
        className="text-xs italic flex flex-row justify-start content-baseline link-color"
      >
        <div className="h-11 leading-[1.48rem] decoration-2 underline underline-offset-4">
          <span className="">{label}&nbsp;&nbsp;</span>
        </div>{" "}
        <Icon
          name={"ArrowLongRight"}
          classOfIcon={"absolute h-8 w-8 sm:h-11 sm:w11 -left-4"}
        />
      </Link>
    </div>
  );
}
