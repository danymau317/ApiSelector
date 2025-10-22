import { useState } from "react";
import CustomApiSelector from "./CustomApiSelector";
import CustomApiTitle from "./CustomApiTitle";
import CustomApiGet from "./CustomApiGet";

type CustomApiProps = {
  className?: string;
};

export default function CustomApi({ className }: CustomApiProps) {
  const [isSelectedItems, setIsSelectedItems] = useState<boolean[]>([
    true,
    false,
    false,
    false,
  ]);

  return (
    <section
      className={`border-2 border-purple-500 transition-all duration-500 ${className}`}
    >
      <CustomApiTitle
        nameIcon="code"
        customApiName="API Personalizada - CRUD Completo"
        descriptionApi="Esta API fue construida en Nest.js"
        urlApi="https://myApi.com"
        commentsApi="Por defecto usa JSONPlaceholder para pruebas. Cambia a tu API cuando esté lista."
      />
      <CustomApiSelector
        className="my-5"
        isSelectedItems={isSelectedItems}
        setIsSelectedItems={setIsSelectedItems}
      />
      <CustomApiGet
        title="Obtener Datos"
        description="Obtiene recursos del servidor. No Modifica Datos"
        value=""
        placeholder="Deja Vacío para obtener todos"
        endpoint="https://myendpoint.com"
      />
    </section>
  );
}
