const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1.5rem"
    height="1.5rem"
    fill="none"
    stroke="#121923"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      strokeWidth={1.2}
      d="M5.5 16.5h14m-14-8h14m-15 4h16m-8 8s-4.5-2-4.5-8 4.5-8 4.5-8m0 0s4.5 2 4.5 8-4.5 8-4.5 8m0-16v16m8-8a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"
    />
  </svg>
);
export default SvgComponent;
