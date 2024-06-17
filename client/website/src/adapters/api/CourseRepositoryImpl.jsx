import axios from "axios";
import CourseRepository from "../../interfaces/CourseRepository";

class CourseRepositoryImpl extends CourseRepository {
  async getAllCourses() {
    const response = await axios.get("http://localhost:5000/api");
    return response.data;
  }
}

export default CourseRepositoryImpl;
