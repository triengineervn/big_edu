import Slider from "react-slick";
import { NextArrow, PrevArrow } from "../buttons/CustomArows";
import PropTypes from "prop-types";
import CourseContentItem from "../items/CourseContentItem";

const CourseTabContent = ({
  activeTab,
  courses,
  tabs,
  tabContent,
  tabDescription,
}) => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="border p-8 w-full">
      <h1 className="mb-4 font-sans text-2xl font-bold leading-7">
        {tabContent[activeTab]}
      </h1>
      <h2 className="max-w-3xl line-clamp-3 mb-4">
        {tabDescription[activeTab]}
      </h2>
      <button className="border-black rounded-none font-bold mb-4">
        Explore {tabs[activeTab]}
      </button>
      <div className="pt-4 relative -m-2">
        <Slider {...settings}>
          {courses.map((course) => (
            <CourseContentItem
              course={course}
              key={course._id}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

CourseTabContent.propTypes = {
  activeTab: PropTypes.number.isRequired,
  courses: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  tabs: PropTypes.arrayOf(PropTypes.string).isRequired,
  tabContent: PropTypes.arrayOf(PropTypes.string).isRequired,
  tabDescription: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default CourseTabContent;
