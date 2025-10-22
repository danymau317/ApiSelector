import { type CustomApiSelectorItemType } from "./CustomApiSelectorItem";
import CustomApiSelectorItem from "./CustomApiSelectorItem";

type CustomApiSelectorProps = {
  className?: string;
  isSelectedItems: boolean[];
  setIsSelectedItems: React.Dispatch<React.SetStateAction<boolean[]>>;
};

const customApiItems: CustomApiSelectorItemType[] = [
  {
    method: "get",
    description: "Obtener",
    bgBadge: "lightblue",
    colorBadge: "darkblue",
  },
  {
    method: "post",
    description: "Crear",
    bgBadge: "lightgreen",
    colorBadge: "darkgreen",
  },
  {
    method: "patch",
    description: "Actualizar",
    bgBadge: "lightyellow",
    colorBadge: "darkyellow",
  },
  {
    method: "delete",
    description: "Eliminar",
    bgBadge: "lightred",
    colorBadge: "darkred",
  },
];

export default function CustomApiSelector({
  className,
  isSelectedItems,
  setIsSelectedItems,
}: CustomApiSelectorProps) {
  function updateSelectedItem(index: number) {
    const update = isSelectedItems.map((_, i) => i === index);
    setIsSelectedItems(update);
  }

  return (
    <section
      className={`flex justify-evenly bg-[#efefe7] py-2 px-0.5 ${className}`}
    >
      {customApiItems.map((item, index) => (
        <CustomApiSelectorItem
          key={index}
          method={item.method}
          description={item.description}
          bgBadge={item.bgBadge}
          colorBadge={item.colorBadge}
          isSelected={isSelectedItems[index]}
          setIsSelected={() => updateSelectedItem(index)}
        />
      ))}
    </section>
  );
}
