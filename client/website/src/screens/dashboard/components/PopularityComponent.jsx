import useCourses from "../../../hooks/CourseHook";
import Slider from "react-slick";
import CourseContentItem from "../../../components/items/CourseContentItem";
import { NextArrow, PrevArrow } from "../../../components/buttons/CustomArows";
const PopularityComponent = () => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  const { courses, loading, error } = useCourses();
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <div className="px-20 py-12">
      <h1 className="mb-4 font-sans text-2xl font-bold leading-7">
        Learners are viewing
      </h1>
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
      <h1 className="mt-16 mb-6 font-sans text-2xl font-bold leading-7">
        Top categories
      </h1>
      <div className="grid grid-cols-4 gap-4">
        <div>
          <img src="https://s.udemycdn.com/home/top-categories/lohp-category-design-v2.jpg" />
          <h2 className="font-bold mt-2">Design</h2>
        </div>
        <div>
          <img src="https://s.udemycdn.com/home/top-categories/lohp-category-design-v2.jpg" />
          <h2 className="font-bold mt-2">Design</h2>
        </div>
        <div>
          <img src="https://s.udemycdn.com/home/top-categories/lohp-category-design-v2.jpg" />
          <h2 className="font-bold mt-2">Design</h2>
        </div>
        <div>
          <img src="https://s.udemycdn.com/home/top-categories/lohp-category-design-v2.jpg" />
          <h2 className="font-bold mt-2">Design</h2>
        </div>
        <div>
          <img src="https://s.udemycdn.com/home/top-categories/lohp-category-design-v2.jpg" />
          <h2 className="font-bold mt-2">Design</h2>
        </div>
        <div>
          <img src="https://s.udemycdn.com/home/top-categories/lohp-category-design-v2.jpg" />
          <h2 className="font-bold mt-2">Design</h2>
        </div>
        <div>
          <img src="https://s.udemycdn.com/home/top-categories/lohp-category-design-v2.jpg" />
          <h2 className="font-bold mt-2">Design</h2>
        </div>
        <div>
          <img src="https://s.udemycdn.com/home/top-categories/lohp-category-design-v2.jpg" />
          <h2 className="font-bold mt-2">Design</h2>
        </div>
      </div>
    </div>
  );
};

export default PopularityComponent;
