export default function Btn({ text, icon, link, type, size }) {
  return (
    <a
      href={link}
      className={`btn ${type}`}
      style={
        size === "m"
          ? { padding: "12px 24px", height: "48px" }
          : { padding: "20px 40px", height: "64px" }
      }
    >
      <img src={icon} />
      {text}
    </a>
  );
}
