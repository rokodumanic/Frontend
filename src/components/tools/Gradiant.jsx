function Gradient({ color, height, direction="to top", zIndex="0"}) {
  return (
    <div
      className={`absolute bottom-0 left-0 w-full ${height} pointer-events-none `}
      style={{
        background: `linear-gradient(${direction}, ${color}, transparent)`,
        zIndex: `${zIndex}`
      }}
    />
  );
}

export default Gradient;
