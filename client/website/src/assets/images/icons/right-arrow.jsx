const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1.5rem"
    height="1.5rem"
    fill="none"
    viewBox="0 0 24 24"
    stroke="#fff"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m10 7 5 5-5 5"
    />
  </svg>
);
export default SvgComponent;
