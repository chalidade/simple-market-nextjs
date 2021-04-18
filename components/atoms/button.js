export default function button({
  width,
  height,
  radius,
  bg,
  color,
  value,
  margin,
  padding,
  customClass,
  border
}) {
  return (
    <button
      class={customClass}
      style={{
        border:border ? border : "none",
        margin: margin,
        padding: padding,
        width: width,
        height: height,
        borderRadius: radius,
        background: bg,
        color: color,
      }}
    >
      {value}
    </button>
  );
}
