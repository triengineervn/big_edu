import { useState, useEffect } from "react";
import CourseUseCase from "../usecases/CourseUseCases";

const useCourses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const courseUseCase = new CourseUseCase();
        const data = await courseUseCase.getAllCourses();
        setCourses(data);
      } catch (error) {
        setError("Error fetching data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { courses, loading, error };
};

export default useCourses;
