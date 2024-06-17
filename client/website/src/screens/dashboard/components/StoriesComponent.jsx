import StoryItem from "../../../components/items/StoryItem";
import Slider from "react-slick";
import { NextArrow, PrevArrow } from "../../../components/buttons/CustomArows";
const StoriesComponent = () => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  const reviews = [1, 2, 3, 4];
  return (
    <div className="px-80 py-12 bg-gray-50">
      <div className="pt-4 relative -m-2">
        <Slider {...settings}>
          {reviews.map((review) => (
            <StoryItem key={review.id} />
          ))}
        </Slider>
      </div>
      <div className="mt-12 text-center">
        <a
          href=""
          className="font-bold text-violet-700"
        >
          View more customer stories
        </a>
      </div>
    </div>
  );
};

export default StoriesComponent;
