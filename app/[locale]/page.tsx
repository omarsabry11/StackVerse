
import Contact from "./Sections/Contact";
import Courses from "./Sections/Courses";
import HeroSection from "./Sections/HeroSection";
import WhoUs from "./Sections/About";
import WhyUs from "./Sections/WhyUs";


export default function Home() {
  return (
    <>
      <HeroSection></HeroSection>
      <WhoUs></WhoUs>
      <Courses></Courses>
      <WhyUs></WhyUs>
      <Contact></Contact>
    </>

  );
}
