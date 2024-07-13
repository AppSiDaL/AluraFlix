interface ButtonProps {
  color?: string;
  title: string;
  onClick?: () => void;
}

export default function Button({ color, title, onClick }: ButtonProps) {
  return (
    <button
      style={{
        border: 1,
        borderColor: color,
        borderStyle: "solid",
        borderRadius: 5,
        color,
        padding: 10,
        margin: 5,
        cursor: "pointer",
        display: "block",
      }}
      onClick={onClick}
    >
      {title}
    </button>
  );
}
