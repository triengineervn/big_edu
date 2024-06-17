import PropTypes from "prop-types";
import Icon from "../../assets/images/icons";
export const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="flex  bg-gray-700 w-12 h-12 rounded-full justify-center items-center border absolute
     -right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
    >
      <Icon
        name="right-arrow"
        onClick={onClick}
      />
    </div>
  );
};

NextArrow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
};

export const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="flex bg-gray-700 w-12 h-12 rounded-full justify-center items-center border absolute
     -left-4 top-1/2 transform -translate-y-1/2 cursor-pointer z-10"
    >
      <Icon
        name="left-arrow"
        onClick={onClick}
      />
    </div>
  );
};

PrevArrow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
};
