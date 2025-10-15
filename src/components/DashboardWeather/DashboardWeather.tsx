import DashboardWeatherItem from "./DashboardWeatherItem";

type Props = {
  className?: string;
};

export default function DashboardWeather({ className }: Props) {
  return (
    <section
      className={`border-2 border-red-500 grid grid-cols-1 grid-rows-2 gap-3 ${className}`}
    >
      <DashboardWeatherItem
        title="temperatura"
        background="lightpurple"
        color="darkpurple"
        nameIcon="thermometer"
        measure="18.7C"
        description="Ciudad de Mexico"
      />
    </section>
  );
}
