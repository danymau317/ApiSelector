import { useState } from "react";

import Header from "./components/Header";
import Main from "./components/Main";
import ApiSelector from "./components/ApiSelector/ApiSelector";
import ApiTitle from "./components/ApiTitle/ApiTitle";

import UserList from "./components/UserList/UserList";
import "./App.css";

export type ApiProps = {
  isSelected: boolean;
  title: string;
  method: string;
  endpoint: string;
};

function App() {
  const [api, setApi] = useState<ApiProps>({
    isSelected: true,
    title: "Lista de Usuarios",
    method: "GET",
    endpoint: "jsonplaceholder.typicode.com/users",
  });

  function updateInfoApi(api: ApiProps) {
    const { isSelected, title, method, endpoint } = api;
    setApi((prev) => ({ ...prev, isSelected, title, method, endpoint }));
  }

  return (
    <section className="px-2">
      <Header />
      <Main />
      <ApiSelector setApi={(api) => updateInfoApi(api)} />
      <ApiTitle title={api.title} method={api.method} endpoint={api.endpoint} />
      <UserList />
    </section>
  );
}

export default App;
