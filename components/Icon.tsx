import {
  XMarkIcon,
  Cog8ToothIcon,
  AdjustmentsVerticalIcon,
  UserCircleIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/24/solid";

export default function Icon({
  name,
  classOfIcon = "h-9 w-9 mx-auto mb-8 sm:h-11 sm:w11",
}) {
  let icon = <XMarkIcon />;

  switch (name) {
    case "Cog8Tooth":
      icon = <Cog8ToothIcon className={classOfIcon} />;
      break;
    case "AdjustmentsVertical":
      icon = <AdjustmentsVerticalIcon className={classOfIcon} />;
      break;
    case "UserCircle":
      icon = <UserCircleIcon className={classOfIcon} />;
      break;
    case "ArrowLongRight":
      icon = <ArrowLongRightIcon className={classOfIcon} />;
      break;
  }

  return <div className={classOfIcon}>{icon}</div>;
}
