import { QueryClient, QueryClientProvider } from "react-query";
import { WelcomeScreen } from "./components/CopilotChat/CopilotChatComponents/WelcomeScreen";
import { useState } from "react";
import CopilotChat from "./components/CopilotChat/CopilotChat";
import MessageInput from "./components/CopilotChat/CopilotChatComponents/MessageInput";
import CrossIcon from "./assets/icons/Cross";

const queryClient = new QueryClient();

function App() {
  const [isWelcome, setIsWelcome] = useState(true);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="w-full flex justify-center items-center h-screen">
        <div className="h-full flex flex-col mx-auto w-full text-sm text-gray-900 shadow-lg backdrop-blur-[25px] bg-white bg-opacity-80 max-w-[480px]">
          <div className="flex gap-2 justify-between px-4 py-2 w-full text-xl font-semibold items-center">
            <div>Financial Copilot Chat </div>
            <button>
              <CrossIcon />
            </button>
          </div>
          <div className="grow overflow-y-scroll">
            {isWelcome ? (
              <WelcomeScreen action={() => setIsWelcome(false)} />
            ) : (
              <CopilotChat />
            )}
          </div>
          <MessageInput />
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;

export const SectiaonWithTitleAndAction = ({
  title,
  action,
  items,
}: {
  title: string;
  action: () => void;
  items: string[];
}) => {
  return (
    <div className="flex flex-col items-start px-4 py-2 gap-2 w-full border-b-2 border-solid border-slate-300">
      <div className="text-lg font-medium">{title}</div>
      {items.map((item) => (
        <ChildComponent text={item} action={action} />
      ))}
    </div>
  );
};

const ChildComponent = ({
  text,
  action,
}: {
  text: string;
  action: () => void;
}) => {
  return (
    <button
      className="justify-center px-4 py-2 bg-violet-100 rounded-[50px]"
      onClick={action}
    >
      {text}
    </button>
  );
};
