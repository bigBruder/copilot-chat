import React from "react";

interface IconButtonProps {
  icon: React.FC;
  action?: () => void;
}

const IconButton: React.FC<IconButtonProps> = ({ icon: Icon, action }) => {
  return <button onClick={action}>{<Icon />}</button>;
};

export default IconButton;
