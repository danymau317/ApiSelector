import UserLi from "./UserLi";
import type { UserLiProps } from "./UserLi";

export type UserListItemProps = {
  name: string;
  username: string;
  email: string;
  location: string;
  tel: string;
  page: string;
  enterprise: string;
};

export default function UserListItem({
  name,
  username,
  email,
  location,
  tel,
  page,
  enterprise,
}: UserListItemProps) {
  const liItems: UserLiProps[] = [
    {
      nameIcon: "stacked_email",
      textContent: email,
    },
    {
      nameIcon: "location_on",
      textContent: location,
    },
    {
      nameIcon: "call",
      textContent: tel,
    },
    {
      nameIcon: "globe_uk",
      textContent: page,
    },
  ];

  return (
    <article className="border-2 border-gray-300 rounded-lg p-5 flex flex-col justify-evenly gap-1">
      <h2 className="font-bold text-xl">{name}</h2>
      <p className="text-md text-gray-700">@{username}</p>
      <ul>
        {liItems.map((item, index) => (
          <UserLi
            nameIcon={item.nameIcon}
            textContent={item.textContent}
            key={index}
          />
        ))}
      </ul>
      <h3 className="border-t-2 border-gray-300 text-gray-600 mt-2 pt-2">
        Empresa
      </h3>
      <p>{enterprise}</p>
    </article>
  );
}
