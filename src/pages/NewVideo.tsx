import { useState } from "react";
import { createVideo } from "../services/videosService";

export default function NewVideo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [category, setCategory] = useState("");
  const [img, setImg] = useState("");
  const [bg, setBg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const videoData = { title, description, url, category, img, bg };
    await createVideo(videoData);
  };

  const handleReset = () => {
    setTitle("");
    setDescription("");
    setUrl("");
    setCategory("");
    setImg("");
    setBg("");
  };

  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center" }}>Nuevo Vídeo</h1>
      <form style={{ display: "flex", flexDirection: "column", gap: "10px" }} onSubmit={handleSubmit}>
        <label style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          Título
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            style={{
              padding: "8px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
        </label>
        <label style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          Descripción
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            style={{
              padding: "8px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
        </label>
        <label style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          URL
          <input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required
            style={{
              padding: "8px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
        </label>
        <label style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          Categoría
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
            style={{
              padding: "8px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
        </label>
        <label style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          Imagen (URL)
          <input
            type="url"
            value={img}
            onChange={(e) => setImg(e.target.value)}
            required
            style={{
              padding: "8px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
        </label>
        <label style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          Fondo (URL)
          <input
            type="url"
            value={bg}
            onChange={(e) => setBg(e.target.value)}
            required
            style={{
              padding: "8px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
        </label>
        <button
          type="submit"
          style={{
            padding: "10px",
            borderRadius: "4px",
            border: "none",
            backgroundColor: "#007bff",
            color: "white",
            cursor: "pointer",
          }}
        >
          Enviar
        </button>
      </form>
      <button
        onClick={handleReset}
        style={{
          padding: "10px",
          borderRadius: "4px",
          border: "none",
          width: "100%",
          backgroundColor: "red",
          color: "white",
          cursor: "pointer",
        }}
      >
        Limpiar
      </button>
    </div>
  );
}