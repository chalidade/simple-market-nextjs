export default function div({
  customClass,
  border,
  width,
  height,
  bg,
  image,
  value,
  radius,
  bgRepeat,
  bgSize,
  bgPosition
}) {
  return (
    <>
      <div
        className={customClass}
        style={{
          border: border,
          borderRadius: radius,
          width: width,
          height: height,
          background: image ? `url(${image})` : bg,
          backgroundRepeat:bgRepeat,
          backgroundSize:bgSize,
          backgroundPosition:bgPosition
        }}
      >
        {value}
      </div>
    </>
  );
}
