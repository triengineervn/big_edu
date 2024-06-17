import logos from "../../../assets/images/logos";
const LogoComponent = () => {
  return (
    <div>
      <div className="p-16 text-center text-xl text-gray-500 mobile:p-12 mobile:text-sm bg-gray-50 my-12">
        <h2>
          Trusted by over 15,000 companies and millions of learners around the
          world
        </h2>
        <div className=" justify-evenly p-6 grid gap-x-8 gap-y-4 grid-cols-4 desktop:flex">
          <img src={logos.volkswagen} />
          <img src={logos.samsung} />
          <img src={logos.cisco} />
          <img src={logos.att} />
          <img src={logos.proterGamble} />
          <img src={logos.hewlettPakkard} />
          <img src={logos.citi} />
          <img src={logos.ericsson} />
        </div>
      </div>
    </div>
  );
};

export default LogoComponent;
