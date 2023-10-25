import AboutMe from "../AboutMe";
import ContactMe from "../ContactMe";
import Footer from "../Footer";
import MyPortfolio from "../MyPortfolio";
import Testimonial from "../Testimonials";
import AboutMe2 from "../AboutMe2";
import AboutMe3 from "../AboutMe3";
import Publish from "../Publish";

export default function Home() {
  return (
    <>
      <AboutMe />
      <AboutMe2></AboutMe2>
      <MyPortfolio />
      <AboutMe3/>
      <Testimonial />
      <Publish/>
      <ContactMe />
      <Footer />
    </>
  );
}
