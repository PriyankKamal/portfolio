import React, { useEffect, useRef } from "react";
import "./About.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { scroller } from "react-scroll";

gsap.registerPlugin(ScrollTrigger, SplitType);

const About = () => {
  const paraRef = useRef(null);
  const aboutHeadingRef = useRef(null) 

  // useEffect(()=>{

  // },[])

  useGSAP(() => {
    const tl = gsap.timeline()
    if (paraRef.current) {
      var splitText = new SplitType(paraRef.current, { types: "chars,words" });
    }

    if(aboutHeadingRef.current){
      var splitHeading = new SplitType(aboutHeadingRef.current,{types:"chars"})
    }

    tl.from(splitHeading.chars,{
      yPercent:40,
      opacity:0, 
      stagger:0.1,
      duration:1, 
      ease:"back.inOut",
      scrollTrigger: {
        trigger:"#about",
        scroller:"body",
        start: "top 88%",
        end: "top 76%",
        scrub: 2,
        // markers: true,
      },
    })


    tl.from(splitText.chars, {
      scrollTrigger: {
        trigger: paraRef.current,
        start: "top 92%",
        end: "top 38%",
        scrub: 2,
        // markers: true,
      },
      opacity: 0.2,
      stagger: 0.1,
    });

    tl.from(".about-img",{
      opacity:0,
      width:"0px",
      // ease:"back.out",
      scrollTrigger: {
        trigger: ".about-img",
        scroller:"body",
        start: "top 92%",
        end: "top 38%",
        scrub: 2,
        // markers: true,
      }
    })

  });


  return ( 
    <>
      <div className="about-page" id="about">
        <h1 ref={aboutHeadingRef}>About me</h1>
        <div className="about-parent">
          <div className="para">
            <div className="paragrapgh">
              {/* <p ref={paraRef}>
              Nice to meet you! I'm Priyank Kamal, a Web Developer. I'm
              passionate about both web-design and web-development with a
              particular focus on both <span>front-end development</span> and
              <span> back-end development</span> in all of its aspects. This is
              where both my technical and creative skills can be used at their
              best. Coding for me is not just my work,I like experimenting with
              many technologies and I also maintain some personal projects.
            </p> */}

              <p ref={paraRef}>
                I'm Priyank, a final-year student from India, pursuing a
                Bachelor's in Technology with a specialization in Computer
                Science and Engineering. I'm passionate about web development
                with a particular focus on both front-end development and
                back-end development.I am excited about the
                opportunities to apply my knowledge and skills in real-world
                scenarios.
              </p>
            </div>
          </div>
          <img className="about-img" src="/images/img1.jpg" alt="user img" style={{minHeight:"100px",minWidth:"100px"}} />
        </div>
      </div>
    </>
  );
};

export default About;
