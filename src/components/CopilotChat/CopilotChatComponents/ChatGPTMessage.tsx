import { FC, useEffect, useRef, useState } from "react";
import CopyIcon from "../../../assets/icons/Copy";
import OptionsIcon from "../../../assets/icons/Options";
import ThumbDownIcon from "../../../assets/icons/ThumbDown";
import ThumbUpIcon from "../../../assets/icons/ThumbUp";
import ActionMenu from "./ActionMenu";
import IconButton from "./IconButton";

interface IChatGPTMessage {
  showLeftActions: boolean;
}

const ChatGPTMessage: FC<IChatGPTMessage> = ({ showLeftActions }) => {
  const [optionsOpened, setOptionsOpened] = useState(false);
  const optionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (optionsRef.current && event.target instanceof Node) {
        if (!optionsRef.current.contains(event.target)) {
          setOptionsOpened(false);
        }
      }
    };

    if (optionsOpened) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [optionsOpened]);

  return (
    <div className="px-4">
      <div className="flex flex-col p-4 bg-orange-50 rounded-2xl w-full">
        <div className="text-sm text-gray-900">
          here are some potential high-level considerations: Amazon is a massive
          company, with a market capitalization of over $1 trillion. Acquiring
          Amazon would be an enormous financial undertaking likely requiring
          significant debt and dilution of Intel shareholders. On the positive
          side, acquiring Amazon would give Intel access to Amazon's highly
          profitable cloud computing business AWS, which could provide a new
          revenue stream. There could also be opportunities to leverage
          synergies between the companies' technologies. However, Amazon's core
          retail/ecommerce business has lower margins than Intel's semiconductor
          business. So absorbing this could negatively impact Intel's profit
          margins unless costs can be significantly reduced.
        </div>
        <div className="flex gap-0.5 justify-between px-0.5 mt-2">
          <div className="flex justify-between items-start w-full">
            <div className="flex gap-1 items-center h-auto">
              {showLeftActions && (
                <>
                  <IconButton icon={ThumbUpIcon} />
                  <IconButton icon={ThumbDownIcon} />
                  <IconButton
                    icon={OptionsIcon}
                    action={() => setOptionsOpened(true)}
                  />
                  <div className="relative h-full" ref={optionsRef}>
                    <div className="absolute left-0 top-0">
                      {optionsOpened && <ActionMenu />}
                    </div>
                  </div>
                </>
              )}
            </div>
            <IconButton icon={CopyIcon} action={() => {}} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatGPTMessage;
