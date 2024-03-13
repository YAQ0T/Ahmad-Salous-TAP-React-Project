export function Paragraph({ size, color, data, weight }) {
  return (
    <p style={{ color: color, fontSize: size, fontWeight: weight }}>{data}</p>
  );
}
