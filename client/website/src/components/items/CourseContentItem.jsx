import PropTypes from "prop-types";

const CourseContentItem = ({ course }) => {
  return (
    <div
      key={course._id}
      className="bg-white overflow-hidden m-2"
    >
      <img
        className="w-full h-48 object-cover border"
        src={course.image}
        alt={course.title}
      />
      <div className="py-4">
        <h2 className="text-xl font-bold text-gray-800 leading-6">
          {course.title}
        </h2>
        <p className="mt-2 text-gray-600 line-clamp-2">{course.description}</p>
        <p>rating</p>
        <p>money</p>
      </div>
    </div>
  );
};

CourseContentItem.propTypes = {
  course: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default CourseContentItem;
