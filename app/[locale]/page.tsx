"use client"
import Contact from "./Sections/Contact";
import Courses from "./Sections/Courses";
import HeroSection from "./Sections/HeroSection";
import WhoUs from "./Sections/About";
import WhyUs from "./Sections/WhyUs";
import { ToastContainer } from "react-toastify";

export default function Home() {
  return (
    <>
      <HeroSection></HeroSection>
      <WhoUs></WhoUs>
      <Courses></Courses>
      <WhyUs></WhyUs>
      <Contact></Contact>
      <ToastContainer
        autoClose={2500}
      ></ToastContainer>
    </>

  );
}
