import React from "react";
import Main from "./home/main";
import About from "./home/about";
import Summary from "./home/summary";
import Projects from "./home/projects";
import ContactPage from "./home/contactPage";

const Home = () => {
  return (
    <div>
      <Main />
      <About />
      <Summary />
      <Projects />
      <ContactPage />
    </div>
  );
};

export default Home;
