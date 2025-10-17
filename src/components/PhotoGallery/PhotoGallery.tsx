import useFetch from "../../hooks/useFetch";
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
  const {
    data: photos,
    loading,
    error,
  } = useFetch<PhotoGalleyApiProps[]>(
    "https://picsum.photos/v2/list?page=1&limit=12",
    isSelected
  );

  return loading ? (
    <p>Cargando Imagenes</p>
  ) : error ? (
    <p>Error: {error}</p>
  ) : (
    <section
      className={`my-5 grid grid-cols-1 grid-rows-2 gap-3 overflow-hidden transition-all duration-550 z-[-2] lg:grid-cols-4 ${className}`}
    >
      {photos?.map((photo) => (
        <PhotoGalleryCard
          key={photo.id}
          author={photo.author}
          url={photo.download_url}
        />
      ))}
    </section>
  );
}
