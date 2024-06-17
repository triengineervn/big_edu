import axios from "axios";
import Course from "../entities/Course";
import CourseRepositoryImpl from "../adapters/api/CourseRepositoryImpl";

class CourseUseCase {
  constructor() {
    this.repository = new CourseRepositoryImpl();
  }

  async getAllCourses() {
    const response = await axios.get("http://localhost:5000/api");
    const courses = response.data.map((data) => new Course(data));
    console.log(courses);
    return courses;
  }
}

export default CourseUseCase;
