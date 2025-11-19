import React from "react";
import Banner from "../components/Banner";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import ProjectList from "../components/ProjectList";
import Career from "../components/Career";

const Home: React.FC = () => {
  return (
    <>
      <Banner />
      <AboutMe />
      <Skills />
      <Contact />
      <ProjectList />
      <Career />
    </>
  );
};

export default Home;
