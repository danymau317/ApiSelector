type DashboardWeatherItemProps = {
  title: string;
  background: string;
  color: string;
  nameIcon: string;
  classNameIcon?: string;
  measure: string;
  description: string;
};

const backgroundColors: Record<string, string> = {
  lightpurple: "bg-purple-50",
  purple: "bg-purple-500",
  darkpurple: "bg-purple-700",
};

const fontColors: Record<string, string> = {
  lightpurple: "text-purple-50",
  purple: "text-purple-500",
  darkpurple: "text-purple-700",
};

export default function DashboardWeatherItem({
  title,
  background,
  color,
  nameIcon,
  classNameIcon,
  measure,
  description,
}: DashboardWeatherItemProps) {
  return (
    <article
      className={`border-2 border-blue-500 ${backgroundColors[background]} flex flex-col p-5 rounded-xl`}
    >
      <header className="flex justify-between">
        <h2>{title}</h2>
        <span
          className={`material-symbols-outlined ${classNameIcon} ${fontColors[color]}`}
        >
          {nameIcon}
        </span>
      </header>
      <p>{measure}</p>
      <p>{description}</p>
    </article>
  );
}
