export function Paragraph({ size, color, data }) {
  return <p style={{ color: color, fontSize: size }}>{data}</p>;
}
