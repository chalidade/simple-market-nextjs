export default function text({
  size,
  color,
  value,
  margin,
  padding,
  weight,
  lineHeight,
  customClass,
}) {
  return (
    <>
      <p
        className={customClass}
        style={{
          fontWeight: weight,
          color: color,
          fontSize: size,
          margin: margin,
          padding: padding,
          lineHeight: lineHeight,
        }}
      >
        {value}
      </p>
    </>
  );
}
