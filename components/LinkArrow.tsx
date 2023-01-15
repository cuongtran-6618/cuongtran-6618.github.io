import Link from "next/link";
import Icon from "./Icon";

export default function LinkArrow({
  label,
  url,
  style = "text-xs italic link-color",
  styleContainer = "text-left md:text-center mb-8",
}) {
  return (
    <div className={styleContainer}>
      <Link href={url} title={label} className={style}>
        <div className="h-8 leading-[1.48rem] decoration-2 inline-block">
          <span className="">{label}</span>
        </div>{" "}
        <Icon
          name={"ArrowLongRight"}
          classOfIcon={"h-8 w-8 sm:h-11 sm:w11 -left-4 inline-block"}
        />
      </Link>
    </div>
  );
}
