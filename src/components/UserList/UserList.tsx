import useFetch from "../../hooks/useFetch";
import UserListItem from "./UserListItem";

type ApiUserProps = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    city: string;
  };
  phone: string;
  website: string;
  company: {
    name: string;
  };
};

type UserListProps = {
  className: string;
  isSelected: boolean;
};

export default function UserList({ className, isSelected }: UserListProps) {
  const {
    data: users,
    loading,
    error,
  } = useFetch<ApiUserProps[]>(
    "https://jsonplaceholder.typicode.com/users",
    isSelected
  );

  return loading ? (
    <p>Cargando Usuarios...</p>
  ) : error ? (
    <p>Hubo un error Error: {error}</p>
  ) : (
    <section
      className={`grid grid-cols-1 grid-rows-2 gap-3 overflow-hidden transition-all duration-550 z-[-2] lg:grid-cols-3 ${className}`}
    >
      {users?.map((user) => (
        <UserListItem
          key={user.id}
          name={user.name}
          username={user.username}
          email={user.email}
          location={user.address.city}
          tel={user.phone}
          page={user.website}
          enterprise={user.company.name}
        />
      ))}
    </section>
  );
}
