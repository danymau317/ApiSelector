type Props = {
  title: string;
  method: string;
  endpoint: string;
};

export default function ApiTitle({ title, method, endpoint }: Props) {
  return (
    <section className="border-2 border-gray-300 rounded-lg my-5 p-5 shadow-gray-700">
      <h2 className="font-medium text-xl">{title}</h2>
      <div className="flex flex-col justify-evenly gap-1">
        <p className="bg-green-500 rounded-lg w-15 text-center py-0.5 text-lg font-semibold">
          {method}
        </p>
        <p className="text-gray-700 text-sm">{endpoint}</p>
      </div>
    </section>
  );
}
