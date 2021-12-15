export function Arrow(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="12"
      viewBox="0 0 16 12"
      className={"transition " + (props.rotate ? "rotate-180" : "")}
    >
      <path
        id="Polygon_13"
        data-name="Polygon 13"
        d="M8,0l8,12H0Z"
        transform="translate(16 12) rotate(180)"
        fill="#2e2d2d"
      />
    </svg>
  );
}
