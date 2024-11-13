import React, { useEffect } from "react";
import "./CustomCursor.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const CustomCursor = () => {

 
//   useGSAP(()=>{
//         window.addEventListener("mousemove", (e) => {
     
//           gsap.to(".custom-cursor", {
//             x: e.clientX,
//             y: e.clientY,
//           });
//         });
  
//   })

 
useEffect(() => {
    const customParent = document.querySelector(".cursor-parent");
    const customCursor = document.querySelector(".custom-cursor");

    if (!customCursor) return;

    const handleMouseMove = (e) => {
        gsap.to(customParent, {
            x: e.x - 25,
            y: e.y - 25,
            opacity:1
          });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []); 


  return (
    <>
    <div className="cursor-parent">
      <div className="custom-cursor"></div>

    </div>
    </>
  );
};
export default CustomCursor;
