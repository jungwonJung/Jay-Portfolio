import React from "react";
import Banner from "../components/Banner";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import ProjectList from "../components/ProjectList";
import Career from "../components/Career";
import SectionNav from "../components/SectionNav";

const Home: React.FC = () => {
  return (
    <>
      <Banner />
      <AboutMe />
      <Skills />
      <Contact />
      <ProjectList />
      <Career />
      <SectionNav />
    </>
  );
};

export default Home;

