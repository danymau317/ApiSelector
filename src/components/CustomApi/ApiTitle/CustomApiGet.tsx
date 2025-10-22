type CustomApiGetProps = {
  title: string;
  description: string;
  value: string;
  placeholder?: string;
  endpoint: string;
};

export default function CustomApiGet({
  title,
  description,
  value,
  placeholder,
  endpoint,
}: CustomApiGetProps) {
  return (
    <section>
      <header>
        <h2>GET- {title}</h2>
        <p>{description}</p>
      </header>
      <h2>ID del recurso (Opcional)</h2>
      <input type="text" value={value} placeholder={placeholder} />
      <div>
        <h2>Endpoint: </h2>
        <p>{endpoint}</p>
      </div>
    </section>
  );
}
