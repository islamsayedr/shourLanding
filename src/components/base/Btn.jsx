export default function Btn({ text, icon, link, type, size }) {
  return (
    <a href={link} className={`btn ${type}`} style={size==="m" ? {padding: "12px 24px", height: "48px"} : {}}>
      {text} <img src={icon} />
    </a>
  );
}

