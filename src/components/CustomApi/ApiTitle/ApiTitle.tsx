type Props = {
  title: string;
  method: string;
  endpoint: string;
  className?: string;
};

export default function ApiTitle({
  title,
  method,
  endpoint,
  className,
}: Props) {
  return (
    <section
      className={`border-2 border-gray-300 rounded-lg my-5 p-5 shadow-gray-700 transition-all duration-500 ${className}`}
    >
      <h2 className="font-medium text-xl lg:text-3xl lg:mb-5">{title}</h2>
      <div className="flex flex-col justify-evenly gap-1">
        {method && (
          <p className="bg-green-500 rounded-lg w-15 text-center py-0.5 text-lg font-semibold lg:text-xl">
            {method}
          </p>
        )}
        <p className="text-gray-700 text-sm lg:text-lg">{endpoint}</p>
      </div>
    </section>
  );
}
