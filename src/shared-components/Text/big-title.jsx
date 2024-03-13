export function BigTitle({ size, color, data, weight }) {
  return (
    <h1 style={{ color: color, fontSize: size, fontWeight: weight }}>{data}</h1>
  );
}
