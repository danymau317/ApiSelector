import { useState, useEffect } from "react";
export default function useFetch<T>(url: string, isSelected: boolean) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    if (!isSelected) {
      setLoading(false);
      return;
    }

    async function fetchData() {
      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error("Error al obtener los datos");
        const data = await res.json();
        setData(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [url, isSelected]);

  return { data, loading, error };
}
