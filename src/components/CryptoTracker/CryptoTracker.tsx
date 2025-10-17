import useFetch from "../../hooks/useFetch";
import CryptoTrackerItem from "./CryptoTrackerItem";

type CryptoTrackApiProps = {
  id: string;
  image: string;
  name: string;
  symbol: string;
  price_change_percentage_24h: number;
  current_price: number;
  market_cap: number;
};

type CryptoTrackerProps = {
  className?: string;
  isSelected: boolean;
};

export default function CryptoTracker({
  className,
  isSelected,
}: CryptoTrackerProps) {
  const {
    data: cryptos,
    loading,
    error,
  } = useFetch<CryptoTrackApiProps[]>(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=8&page=1",
    isSelected
  );

  return loading ? (
    <p>Cargando Informacion de Cryptos...</p>
  ) : error ? (
    <p>Hubo un error: {error} </p>
  ) : (
    <section
      className={`grid grid-cols-1 grid-rows-2 gap-3 overflow-hidden transition-all duration-550 z-[-2] lg:grid-cols-2 ${className}`}
    >
      {cryptos?.map((crypto) => (
        <CryptoTrackerItem
          key={crypto.id}
          image={crypto.image}
          name={crypto.name}
          symbol={crypto.symbol}
          price_change_percentage_24h={crypto.price_change_percentage_24h}
          current_price={crypto.current_price}
          market_cap={crypto.market_cap}
        />
      ))}
    </section>
  );
}
