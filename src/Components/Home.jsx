import React from "react";
import Navbar from "./Navbar";
import "../App.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import About from "./About";
import SkillNew from "./SkillNew";
import Project from "./Project";
import Contact from "./Contact";
// import CustomCursor from './CustomCursor';

const Home = () => {
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".overlay", {
      y: -1000,
      duration: 0.5,
      delay: 1,
      // clipPath:"polygon(0 0, 100% 0, 90% 91%, 9% 91%)",
      ease: "linear",
    }),
      tl.from(".upper", {
        y: -1000,
        duration: 0.9,
        opacity: 0,
      });

    // tl.from("p .start-hed-span",{
    //   y:-1000,
    //   duration:0.3,
    //   delay:1,f
    //   // opacity:0,
    // })

    // tl.from(".p-1",{
    //   x:-100,
    //   duration:0.8,
    //   delay:1.4,
    //   opacity:0,

    // })
    // gsap.from(".p-2",{
    //   x:100,
    //   duration:0.6,
    //   delay:3.2,
    //   opacity:0,

    // })
  });

  return (
    <>
      <div className="main">
        {/* <CustomCursor/> */}
        <Navbar />
        <div className="overlay">
          <div className="overlay-box">
            <p>Priyank Kamal</p>
          </div>
        </div>
        <div id="home" className="upper">
          {/* <video autoPlay loop muted src="../backvideo.mp4"></video> */}
          <div className="upper-box">
            {/* <Navbar /> */}
            <div className="start-heading">
              <p>Hello there!</p> 
              <p className="p-1">
               I'm Priyank Kamal, 
              </p>
              <p>
                a full-stack
              </p>
              <p className="p-2">
               developer
              </p>
              {/* <p>I'm a <span>full-stack</span></p> */}
            </div>

            <img className="home-boy-img" src="/images/front-bg1.png" alt="user img" />
          </div>
        </div>
        {/* <CustomCursor/> */}
        {/* <About/>

        <SkillNew/>

        <Project/>

        <Contact/> */}

        {/* <Skills/> */}
      </div>
    </>
  );
};

export default Home;
