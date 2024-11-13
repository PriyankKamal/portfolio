import React, { useRef, useState } from "react";
import "./Contact.css";

import { TextField } from "@mui/material";
import { Button } from "@mui/material";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { toast } from 'react-toastify';


gsap.registerPlugin(ScrollTrigger,SplitType);
 
const Contact = () => {

  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [description,setDescription] = useState("")

  const contactHeadingRef = useRef(null) 

  useGSAP(()=>{
    const tl = gsap.timeline();

    if(contactHeadingRef.current){
      var splitHeading = new SplitType(contactHeadingRef.current,{types:"chars"})
    }

    tl.from(splitHeading.chars,{
      yPercent:40,
      opacity:0,
      stagger:0.1,
      duration:1,
      ease:"back.inOut",
      scrollTrigger: {
        trigger:"#contact",
        scroller:"body",
        start: "top 88%",
        end: "top 76%",
        scrub: 2,
        // markers: true,
      },
    })

    tl.from("form",{
      // scale:0,
      opacity:0,
      // x:-100,
      // width:"0vw",
      height:"-10px",
     
      // backgroundColor:"white",
      scrollTrigger:{
        trigger:"#contact",
        scroller:"body",
        // markers:true,
        start:"top 60%", 
        end:"top 50%",
        scrub:2,
      }
    })

    tl.from(".form-input-gsap",{
      opacity:0,
      // scale:0,
      stagger:0.2,
      width:"10px",
      scrollTrigger:{
        trigger:"#contact",
        scroller:"body",
        // markers:true,
        start:"top 50%",
        end:"top 50%",
        scrub:2,
      }

    })
  })

  // const handleSubmit=(e)=>{
  //   e.preventDefault()
    
  //   toast('🦄 Message send', {
  //     position: "top-right",
  //     autoClose: 4000,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //     theme: "dark",
    
  //     });
    
  //   setName("")
  //   setEmail("")
  //   setDescription("")
  // }
  return (
    <>
      <div id="contact" className="contact">
        {/* <div className="custom-shape-divider-bottom-1722508449">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="shape-fill"
            ></path>
          </svg>
        </div> */}
        <h1 className="" ref={contactHeadingRef}>Get In Touch </h1>


        <div className="form">
        <form action="https://formspree.io/f/xrbzvgwd" method="POST" >
          
        <TextField
            id="standard-basic"
            label="Name"
            variant="outlined"
            placeholder="Name"
            className="form-input form-input-gsap"
            name="name"
            value={name}
            autoComplete="off"
            // required
            onChange={(e)=>{setName(e.target.value)}}
            

            InputLabelProps={{
              className:"form-input-label"
              
            }}
           
          />
          <TextField
            id="standard-password-input"
            label="E-mail"
            type="email"
            variant="outlined"
            placeholder="johndoe@gmail.com"
            className="form-input form-input-gsap"
            autoComplete="off"
            // required
            name="email"
            value={email}
            onChange={(e)=>{setEmail(e.target.value)}}
          
           
            InputLabelProps={{
              className:"form-input-label" 
           
            }}
          />

          <TextField
            id="standard-basic"
            label="Message"
            variant="outlined" 
            placeholder="Enter Message"
            className="form-input form-input-gsap"
            multiline 
            rows={6}
            autoComplete="off"
            // required
            name="description"
            value={description}
            onChange={(e)=>{setDescription(e.target.value)}}
            
            InputLabelProps={{
              className:"form-input-label"
        
            }}
          />
          <Button type="submit" className="form-input-gsap" variant="contained">Send 🚀</Button>
        </form>


        


        </div>
      </div>
    </>
  );
};

export default Contact;
