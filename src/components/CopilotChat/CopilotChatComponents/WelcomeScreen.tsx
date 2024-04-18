const actions = [
  {
    title: "Define Strategy",
    items: ["Goal Setting", "Strategic Initiatives", "Business Plan Outline"],
  },
  {
    title: "Marketing research",
    items: ["Customer Profiles", "Industry Trends"],
  },
  {
    title: "Risk Assessment",
    items: ["Swot Analysis", "Risk Register", "Risk Score"],
  },
];

export const WelcomeScreen = ({ action }: { action: () => void }) => {
  return (
    <>
      {actions.map((actionItem) => (
        <QuickPromptList
          key={actionItem.title}
          title={actionItem.title}
          action={action}
          items={actionItem.items}
        />
      ))}
    </>
  );
};

export const QuickPromptList = ({
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
        <QuickPromptChild key={item} text={item} action={action} />
      ))}
    </div>
  );
};

const QuickPromptChild = ({
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
