import { useState } from "react";
import { modifyVideo } from "../services/videosService";

interface Video {
  id: number;
  title: string;
  description: string;
  url: string;
  category: string;
  img: string;
  bg?: string;
}

interface ModalProps {
  isOpen: boolean;
  toggleModal: () => void;
  video: Video;
}

export default function EditVideoModal({
  isOpen,
  toggleModal,
  video,
}: ModalProps) {
  const [title, setTitle] = useState(video.title);
  const [description, setDescription] = useState(video.description);
  const [url, setUrl] = useState(video.url);
  const [category, setCategory] = useState(video.category);
  const [img, setImg] = useState(video.img);
  const [bg, setBg] = useState(video.bg || "");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const updatedVideo = {
      ...video,
      title,
      description,
      url,
      category,
      img,
      bg,
    };
    await modifyVideo(updatedVideo, String(video.id));
    toggleModal();
  };

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "#f8f9fa",
        color: "#212529",
        padding: "40px",
        borderRadius: "8px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        width: "500px",
        zIndex: 1000,
      }}
    >
      <h2>Editar Vídeo</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Título:
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ced4da",
              }}
            />
          </label>
        </div>
        <div>
          <label>
            Descripción:
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ced4da",
              }}
            />
          </label>
        </div>
        <div>
          <label>
            URL:
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ced4da",
              }}
            />
          </label>
        </div>
        <div>
          <label>
            Categoría:
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ced4da",
              }}
            />
          </label>
        </div>
        <div>
          <label>
            Imagen (URL):
            <input
              type="text"
              value={img}
              onChange={(e) => setImg(e.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ced4da",
              }}
            />
          </label>
        </div>
        <div>
          <label>
            Fondo (URL):
            <input
              type="text"
              value={bg}
              onChange={(e) => setBg(e.target.value)}
            />
          </label>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "20px",
          }}
        >
          <button
            type="submit"
            style={{
              padding: "10px 20px",
              borderRadius: "5px",
              border: "none",
              backgroundColor: "#007bff",
              color: "white",
              cursor: "pointer",
            }}
          >
            Actualizar
          </button>
          <button
            onClick={toggleModal}
            style={{
              padding: "10px 20px",
              borderRadius: "5px",
              border: "none",
              backgroundColor: "#dc3545",
              color: "white",
              cursor: "pointer",
            }}
          >
            Cerrar
          </button>
        </div>
      </form>
    </div>
  );
}
