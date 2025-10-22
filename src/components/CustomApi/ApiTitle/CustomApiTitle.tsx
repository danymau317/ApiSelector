type CustomApiProps = {
  className?: string;
  nameIcon: string;
  customApiName: string;
  descriptionApi: string;
  urlApi: string;
  commentsApi?: string;
};

export default function CustomApiTitle({
  className,
  nameIcon,
  customApiName,
  descriptionApi,
  urlApi,
  commentsApi,
}: CustomApiProps) {
  return (
    <section className={`border-2 border-red-500 ${className}`}>
      <header className="px-3">
        <h2 className="flex gap-5 justify-center text-lg font-semibold">
          <span className="material-symbols-outlined self-center">
            {nameIcon}
          </span>
          {customApiName}
        </h2>
        <p className="text-gray-700 mb-2">{descriptionApi}</p>
        <h2 className="text-md mb-2">URL Base de la API</h2>
        <p className="border-[1px] border-gray-400 rounded-xl py-2 px-3 font-geist mb-2">
          {urlApi}
        </p>
        {commentsApi && <p className="text-sm text-gray-700">{commentsApi}</p>}
      </header>
    </section>
  );
}
