import { FC } from "react";
import ShorterIcon from "../../../assets/icons/Shorter";
import LongerIcon from "../../../assets/icons/Longer";
import SimplerIcon from "../../../assets/icons/Simpler";
import CasualIcon from "../../../assets/icons/Casual";
import ProfiIcon from "../../../assets/icons/Profi";

const ActionMenu = () => {
  return (
    <div className="flex flex-col p-2 text-sm text-gray-900 whitespace-nowrap rounded-lg shadow-lg backdrop-blur-[25px] bg-white bg-opacity-80 w-[160px]">
      <div className="text-xs text-neutral-500">Modify:</div>
      <ActionButton icon={ShorterIcon} label="Shorter" />
      <ActionButton icon={LongerIcon} label="Longer" />
      <ActionButton icon={SimplerIcon} label="Simpler" />
      <ActionButton icon={CasualIcon} label="Casual" />
      <ActionButton icon={ProfiIcon} label="Professional" />
    </div>
  );
};

type TActionButton = {
  icon: FC;
  label: string;
};

const ActionButton: FC<TActionButton> = ({ label, icon: Icon }) => {
  return (
    <button className="flex gap-2 py-2 rounded items-center">
      <div>{<Icon />}</div>
      <div>{label}</div>
    </button>
  );
};
export default ActionMenu;
