import React, { useState, ChangeEvent, KeyboardEvent } from "react";
import useChatGPTQuery from "../../../hooks/useChatGPTQuery";
import { useMessageStore } from "../../../store/globalStore";

const MessageInput: React.FC = () => {
  const [text, setText] = useState<string>("");
  const { addMessage } = useMessageStore();
  const { processMessageToChatGPT, isLoading } = useChatGPTQuery();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  const sendMessage = async () => {
    if (text.trim() !== "") {
      addMessage({
        message: text,
        sentTime: new Date().toISOString(),
        sender: "user",
      });
      try {
        await processMessageToChatGPT([
          { message: text, sentTime: new Date().toISOString(), sender: "user" },
        ]);
        setText("");
      } catch (error) {
        console.error("Error sending message:", error);
      }
    }
  };

  return (
    <>
      <div className="px-4">
        {isLoading && <div className="loading">...</div>}
      </div>
      <div className="p-4">
        <input
          type="text"
          placeholder="Enter a prompt"
          className="justify-center w-full items-start self-center px-4 py-4 max-w-full text-base bg-slate-50 rounded-[50px] text-neutral-500 outline-none"
          value={text}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
      </div>
    </>
  );
};

export default MessageInput;
