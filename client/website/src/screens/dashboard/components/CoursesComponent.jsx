import CourseTabNavigator from "../../../components/tab-navigators/CourseTabNavigator";

const CoursesComponent = () => {
  return (
    <div>
      <div className="px-20 py-6">
        <h1 className="font-bold">A broad selection of courses</h1>
        <h2 className="text-xl pt-8">
          Choose from over 210,000 online video courses with new additions
          published every month
        </h2>
        <CourseTabNavigator />
      </div>
    </div>
  );
};

export default CoursesComponent;
