import React, { useRef } from "react";
import "./Project.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger, SplitType);

const Project = () => {
  const projectHeadingRef = useRef(null);
  useGSAP(() => {
    const tl = gsap.timeline();

    // tl.from("#parent-project-box",{

    //   scrollTrigger:{
    //     trigger:"#parent-project-box",
    //     scroller:"body",
    //     markers:true,
    //     start:"top 50%",
    //     end:"top 40%"
    //   }
    // })

    if (projectHeadingRef.current) {
      var splitHeading = new SplitType(projectHeadingRef.current, {
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
        trigger: "#project",
        scroller: "body",
        start: "top 88%",
        end: "top 76%",
        scrub: 2,
        // markers: true,
      },
    });

    tl.from("#box-1", {
      y: 100,
      opacity: 0,
      scale: 0.8,
      scrollTrigger: {
        trigger: "#box-1",
        scroller: "body",
        // markers:true,
        start: "top 98%",
        end: "top 75%",
        scrub: 2,
      },
    });

    tl.from("#numb-1", {
      opacity: 0,
      x: -10,
      scrollTrigger: {
        trigger: "#numb-1",
        scroller: "body",
        // markers:true,
        start: "top 95%",
        end: "top 85%",
        scrub: 2,
      },
    });

    tl.from("#year-1", {
      opacity: 0,
      x: 20,
      scrollTrigger: {
        trigger: "#year-1",
        scroller: "body",
        // markers:true,
        start: "top 95%",
        end: "top 85%",
        scrub: 2,
      },
    });

    tl.from("#proj-heading-1", {
      y: -50,
      duration: 0.5,
      opacity: 0,
      scrollTrigger: {
        trigger: "#proj-heading-1",
        scroller: "body",
        // markers:true,
        start: "top 95%",
        end: "top 85%",
        scrub: 2,
      },
    });

    tl.from("#project-heading-box-1 .pb-box-1", {
      opacity: 0,
      scale: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: "#project-heading-box-1 .pb-box-1",
        scroller: "body",
        // markers:true,
        start: "top 99%",
        end: "top 90%",
        scrub: 2,
      },
    });

    tl.from("#box-2", {
      y: 100,
      opacity: 0,
      scale: 0.8,
      scrollTrigger: {
        trigger: "#box-2",
        scroller: "body",
        // markers:true,
        start: "top 98%",
        end: "top 80%",
        scrub: 2,
      },
    });

    tl.from("#numb-2", {
      opacity: 0,
      x: -10,
      scrollTrigger: {
        trigger: "#numb-2",
        scroller: "body",
        // markers:true,
        start: "top 98%",
        end: "top 90%",
        scrub: 2,
      },
    });

    tl.from("#year-2", {
      opacity: 0,
      x: 20,
      scrollTrigger: {
        trigger: "#year-2",
        scroller: "body",
        // markers:true,
        start: "top 98%",
        end: "top 85%",
        scrub: 2,
      },
    });

    tl.from("#proj-heading-2", {
      y: -50,
      duration: 0.5,
      opacity: 0,
      scrollTrigger: {
        trigger: "#proj-heading-2",
        scroller: "body",
        // markers:true,
        start: "top 95%",
        end: "top 85%",
        scrub: 2,
      },
    });

    tl.from("#project-heading-box-2 .pb-box-1", {
      opacity: 0,
      scale: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: "#project-heading-box-2 .pb-box-1",
        scroller: "body",
        // markers:true,
        start: "top 99%",
        end: "top 92%",
        scrub: 2,
      },
    });

    tl.from("#box-3", {
      y: 100,
      opacity: 0,
      scale: 0.8,
      scrollTrigger: {
        trigger: "#box-3",
        scroller: "body",
        // markers:true,
        start: "top 98%",
        end: "top 80%",
        scrub: 2,
      },
    });

    tl.from("#numb-3", {
      opacity: 0,
      x: -10,
      scrollTrigger: {
        trigger: "#numb-3",
        scroller: "body",
        // markers:true,
        start: "top 95%",
        end: "top 85%",
        scrub: 2,
      },
    });

    tl.from("#year-3", {
      opacity: 0,
      x: 20,
      scrollTrigger: {
        trigger: "#year-3",
        scroller: "body",
        // markers:true,
        start: "top 95%",
        end: "top 85%",
        scrub: 2,
      },
    });

    tl.from("#proj-heading-3", {
      y: -50,
      duration: 0.5,
      opacity: 0,
      scrollTrigger: {
        trigger: "#proj-heading-3",
        scroller: "body",
        // markers:true,
        start: "top 95%",
        end: "top 85%",
        scrub: 2,
      },
    });

    tl.from("#project-heading-box-3 .pb-box-1", {
      opacity: 0,
      scale: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: "#project-heading-box-3 .pb-box-1",
        scroller: "body",
        // markers:true,
        start: "top 99%",
        end: "top 90%",
        scrub: 2,
      },
    });

    tl.from("#box-4", {
      y: 100,
      opacity: 0,
      scale: 0.8,
      scrollTrigger: {
        trigger: "#box-4",
        scroller: "body",
        // markers:true,
        start: "top 98%",
        end: "top 75%",
        scrub: 2,
      },
    });

    tl.from("#numb-4", {
      opacity: 0,
      x: -10,
      scrollTrigger: {
        trigger: "#numb-4",
        scroller: "body",
        // markers:true,
        start: "top 95%",
        end: "top 85%",
        scrub: 2,
      },
    });

    tl.from("#year-4", {
      opacity: 0,
      x: 20,
      scrollTrigger: {
        trigger: "#year-4",
        scroller: "body",
        // markers:true,
        start: "top 95%",
        end: "top 85%",
        scrub: 2,
      },
    });

    tl.from("#proj-heading-4", {
      y: -50,
      duration: 0.5,
      opacity: 0,
      scrollTrigger: {
        trigger: "#proj-heading-4",
        scroller: "body",
        // markers:true,
        start: "top 95%",
        end: "top 85%",
        scrub: 2,
      },
    });

    tl.from("#project-heading-box-4 .pb-box-1", {
      opacity: 0,
      scale: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: "#project-heading-box-4 .pb-box-1",
        scroller: "body",
        // markers:true,
        start: "top 99%",
        end: "top 90%",
        scrub: 2,
      },
    });

    tl.from("#box-5", {
      y: 100,
      opacity: 0,
      scale: 0.8,
      scrollTrigger: {
        trigger: "#box-5",
        scroller: "body",
        // markers:true,
        start: "top 98%",
        end: "top 75%",
        scrub: 2,
      },
    });

    tl.from("#numb-5", {
      opacity: 0,
      x: -10,
      scrollTrigger: {
        trigger: "#numb-5",
        scroller: "body",
        // markers:true,
        start: "top 95%",
        end: "top 85%",
        scrub: 2,
      },
    });

    tl.from("#year-5", {
      opacity: 0,
      x: 20,
      scrollTrigger: {
        trigger: "#year-5",
        scroller: "body",
        // markers:true,
        start: "top 95%",
        end: "top 85%",
        scrub: 2,
      },
    });

    tl.from("#proj-heading-5", {
      y: -50,
      // scale:0.6,
      duration: 0.5,
      opacity: 0,
      scrollTrigger: {
        trigger: "#proj-heading-5",
        scroller: "body",
        // markers:true,
        start: "top 95%",
        end: "top 85%",
        scrub: 2,
      },
    });

    tl.from("#project-heading-box-5 .pb-box-1", {
      opacity: 0,
      scale: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: "#project-heading-box-5 .pb-box-1",
        scroller: "body",
        // markers:true,
        start: "top 99%",
        end: "top 90%",
        scrub: 2,
      },
    });
  });

  return (
    <>
      <div className="project" id="project">
        <h1 ref={projectHeadingRef}>
          Projects <span>highlight</span>
        </h1>
        <div className="project-box" id="parent-project-box">
          <a href="https://priyankkamal.github.io/Cake-website" target="_main" id="box-1">
            <div className="p-box1">
              {/* <div className="p-box-part1"> */}
              <div className="p-box-child" id="p-box-child-id">
                <div className="numb" id="numb-1">
                  01
                </div>
                <div className="project-name">
                  <p className="project-heading" id="proj-heading-1">
                    Cake Website{" "}
                  </p>
                  <div
                    className="project-heading-box"
                    id="project-heading-box-1"
                  >
                    <div className="pb-box-1">
                      <p>HTML</p>
                    </div>
                    <div className="pb-box-1">
                      <p>CSS</p>
                    </div>
                    <div className="pb-box-1">
                      <p>JS</p>
                    </div>
                    <div className="pb-box-1">
                      <p>Bootstrap</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* <img className="proj-img"\
               src="/images/cake-img.png" alt="not found" srcset="" /> */}
              <div className="p-year" id="year-1">
                <p>2022</p>
                {/* </div> */}
              </div>
            </div>
          </a>

          <a href="https://priyankkamal.github.io/Bubbles-game/" target="_main" id="box-2">
            <div className="p-box1">
              {/* <div className="p-box-part1"> */}
              <div className="p-box-child">
                <div className="numb" id="numb-2">
                  02
                </div>
                <div className="project-name">
                  <p className="project-heading" id="proj-heading-2">
                    Bubble Game{" "}
                  </p>
                  <div
                    className="project-heading-box"
                    id="project-heading-box-2"
                  >
                    <div className="pb-box-1">
                      <p>HTML</p>
                    </div>
                    <div className="pb-box-1">
                      <p>CSS</p>{" "}
                    </div>
                    <div className="pb-box-1">
                      <p>JS</p>
                    </div>
                    <div className="pb-box-1">
                      <p>GSAP</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-year" id="year-2">
                <p>2023</p>
                {/* </div> */}
              </div>
            </div>
          </a>

          <a href="https://github.com/PriyankKamal/Priyank-s-music-website" target="_main" id="box-3">
            <div className="p-box1">
              {/* <div className="p-box-part1"> */}
              <div className="p-box-child">
                <div className="numb" id="numb-3">
                  03
                </div>
                <div className="project-name">
                  <p className="project-heading" id="proj-heading-3">
                    NextBeat Junction{" "}
                  </p>
                  <div
                    className="project-heading-box"
                    id="project-heading-box-3"
                  >
                    <div className="pb-box-1">
                      <p>Next JS</p>
                    </div>
                    <div className="pb-box-1">
                      <p>Expree JS</p>
                    </div>
                    <div className="pb-box-1">
                      <p>MongoDB</p>
                    </div>
                    <div className="pb-box-1">
                      <p>GSAP</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-year" id="year-3">
                <p>2023</p>
                {/* </div> */}
              </div>
            </div>
          </a>

          <a href="#" id="box-4">
            <div className="p-box1">
              {/* <div className="p-box-part1"> */}
              <div className="p-box-child">
                <div className="numb" id="numb-4">
                  04
                </div>
                <div className="project-name">
                  <p className="project-heading" id="proj-heading-4">
                    Instagram Clone{" "}
                  </p>
                  <div
                    className="project-heading-box"
                    id="project-heading-box-4"
                  >
                    <div className="pb-box-1">
                      <p>React JS</p>
                    </div>
                    <div className="pb-box-1">
                      <p>Expree JS</p>
                    </div>
                    <div className="pb-box-1">
                      <p>MongoDB</p>
                    </div>
                    <div className="pb-box-1">
                      <p>GSAP</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-year" id="year-4">
                <p>2024</p>
                {/* </div> */}
              </div>
            </div>
          </a>

          <a href="#" id="box-5">
            <div className="p-box1">
              {/* <div className="p-box-part1"> */}
              <div className="p-box-child">
                <div className="numb" id="numb-5">
                  05
                </div>
                <div className="project-name">
                  <p className="project-heading" id="proj-heading-5">
                    Portfolio{" "}
                  </p>
                  <div
                    className="project-heading-box"
                    id="project-heading-box-5"
                  >
                    <div className="pb-box-1">
                      <p>React JS</p>
                    </div>
                    <div className="pb-box-1">
                      <p>Three JS</p>
                    </div>
                    <div className="pb-box-1">
                      <p>GSAP</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-year" id="year-5">
                <p>2024</p>
                {/* </div> */}
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Project;
