import { useNavigate } from "react-router-dom";
export default function Header() {
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid #1E64BB",
      }}
    >
      <h1>AluraFlix</h1>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <a
          onClick={() => navigate("/newVideo")}
          style={{
            border: 1,
            borderColor: "#1E64BB",
            borderStyle: "solid",
            borderRadius: 5,
            color: "blue",
            padding: 10,
            margin: 5,
            cursor: "pointer",
          }}
        >
          Nuevo vídeo
        </a>
        <a
          onClick={() => navigate("/")}
          style={{
            border: 1,
            borderColor: "white",
            borderStyle: "solid",
            borderRadius: 5,
            color: "white",
            padding: 10,
            margin: 5,
            cursor: "pointer",
          }}
        >
          Home
        </a>
      </div>
    </div>
  );
}
