import AboutMe from "../AboutMe";
import ContactMe from "../ContactMe";
import Footer from "../Footer";
import MyPortfolio from "../MyPortfolio";
import Testimonial from "../Testimonials";

export default function Home() {
  return (
    <>
      <AboutMe />
      <MyPortfolio />
      <Testimonial />
      <ContactMe />
      <Footer />
    </>
  );
}
