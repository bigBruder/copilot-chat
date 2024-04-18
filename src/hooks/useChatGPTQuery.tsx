import { useMutation, useQueryClient } from "react-query";
import { useMessageStore } from "../store/globalStore";
import { Message } from "../types/globals";

const API_KEY = import.meta.env.VITE_API_KEY;

const useChatGPTQuery = () => {
  const { addMessage } = useMessageStore();
  const queryClient = useQueryClient();

  const {
    mutate: processMessageToChatGPT,
    isLoading,
    isError,
    error,
  } = useMutation(
    async (chatMessages: Message[]) => {
      const apiMessages = chatMessages.map((messageObject) => {
        const role = messageObject.sender === "ChatGPT" ? "assistant" : "user";
        return { role, content: messageObject.message };
      });

      const apiRequestBody = {
        model: "gpt-3.5-turbo",
        messages: apiMessages,
      };
      try {
        const response = await fetch(
          "https://api.openai.com/v1/chat/completions",
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${API_KEY}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify(apiRequestBody),
          }
        );

        const data = await response.json();
        const newMessage: Message = {
          message: data.choices[0].message.content,
          sender: "ChatGPT",
          sentTime: new Date().toISOString(),
        };

        addMessage(newMessage);
      } catch {
        console.log("error");
      }
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("messages");
      },
    }
  );

  return { processMessageToChatGPT, isLoading, isError, error };
};

export default useChatGPTQuery;
