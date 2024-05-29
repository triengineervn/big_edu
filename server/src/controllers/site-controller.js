import CourseModel from "../models/course-model.js";

class SiteController {
  async home(req, res) {
    try {
      const courses = await CourseModel.find();
      res.json(courses);
    } catch (error) {
      res
        .status(500)
        .json({ error: "An error occurred while fetching courses" });
    }
  }
}

export default new SiteController();
