import Slider from "react-slick";
import { NextArrow, PrevArrow } from "../../../components/buttons/CustomArows";
import ReviewItem from "../../../components/items/ReviewItem";
const DiscoveryComponent = () => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 3.2,
    slidesToScroll: 3,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  const reviews = [1, 2, 3, 5, 6, 7, 8, 9];
  return (
    <div className="px-20 py-12 bg-gray-50">
      <h1 className="mb-4 font-sans text-2xl font-bold leading-7">
        How learners like you are achieving their goals
      </h1>
      <div className="pt-4 relative -m-2">
        <Slider {...settings}>
          {reviews.map((review) => (
            <ReviewItem key={review.id} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default DiscoveryComponent;
