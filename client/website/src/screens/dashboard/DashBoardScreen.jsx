import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import BannerComponent from "./components/BannerComponent";
import CoursesComponent from "./components/CoursesComponent";
import DiscoveryComponent from "./components/DiscoveryComponent";
import LogoComponent from "./components/LogoComponent";
import PopularityComponent from "./components/PopularityComponent";
import TopicComponent from "./components/TopicComponent";
import BEBusinessComponent from "./components/BEBusinessComponent";
import StoriesComponent from "./components/StoriesComponent";
import TeachingComponent from "./components/TeachingComponent";

function DashBoardScreen() {
  return (
    <div>
      <Header></Header>
      <div>
        <BannerComponent />
        <LogoComponent />
        <CoursesComponent />
        <DiscoveryComponent />
        <PopularityComponent />
        <TopicComponent />
        <BEBusinessComponent />
        <StoriesComponent />
        <TeachingComponent />
      </div>
      <Footer></Footer>
    </div>
  );
}

export default DashBoardScreen;
