import { useState, useEffect } from "react";

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
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [users, setUsers] = useState<ApiUserProps[]>([]);

  useEffect(() => {
    if (!isSelected) return;

    async function fetchUsers() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!res.ok) throw new Error("No se pudo obtener Usuarios :(");
        const data = await res.json();
        setUsers(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    }
    fetchUsers();
  }, [isSelected]);

  return loading ? (
    <p>Cargando Usuarios...</p>
  ) : error ? (
    <p>Hubo un error Error: {error}</p>
  ) : (
    <section
      className={`border-2 border-red-500 grid grid-cols-1 grid-rows-2 gap-3 overflow-hidden transition-all duration-550 z-[-2] ${className}`}
    >
      {users.map((user) => (
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
