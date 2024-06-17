import Icon from "../../assets/images/icons";
const StoryItem = () => {
  return (
    <div className="p-8 border bg-white mx-2 flex">
      <div className="relative basis-1/2">
        <Icon name="quote" />
        <p>
          Thanks to Udemy Business, Booz Allen has armed our workforce,
          specifically its data scientists, with highly relevant and in-demand
          tech skills that are enabling consultants to stay ahead of big data
          trends and raise the bar on proficiency, skills, and competencies to
          meet client demand.
        </p>
        <a
          href=""
          className="absolute underline font-bold text-violet-700 bottom-0"
        >
          Read full story
        </a>
      </div>
      <div className="basis-1/2 text-center">
        <img
          src="https://s.udemycdn.com/home/non-student-cta/UB_Promo_800x800.jpg"
          className="h-40 w-40 rounded-full mx-auto"
        ></img>
        <p className="font-bold mt-4">Jim Hemgen</p>
        <p className="mb-4">Principal</p>
        <p>Booz Allen Hamilton</p>
      </div>
    </div>
  );
};

export default StoryItem;
