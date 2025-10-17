type CryptoTrackerItemProps = {
  image: string;
  name: string;
  symbol: string;
  price_change_percentage_24h: number;
  current_price: number;
  market_cap: number;
};

export default function CryptoTrackerItem({
  image,
  name,
  symbol,
  price_change_percentage_24h,
  current_price,
  market_cap,
}: CryptoTrackerItemProps) {
  const isPositivePriceChange = price_change_percentage_24h > 0;

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });

  const compactFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    notation: "compact",
    maximumFractionDigits: 2,
  });

  const priceFormatter = formatter.format(current_price);
  const marketCapFormatter = compactFormatter.format(market_cap);

  return (
    <article className="border-2 border-gray-300 flex flex-col justify-evenly gap-5 p-3 rounded-xl lg:p-10">
      <header className="flex justify-between">
        <section className="flex gap-3">
          <img
            className="w-[20vw] aspect-square lg:w-[3vw]"
            src={image}
            alt=""
          />
          <div className="flex flex-col">
            <h2 className="font-bold text-xl">{name}</h2>
            <p className="text-md text-gray-600">{symbol.toUpperCase()}</p>
          </div>
        </section>
        <p
          className={`font-semibold text-sm self-center rounded-lg px-2 py-1 lg:text-lg ${
            isPositivePriceChange
              ? "bg-green-200 text-green-700"
              : "bg-red-200 text-red-700"
          }`}
        >
          {price_change_percentage_24h.toFixed(2)}%
        </p>
      </header>
      <section className="flex flex-col">
        <h2 className="text-gray-600">Precio Actual</h2>
        <p className="font-bold text-2xl border-b-2 border-b-gray-300 pb-2">
          {priceFormatter}
        </p>
      </section>
      <section className="flex flex-col ">
        <h2 className="text-gray-600">Market Cap</h2>
        <p className="font-[500]">{marketCapFormatter}</p>
      </section>
    </article>
  );
}
