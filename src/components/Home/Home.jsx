import HeroSlider from "../Pages/HomePage/HeroSlider/HeroSlider";
import HomeIntro from "../Pages/HomePage/HomeIntro/HomeIntro";
import NumbersSection from "../../components/shared/MHCEG-Numbers/MHCEG-Numbers";
import {MHCEGNumbers} from '../../data/mhcegNambers.js';
import "./Home.css";
import WhyMHCEG from "../Pages/HomePage/WhyMHCEG/WhyMHCEG.jsx";
// import News from "../Pages/HomePage/News/News.jsx";

function Home() {
  return (
    <>
      <HeroSlider />
       <HomeIntro />
      <NumbersSection
        title="MHCEG in Numbers"
        items={MHCEGNumbers}
        columns="sm:grid-cols-4"
      /> 
      {/* <News/> */}
      <WhyMHCEG />
    </>
  );
}

export default Home;
