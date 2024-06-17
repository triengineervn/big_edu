const TeachingComponent = () => {
  return (
    <div className="px-80 py-24 flex">
      <img
        src="https://s.udemycdn.com/home/non-student-cta/instructor-1x-v3.jpg"
        className="h-auto w-96 mr-24"
      />
      <div className="content-center">
        <h1 className="font-bold text-3xl mb-2">Become an instructor</h1>
        <p className="mb-4">
          Instructors from around the world teach millions of learners on Udemy.
          We provide the tools and skills to teach what you love.
        </p>
        <button className="bg-black rounded-none text-white font-bold mr-2">
          Start teaching today
        </button>
      </div>
    </div>
  );
};

export default TeachingComponent;
