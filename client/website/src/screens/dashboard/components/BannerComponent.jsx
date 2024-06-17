import banners from "../../../assets/images/banners";
import icons from "../../../assets/images/icons";

const BannerComponent = () => {
  return (
    <div>
      <div>
        <div className="absolute left-40 top-52 -translate-y-1/2 h-40 w-96 bg-white p-6 mobile:hidden shadow-xl">
          <h1 className="font-bold text-center text-4xl">24-Hour Flash Sale</h1>
          <h2 className="p-3">
            Learn valuable, practical skills for as low as ₫299,000. Sale ends
            tonight!
          </h2>
        </div>
        <img
          src={banners.dashboard}
          className="px-16 justify-center mobile:hidden"
        />
        <img
          src={banners.dashboardMobilw}
          className="h-60 w-full tablet:hidden desktop:hidden"
        />
      </div>
      <div className="bg-white p-6 tablet:hidden desktop:hidden">
        <h1 className="font-bold text-center text-3xl">24-Hour Flash Sale</h1>
        <h2 className="p-2">
          Learn valuable, practical skills for as low as ₫299,000. Sale ends
          tonight!
        </h2>
      </div>
      <div className="mx-6 relative desktop:hidden">
        <img
          src={icons.search}
          className="absolute right-3 top-1/2 -translate-y-1/2 h-6 w-auto"
        />
        <input
          type="text"
          placeholder="What do you want to learn?"
          className="w-full px-4 py-2 border border-black rounded-none focus:outline-none focus:ring-2 focus:ring-purple-500 pr-12"
        />
      </div>
    </div>
  );
};
export default BannerComponent;
