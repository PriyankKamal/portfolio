import React, { useEffect, useRef, useState } from "react";
import "./SkillNew.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
gsap.registerPlugin(ScrollTrigger, SplitType);

const SkillNew = () => {

  const skillsHeadingRef = useRef(null);

 
  useGSAP(()=>{
    const tl = gsap.timeline();
    if (skillsHeadingRef.current) {
      var splitHeading = new SplitType(skillsHeadingRef.current, {
        types: "chars",
      });
    }

    tl.from(splitHeading.chars, {
      yPercent: 40,
      opacity: 0,
      stagger: 0.1,
      duration: 1,
      ease: "back.inOut",
      scrollTrigger: {
        trigger: "#skill",
        scroller: "body",
        start: "top 88%",
        end: "top 76%",
        scrub: 2,
        // markers: true,
      },
    });

    tl.from(".skill-tech .techs",{
          opacity:0,
          stagger:0.5,
          // x:-100,
          // width:"10px",
          // ease:"power4",
          y:-20,
          scrollTrigger: {
            trigger: ".skills",
            scroller: "body",
            start: "top 85%",
            end: "top 50%",
            scrub: 3,
            // markers: true,
          },
        })

  })

  return (
    <>
      <div id="skill" className="skillsnew">
        <h1 ref={skillsHeadingRef} className="heading">
          Skills
        </h1>
        <div className="skills">
       

          <div className="skill-tech">
            <div className="techs">
              <img src="/images/html-img.png" alt="" />
              <p>HTML</p>
            </div>
            <div className="techs">
              <img src="/images/cssnew.png" alt="" />
              <p>CSS</p>
            </div>
            <div className="techs">
              <img src="/images/jsnew.png" alt="" />
              <p>Javascript</p>
            </div>
            <div className="techs">
              <img src="/images/reactnew.png" alt="" />
              <p>React</p>
            </div>
            <div className="techs">
              <img src="/images/expreenew.png" alt="" />
              <p>Express</p>
            </div>
            <div className="techs">
              <img src="/images/nodenew.png" alt="" />
              <p>Node</p>
            </div>
            <div className="techs">
              <img src="/images/mongonew.png" alt="" />
              <p>MongoDB</p>
            </div>
            <div className="techs">
              <img src="/images/nextjs.png" alt="" />
              <p>Next JS</p>
            </div>
            <div className="techs">
              <img src="/images/bootstrap.png" alt="" />
              <p>Bootstrap</p>
            </div>
            <div className="techs">
              <img src="/images/gsapnew.png" alt="" />
              <p>GSAP</p>
            </div>
            <div className="techs">
              <img src="/images/threejs.png" alt="" />
              <p>Three JS</p>
            </div>
            <div className="techs">
              <img src="/images/framernew.png" alt="" />
              <p>Motion</p>
            </div>
            <div className="techs">
              <img src="/images/clang.png" alt="" />
              <p>C</p>
            </div>
            <div className="techs">
              <img src="/images/python.png" alt="" />
              <p>Python</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SkillNew;
