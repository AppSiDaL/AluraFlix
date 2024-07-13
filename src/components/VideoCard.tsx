import { deteleVideo } from "../services/videosService";
import Button from "./Button";
import EditVideoModal from "./EditVideoModal";
import { useState } from "react";
interface VideoProps {
  video: {
    id: number;
    title: string;
    description: string;
    url: string;
    category: string;
    img: string;
    bg?: string;
  };
  color?: string;
}

export default function VideoCard({ video, color }: VideoProps) {
  const [isOpen, setIsOpen] = useState(false);
  const handleDeleteVideo = async () => {
    await deteleVideo(String(video.id));
  };
  return (
    <div
      style={{
        display: "inline-block",
        marginRight: "10px",
        border: `1px solid ${color}`,
      }}
    >
      <div>
        <img width={450} height={200} src={video.img} alt={video.title} />
      </div>
      <div
        style={{
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Button onClick={handleDeleteVideo} color={color} title="🗑️ Remover" />
        <Button
          onClick={() => setIsOpen(!isOpen)}
          color={color}
          title="✏️ Editar"
        />
      </div>
      <EditVideoModal
        isOpen={isOpen}
        toggleModal={() => setIsOpen(!isOpen)}
        video={video}
      />
    </div>
  );
}
