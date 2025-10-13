import { useState } from "react";

import Header from "./components/Header";
import Main from "./components/Main";
import ApiSelector from "./components/ApiSelector/ApiSelector";
import ApiTitle from "./components/ApiTitle/ApiTitle";
import "./App.css";

export type ApiProps = {
  title: string;
  method: string;
  endpoint: string;
};

function App() {
  const [api, setApi] = useState<ApiProps>({
    title: "Lista de Usuarios",
    method: "GET",
    endpoint: "jsonplaceholder.typicode.com/users",
  });

  function updateInfoApi(api: ApiProps) {
    const { title, method, endpoint } = api;
    setApi((prev) => ({ ...prev, title, method, endpoint }));
  }

  return (
    <section className="px-2">
      <Header />
      <Main />
      <ApiSelector setApiTitle={(api) => updateInfoApi(api)} />
      <ApiTitle title={api.title} method={api.method} endpoint={api.endpoint} />
    </section>
  );
}

export default App;
