type PhotoGalleryCardProps = {
  url: string;
  author: string;
};

export default function PhotoGalleryCard({
  url,
  author,
}: PhotoGalleryCardProps) {
  return (
    <article className="border-2 border-gray-300 rounded-lg pb-5 flex flex-col justify-evenly gap-5">
      <img src={url} alt={author} />
      <p className="text-center text-gray-700">
        Hecho por: <span className="text-black font-semibold">{author}</span>
      </p>
    </article>
  );
}
