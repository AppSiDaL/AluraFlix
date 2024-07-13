import VideoCard from "./VideoCard";

interface ContainerProps {
  videos: {
    id: number;
    title: string;
    description: string;
    url: string;
    category: string;
    img: string;
    bg?: string;
  }[];
  title?: string;
  color?: string;
}

export default function Container({ videos, title, color }: ContainerProps) {
  return (
    <div>
      <h2
        style={{
          width: "10%",
          textAlign: "center",
          borderRadius: "10px",
          backgroundColor: color,
        }}
      >
        {title}
      </h2>
      <div style={{ overflowX: "scroll", whiteSpace: "nowrap" }}>
        {videos.map((video, index) => (
          <VideoCard video={video} key={index} color={color} />
        ))}
      </div>
    </div>
  );
}
