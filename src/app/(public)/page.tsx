import AboutMe from "@/components/shared/AboutMe";
import Banner from "@/components/shared/Banner";
import Projects from "@/components/shared/Projects";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <Banner />

      <AboutMe></AboutMe>

      <Projects></Projects>
    </div>
  );
};

export default HomePage;
