export type UserLiProps = {
  nameIcon: string;
  classNameIcon?: string;
  textContent: string;
  classNameText?: string;
};

export default function UserLi({
  nameIcon,
  classNameIcon,
  textContent,
  classNameText,
}: UserLiProps) {
  return (
    <li className="flex gap-5 my-2">
      <span
        className={`material-symbols-outlined text-gray-700 ${classNameIcon}`}
      >
        {nameIcon}
      </span>
      <p className={`text-md ${classNameText}`}>{textContent}</p>
    </li>
  );
}
