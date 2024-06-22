import Aboutus from "./Aboutus";
import AllCarsBudget from "./AllCarsBudget";
import Blogs from "./Blogs";
import BookTaxi from "./BookTaxi";
import CtaOne from "./CtaOne";
import Faq from "./Faq";
import HeroSection from "./HeroSection";
import Review from "./Review";
import Services from "./Services";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Aboutus />
      <section id="services"><BookTaxi /></section>
      <section id="pricing"><AllCarsBudget /></section>
      <CtaOne />
      <Services />
      <Review />
      <Faq />
      <Blogs />
    </>
  );
};

export default HomePage;
