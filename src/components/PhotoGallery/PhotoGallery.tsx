import { useState, useEffect } from "react";

import PhotoGalleryCard from "./PhotoGalleryCard";

type PhotoGalleryProps = {
  className?: string;
  isSelected: boolean;
};

type PhotoGalleyApiProps = {
  id: number;
  author: string;
  download_url: string;
};

export default function PhotoGallery({
  className,
  isSelected,
}: PhotoGalleryProps) {
  const [photos, setPhotos] = useState<PhotoGalleyApiProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    if (!isSelected) return;

    async function fetchPhotos() {
      try {
        const res = await fetch(
          "https://picsum.photos/v2/list?page=1&limit=12"
        );
        if (!res.ok) throw new Error("Error al buscar las imagenes :(");
        const data = await res.json();
        setPhotos(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    }
    fetchPhotos();
  }, [isSelected]);

  return loading ? (
    <p>Cargando Imagenes</p>
  ) : error ? (
    <p>Error: {error}</p>
  ) : (
    <section
      className={`border-2 border-red-500 my-5 grid grid-cols-1 grid-rows-2 gap-3 overflow-hidden transition-all duration-550 z-[-2] ${className}`}
    >
      {photos.map((photo) => (
        <PhotoGalleryCard
          key={photo.id}
          author={photo.author}
          url={photo.download_url}
        />
      ))}
    </section>
  );
}
