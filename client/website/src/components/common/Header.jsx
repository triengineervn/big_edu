import Icon from "../../assets/images/icons";
import icons from "../../assets/images/icons";

const Header = () => {
  const styles = {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    fontFamily: "sans-serif",
    justifyContent: "space-between",
  };
  return (
    <header className="bg-white shadow-md relative">
      <div className=" mx-8 px-4 py-2 flex justify-between items-center mobile:mx-0">
        <div className="mr-24 tablet:hidden desktop:hidden">
          <Icon name="menu" />
        </div>
        <div className="flex items-center">
          <img
            src="../../../public/logo/logo-be.svg"
            className="h-8 w-auto mobile:h-6"
          />
        </div>

        <nav className="items-center space-x-4">
          <a
            href="#"
            className="text-gray-700 hover:text-gray-900 text-xs mx-6 mobile:hidden"
          >
            Categories
          </a>
        </nav>

        <div className="flex-1 relative mobile:hidden">
          <Icon
            name="search"
            className="absolute opacity-30 left-3 top-1/2 -translate-y-1/2 h-6 w-auto"
          />
          <input
            type="text"
            placeholder="Search for anything"
            className="w-full px-12 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 pl-12"
          />
        </div>

        <nav className="flex items-center space-x-4 mx-6 mobile:mx-0">
          <a
            href="#"
            className="text-gray-700 hover:text-gray-900 text-xs tablet:hidden mobile:hidden"
          >
            BE Business
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-gray-900 text-xs tablet:hidden mobile:hidden"
          >
            Teach on BE
          </a>
          <a href="#">
            <img
              src={icons.search}
              className="h-4 w-auto tablet:hidden desktop:hidden"
            />
          </a>
          <a href="#">
            <Icon
              name="shopping-cart"
              className="h-8 w-auto mobile:h-4"
            />
          </a>
        </nav>

        <div className="flex items-center space-x-4 mobile:hidden">
          <button className=" text-gray-700 hover:text-gray-900 px-4 py-2 outline outline-1 rounded-none font-bold tablet:text-xs">
            Log in
          </button>
          <button className="bg-gray-800 text-white px-4 py-2 rounded-none font-bold tablet:text-xs">
            Sign up
          </button>
          <button className="outline outline-1 rounded-none p-2 tablet:hidden">
            <div style={styles}>
              <Icon
                name="earth"
                width={24}
              />
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
