export type CustomApiSelectorItemType = {
  method: string;
  description: string;
  bgBadge: string;
  colorBadge: string;
};

type CustomApiSelectorItemProps = {
  className?: string;
  method: string;
  description: string;
  bgBadge: string;
  colorBadge: string;
  isSelected: boolean;
  setIsSelected: () => void;
};

const backgroundBadge: Record<string, string> = {
  lightblue: "bg-blue-200",
  lightgreen: "bg-green-200",
  lightyellow: "bg-yellow-200",
  lightred: "bg-red-200",
};

const colorsBadge: Record<string, string> = {
  darkblue: "text-blue-600",
  darkgreen: "text-green-700",
  darkyellow: "text-yellow-600",
  darkred: "text-red-600",
};

export default function CustomApiSelectorItem({
  className,
  method,
  description,
  bgBadge,
  colorBadge,
  isSelected,
  setIsSelected,
}: CustomApiSelectorItemProps) {
  return (
    <article
      className={`flex flex-col items-center flex-1 text-sm py-3 px-1 rounded-xl  transition-all duration-500 ${
        isSelected && "bg-white shadow-lg shadow-gray-300"
      } ${className}`}
      onClick={setIsSelected}
    >
      <p
        className={`uppercase p-2 rounded-xl text-xs font-bold my-1 ${backgroundBadge[bgBadge]} ${colorsBadge[colorBadge]}`}
      >
        {method}
      </p>
      <p className="font-semibold text-gray-900">{description}</p>
    </article>
  );
}
