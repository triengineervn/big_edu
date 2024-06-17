import PropTypes from "prop-types";
import Earth from "./earth";
import LeftArrow from "./left-arrow";
import RightArrow from "./right-arrow";
import Menu from "./menu";
import Search from "./search";
import ShoppingCart from "./shopping-cart";
import Quote from "./quote";
import Play from "./play";
const Icon = (props) => {
  switch (props.name) {
    case "earth":
      return <Earth {...props} />;
    case "left-arrow":
      return <LeftArrow {...props} />;
    case "right-arrow":
      return <RightArrow {...props} />;
    case "menu":
      return <Menu {...props} />;
    case "search":
      return <Search {...props} />;
    case "shopping-cart":
      return <ShoppingCart {...props} />;
    case "quote":
      return <Quote {...props} />;
    case "play":
      return <Play {...props} />;
    default:
      return;
  }
};

Icon.propTypes = {
  name: PropTypes.string,
};

export default Icon;
