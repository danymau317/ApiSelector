type ApiSelectorCardProps = {
  className?: string;
  nameIcon: string;
  classNameIcon?: string;
  onClick: () => void;
  isSelected: boolean;
};

export default function ApiSelectorCard({
  className,
  nameIcon,
  classNameIcon,
  onClick,
  isSelected,
}: ApiSelectorCardProps) {
  return (
    <article
      className={`w-full flex justify-center rounded-lg py-2 transition-all duration-500 hover:bg-white ${
        isSelected && "bg-white shadow-lg shadow-gray-400"
      } ${className}`}
      onClick={onClick}
    >
      <span
        className={`material-symbols-outlined text-[1px] transition-all duration-400 ${
          isSelected && "scale-120"
        } ${classNameIcon}`}
      >
        {nameIcon}
      </span>
    </article>
  );
}
