interface MainCardProps {
  video: {
    id: number;
    title: string;
    description: string;
    url: string;
    category: string;
    img: string;
    bg?: string;
  };
}

export default function MainCard({ video }: MainCardProps) {
  if (!video)
    return (
      <div style={{ padding: 20 }}>
        <h2>Cargando...</h2>
      </div>
    );

  return (
    <div
      style={{
        backgroundImage: video.bg ? `url(${video.bg})` : undefined,
        backgroundColor: video.bg ? undefined : "#f0f0f0",
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: 10,
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.2s",
        margin: "10px 0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h2 style={{ fontSize: "1.2rem" }}>{video.title}</h2>
      <p style={{ fontSize: "0.9rem" }}>{video.description}</p>
      <img
        src={video.img}
        alt={video.title}
        style={{
          maxWidth: "80%",
          border: "1px solid #f0f0f0",
          maxHeight: "200px",
          borderRadius: 5,
          marginTop: 10,
        }}
      />
    </div>
  );
}
