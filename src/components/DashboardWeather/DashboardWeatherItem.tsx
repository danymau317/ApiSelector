export type DashboardWeatherItemProps = {
  title: string;
  background: string;
  color: string;
  nameIcon: string;
  measure: string;
  description: string;
};

const backgroundColors: Record<string, string> = {
  lightpurple: "bg-purple-50",
  purple: "bg-purple-500",
  darkpurple: "bg-purple-700",

  lightgreen: "bg-green-50",
  green: "bg-green-500",
  darkgreen: "bg-green-700",

  lightyellow: "bg-yellow-50",
  yellow: "bg-yellow-500",
  darkyellow: "bg-yellow-700",
};

const fontColors: Record<string, string> = {
  lightpurple: "text-purple-50",
  purple: "text-purple-500",
  darkpurple: "text-purple-700",

  lightgreen: "text-green-50",
  green: "text-green-500",
  darkgreen: "text-green-700",

  lightyellow: "text-yellow-50",
  yellow: "text-yellow-500",
  darkyellow: "text-yellow-500",
};

export default function DashboardWeatherItem({
  title,
  background,
  color,
  nameIcon,
  measure,
  description,
}: DashboardWeatherItemProps) {
  return (
    <article
      className={`border-2 border-blue-500 ${backgroundColors[background]} flex flex-col gap-1 p-5 rounded-xl`}
    >
      <header className="flex justify-between">
        <h2 className="font-semibold text-gray-500 text-lg mb-[15%]">
          {title}
        </h2>
        <span
          className={`material-symbols-outlined !text-4xl ${fontColors[color]}`}
        >
          {nameIcon}
        </span>
      </header>
      <p className="font-bold text-3xl">{measure}</p>
      <p className="text-gray-600 text-lg">{description}</p>
    </article>
  );
}
