import {
    XMarkIcon,
    Cog8ToothIcon,
    AdjustmentsVerticalIcon
  } from "@heroicons/react/24/solid";

export default function Icon(
    {name}
) {
    let icon = <XMarkIcon />
    
    switch(name) {
        case 'Cog8Tooth':
            icon = <Cog8ToothIcon className="h-11 w-11"/>;    
            break;
        case 'AdjustmentsVertical':
            icon = <AdjustmentsVerticalIcon className="h-11 w-11"/>;            
            break;
    }
                        
    return (
        icon
    )
}