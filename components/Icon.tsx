import {
  XMarkIcon,
  Cog8ToothIcon,
  AdjustmentsVerticalIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";

export default function Icon({ name }) {
  let icon = <XMarkIcon />;
  const classOfIcon = "h-8 w-8 sm:h-11 sm:w11";
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
  }

  return icon;
}
