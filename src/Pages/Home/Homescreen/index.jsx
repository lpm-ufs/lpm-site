import AboutMe from "../AboutMe";
import ContactMe from "../ContactMe";
import Footer from "../Footer";
import MyPortfolio from "../MyPortfolio";
import Testimonial from "../Testimonials";
import AboutMe2 from "../AboutMe2";

export default function Home() {
  return (
    <>
      <AboutMe />
      <AboutMe2></AboutMe2>
      <MyPortfolio />
      <Testimonial />
      <ContactMe />
      <Footer />
    </>
  );
}
