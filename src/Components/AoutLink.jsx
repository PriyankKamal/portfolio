import React from 'react'
import "./About.css";


const AoutLink = () => {
  return (
    <>
    <div className="about-page" id="about">
        {/* <h1>About me</h1> */}
        <div className="about-1">
          <h1 className="about-center">Let’s get to</h1>
          <h1 className="about-center">know each other</h1>
          <p className="about-center a-p1">
            Let me introduce myself, my workflows and the technologies
          </p>
          <p className="about-center a-p2">
            I like to use to bring my projects to life.
          </p>
        </div>
        <div className="about-2">
          <div className="about-para">
            <p>Nice to meet you! I'm Priyank Kamal, a Web Developer.</p><br />
            <p>
              I'm passionate about both web-design and web-development with a
              particular focus on both <span>front-end development</span> and <span>back-end development</span> in all of its aspects.
              This is where both my technical and cretive skill can be used at their best.
            </p><br />
            <p>Coding for me is not just my work,I like experimenting with many technologies and I also maintain some personal projects.</p>
          </div>
          <div className="about-model"></div>
        </div>
      </div>
    
    </>
  )
}

export default AoutLink