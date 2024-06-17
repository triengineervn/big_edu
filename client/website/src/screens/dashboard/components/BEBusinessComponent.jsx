const BEBusinessComponent = () => {
  return (
    <div className="flex justify-center p-20">
      <div className="h-auto w-96 mr-24">
        <img
          src="../../../../public/logo/logo-be-business.svg"
          className="h-auto w-36"
        />
        <h1 className="font-bold text-3xl">
          Upskill your team with Big Education Business
        </h1>
        <ul className="list-disc list-outside pl-5 mt-4 text-xl space-y-4">
          <li>
            Unlimited access to 26,000+ top Big Education courses, anytime,
            anywhere
          </li>
          <li>International course collection in 14 languages</li>
          <li>Top certifications in tech and business</li>
        </ul>
        <div className="flex mt-4">
          <button className="bg-black rounded-none text-white font-bold mr-2">
            Get BE Business
          </button>
          <button className="rounded-none border-black bg-white hover:border-black font-bold">
            Learn more
          </button>
        </div>
      </div>
      <img
        src="https://s.udemycdn.com/home/non-student-cta/UB_Promo_800x800.jpg"
        className="h-auto w-96"
      />
    </div>
  );
};

export default BEBusinessComponent;
