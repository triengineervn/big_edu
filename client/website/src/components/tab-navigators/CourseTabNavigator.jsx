import { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CourseTabContent from "./CourseTabContent";
import useCourses from "../../hooks/CourseHook";
const CourseTabNavigator = () => {
  const [activeTab, setActiveTab] = useState(0);
  const { courses, loading, error } = useCourses();
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  const tabs = [
    "Python",
    "Excel",
    "Web Development",
    "JavaScript",
    "Data Science",
    "Amazon AWS",
    "Drawing",
  ];

  const tabContent = [
    "Expand your career opportunities with Python",
    "Analyze and visualize data with Excel",
    "Build websites and applications with Web Development",
    "Learn JavaScript, the language of the web",
    "Explore data analysis and machine learning with Data Science",
    "Get skilled with Amazon AWS cloud services",
    "Develop your artistic skills with Drawing",
  ];

  const tabDescription = [
    "Take one of Udemy’s range of Python courses and learn how to code using this incredibly useful language. Its simple syntax and readability makes Python perfect for Flask, Django, data science, and machine learning. You’ll learn how to build everything from games to sites to apps. Choose from a range of courses that will appeal to both beginners and advanced developers alike.",
    "Take a Microsoft Excel course from Udemy, and learn how to use this industry-standard software. Real-world experts will show you the basics like how to organize data into sheets, rows and columns, and advanced techniques like creating complex dynamic formulas. Both small businesses and large companies use Excel to turn their raw data into actionable insights.",
  ];

  return (
    <div className="w-full mt-4">
      <div className="flex space-x-8">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`py-4 cursor-pointer ${
              activeTab === index ? "" : "text-gray-400"
            }`}
            onClick={() => setActiveTab(index)}
          >
            <h2 className="font-bold">{tab}</h2>
          </div>
        ))}
      </div>

      <CourseTabContent
        activeTab={activeTab}
        courses={courses}
        tabs={tabs}
        tabContent={tabContent}
        tabDescription={tabDescription}
      />
    </div>
  );
};

export default CourseTabNavigator;
