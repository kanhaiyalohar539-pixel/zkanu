export default function Header({ title }) {
  return (
    <div style={{
      background: "black",
      color: "gold",
      padding: "20px",
      fontSize: "28px",
      textAlign: "center",
      borderBottom: "2px solid gold"
    }}>
      {title}
    </div>
  );
}