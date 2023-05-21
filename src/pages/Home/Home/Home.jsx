import useSetTitle from "../../../hooks/useSetTitle";
import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import ContactUs from "../ContactUs/ContactUs";
import Gallery from "../Gallery/Gallery";
import ShopByCategory from "../ShopByCategory/ShopByCategory";

const Home = () => {
  useSetTitle("Home");
  return (
    <>
      <Banner></Banner>
      <Gallery></Gallery>
      <ShopByCategory></ShopByCategory>
      <AboutUs></AboutUs>
      <ContactUs></ContactUs>
    </>
  );
};

export default Home;
