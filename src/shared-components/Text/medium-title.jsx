export function MediumTitle({ size, color, data, weight }) {
  return (
    <h3 style={{ color: color, fontSize: size, fontWeight: weight }}>{data}</h3>
  );
}
