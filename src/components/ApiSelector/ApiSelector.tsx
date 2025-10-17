import { useState } from "react";
import ApiSelectorCard from "./ApiSelectorCard";
import type { ApiProps } from "../../App";

type itemApiSelectorType = {
  nameIcon: string;
  isSelected: boolean;
  title: string;
  method: string;
  endpoint: string;
};

const itemsApiSelector: itemApiSelectorType[] = [
  {
    nameIcon: "contacts_product",
    isSelected: true,
    title: "Lista de Usuarios",
    method: "GET",
    endpoint: "jsonplaceholder.typicode.com/users",
  },
  {
    nameIcon: "image",
    isSelected: false,
    title: "Galeria de Fotos",
    method: "GET",
    endpoint: "picsum.photos/v2/list?page=1&limit=12",
  },
  {
    nameIcon: "cloud",
    isSelected: false,
    title: "Dashboard del Clima",
    method: "GET",
    endpoint: "api.open-meteo.com/v1/forecast",
  },
  {
    nameIcon: "trending_up",
    isSelected: false,
    title: "Crypto Tracker",
    method: "GET",
    endpoint: "api.coingecko.com/api/v3/coins/markets",
  },
];

type Props = {
  setApi: (api: ApiProps) => void;
};

function ApiSelector({ setApi }: Props) {
  const [cards, setCards] = useState<itemApiSelectorType[]>(itemsApiSelector);

  function handleSelect(index: number) {
    const updated = cards.map((card, i) => ({
      ...card,
      isSelected: i === index,
    }));

    const findSelectedItem = cards.find((_, i) => i === index);

    setCards(updated);
    if (findSelectedItem) setApi(findSelectedItem);
  }

  return (
    <section className="grid grid-cols-2 grid-rows-2 justify-items-center gap-2 bg-gray-200 rounded-md mx-auto w-[95vw] mt-5 p-2 lg:grid-cols-4 lg:grid-rows-1">
      {cards.map((card, index) => (
        <ApiSelectorCard
          nameIcon={card.nameIcon}
          key={index}
          onClick={() => handleSelect(index)}
          isSelected={card.isSelected}
        />
      ))}
    </section>
  );
}

export default ApiSelector;
