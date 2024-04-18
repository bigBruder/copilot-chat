import React from "react";
import MessageList from "./CopilotChatComponents/MessageList";
import { useMessageStore } from "../../store/globalStore";

const CopilotChat: React.FC = () => {
  const { messages } = useMessageStore();

  return <MessageList messages={messages} />;
};

export default CopilotChat;
