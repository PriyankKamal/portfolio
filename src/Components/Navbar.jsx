import React, { useRef, useState } from "react";
import "./Navbar.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
// import { NavLink } from "react-router-dom";
import { Box, Drawer } from "@mui/material";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-scroll";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setOpen(open);
  };
 
  const imageSrc = "images/nav-logo-sm.png";

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        <List>
          {["Priyank"].map((text, index) => (
            <ListItem
              key={text}
              disablePadding
              primaryTypographyProps={{ width: "100%", padding: "2px" }}
            >
              <img
                src={imageSrc}
                alt={text}
                style={{
                  width: "55px",
                  height: "55px",
                  borderRadius: "50%",
                  marginLeft: "10px",
                }}
              />
              <ListItemText
                primary={text}
                primaryTypographyProps={{
                  fontSize: "1.7rem",
                  padding: "10px 10px",
                  fontFamily: "sans-serif",
                  fontWeight: "200",
                  letterSpacing:"0px"
                }}
              />
            </ListItem>
          ))}
        </List>
      </List>

      <Divider sx={{ backgroundColor: "white" }} />
      <List>
        {["Home", "About", "Skills", "Project","Contact","Resume"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <Link 
            to={text.toLocaleLowerCase()}
            spy={true}
        smooth={true}
        offset={5}
        duration={500}
        className="drawer-link"
            >
            <ListItemText
              primary={text}
              primaryTypographyProps={{
                fontSize: "1.4rem",
                padding: "10px 34px",
                fontFamily: "cursive",
                fontWeight: "100",
              }}
            />
            
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const box = useRef();

  let initialPosition = 0;

  const navbarHandle = () => {
    let currentPosition = window.scrollY;
    const navBox = document.querySelector("nav");
    window.addEventListener("scroll", (e) => {
      if (initialPosition <= currentPosition) {
        gsap.to("nav", {
          y: -90,
          // ease:"linear",
        });
      } else {
        gsap.to("nav", {
          y: 0,
          // duration:1
        });
      }
      initialPosition = currentPosition;
      currentPosition = window.scrollY;
    });
  };
  navbarHandle();

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(".nav-box", {
      y: -100,
      duration: 0.3,
      delay: 1.4,
      ease: "power1.in",
      opacity: 0,
      // scale:0,
    }),
      tl.from(".nav-p", {
        y: 30,
        ease: "linear",
        delay: 0.5,
        opacity: 0,
      }),
      tl.from(".nav-left a", {
        y: -100,
        duration: 0.5,
        // delay:2.2,
        ease: "linear",
        opacity: 0,
        // scale:0,
        stagger: 0.1,
      });
  });

  const openResume=()=>{
    let path = "../images/priyanklastresume.pdf"

    window.open(path,"_blank")
  }
  return (
    <>
      <nav>
        <div className="nav-box ">
          <p className="nav-p">Priyank Kamal</p>
        </div>
        <div className="nav-left" id="nav-left-1">
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={5}
            duration={500}
            className="hover-link"
            onMouseEnter={() => handleMouseEnter(linkRefs[0])}
          >
            Home
          </Link>

          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={5}
            duration={500}
            className="hover-link"
          >
            About
          </Link>

          <Link
            to="skill"
            spy={true}
            smooth={true}
            offset={5}
            duration={500}
            className="hover-link"
          >
            Skills
          </Link>

          <Link
            to="project"
            spy={true}
            smooth={true}
            offset={5}
            duration={500}
            className="hover-link"
          >
            Projects
          </Link>

          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={5}
            duration={500}
            className="hover-link"
          >
            Contact
          </Link>
          <a href="../images/priyanklastresume.pdf"
            // target="_blank"
            download="priyank's resume"
            className="hover-link"
            onClick={openResume}
          >
            Resume👈
          </a>
        </div>
        

        <div className="left-open">
          <Button onClick={toggleDrawer(true)}>
            <img src="/images/nav-small.png" alt="nav-img" />
          </Button>
          <Drawer
            open={open}
            sx={{ "& .MuiDrawer-paper": { backgroundColor: "#292c2d" } }}
            onClose={toggleDrawer(false)}
          >
            {DrawerList}
          </Drawer>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
