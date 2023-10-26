import AboutUs from "../Components/AboutUs";
import Services from "../Services/Services";
import Slider from "../Header/Sider";
import Info from "../Components/Info";
import TeamSlider from "../Team/TeamSlider";
import WhyChoos from "../Components/WhyChoos";
import Testimonial from "../Testimonial/Testimonial";


const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <AboutUs></AboutUs>
      <Services></Services>
      <TeamSlider></TeamSlider>
      <Testimonial></Testimonial>
      <WhyChoos></WhyChoos>
      <Info></Info>

    </div>
  );
};

export default Home;
