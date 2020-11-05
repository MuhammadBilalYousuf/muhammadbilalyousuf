import React from "react"
import { RiMailCheckLine, RiInstagramLine, RiLinkedinFill } from "react-icons/ri"
import { FiCornerUpRight } from "react-icons/fi";
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Bilal from '../images/Bilal.jpeg'
import "../styles/HomePage.scss";
import { Container, Row, Col } from 'react-grid-system';
import HoverImage from "react-hover-image";
import instagram1 from "../images/instagram_1.jpg";
import instagram2 from "../images/instagram_2.jpg";
import linkedin from "../images/linkedin.jpg";
import ImageContentHover from 'react-image-hover';
import project_1 from "../images/projects/project_1.png";
import project1 from "../images/projects/project1.png";
import project_2 from "../images/projects/project_2.png";
import project2 from "../images/projects/project2.png";
import project_3 from "../images/projects/project_3.png";
import project3 from "../images/projects/project3.png";
import project_4 from "../images/projects/project_4.png";
import project4 from "../images/projects/project4.png";
import project_5 from "../images/projects/project_5.png";
import project5 from "../images/projects/project5.png";
import project_6 from "../images/projects/project_6.png";
import project6 from "../images/projects/project6.png";

const HomePage = () => {
  class Home extends React.Component {
    render() {
      return (
      <div>
        <div className="wrapper3">
          <h5>
          <p style={{color: '#878a8f'}}>MUHAMMAD BILAL YOUSUF</p>
          <b className="Title-font">
          Software Engineer & <br></br>Aspiring AI Specilist.
          </b>
            <br></br>
              &#10147; <b style={{color: '#878a8f', fontWeight: '500'}}>I'm a Full Stack Developer</b>
            <br></br>
              &#10147; <b style={{color: '#878a8f', fontWeight: '500'}}>And a graduate of the Software</b>
            <br></br>
              &#10147; <b style={{color: '#878a8f', fontWeight: '500'}}>Engineering programme at</b>
            <br></br>
              &#10147; <b style={{color: '#878a8f', fontWeight: '500'}}>Mohammad Ali Jinnah University, Karachi.</b>
              <br></br>
              <br></br>
              &#10148; <AnchorLink href='#projects'>View Projects</AnchorLink> <b style={{color: '#878a8f'}}>
                  or 
              </b><a href="/about"> Read About Me</a>
              <br></br>
              <br></br>
        <a href="/contact">
        <button class="btn btn--hover-icon" style={{color: 'white', fontSize: '15px'}}>
        <RiMailCheckLine />
        <span>Contact me</span>
        </button>
        </a>
          </h5>
        </div>
        <div className="container2">
        <div className="wrapper2">
        <img src={Bilal} width="100%" alt={Bilal}></img>
        </div>
        </div>
        <br></br>
        <div className="wrapper4">
          <h5>
          <p style={{color: '#878a8f'}}>SELECTED PROJECTS</p>
          <b className="Title-font" id="projects">
          Case studies
          </b>
          </h5>
        </div>
        <Container>
            <Row>
            <Col sm={6}>
            <HoverImage src={project_5} hoverSrc={project5} style={{width: '100%'}} alt="project"/>
            </Col>
            <Col sm={6}>
            <HoverImage src={project_3} hoverSrc={project3} style={{width: '100%'}} alt="project"/>
            </Col>
            </Row>
            <Row>
            <Col sm={6}>
            <HoverImage src={project_2} hoverSrc={project2} style={{width: '100%'}} alt="project"/>
            </Col>
            <Col sm={6}>
            <HoverImage src={project_1} hoverSrc={project1} style={{width: '100%'}} alt="project"/>
            </Col>
            </Row>
            <Row>
            <Col sm={6}>
            <HoverImage src={project_4} hoverSrc={project4} style={{width: '100%'}} alt="project"/>
            </Col>
            <Col sm={6}>           
            <HoverImage src={project_6} hoverSrc={project6} style={{width: '100%'}} alt="project"/>
            </Col>
            </Row>
        </Container>
        <br></br>
        <div className="wrapper4">
          <h5>
          <p style={{color: '#878a8f'}}>WHAT'S NEW?</p>
          <b className="Title-font">
          Instagram & Linkedin
          </b>
          </h5>
        </div>
        <Container>
            <Row>
            <Col sm={4}>
            <ImageContentHover 
          className="image-cover"
          tileWidth="100%"
          tileHeight="440px" 
          image={instagram1}
          content={{
            title:  <RiInstagramLine />,
            body: 'Everything comes to you at the right moment.'
          }} 
          effect="fadeIn" 
          />
            </Col>
            <Col sm={4}>
           <ImageContentHover 
          className="image-cover2"
          tileWidth="100%"
          tileHeight="140px" 
          
          image={linkedin}
          content={{
            title:  <RiLinkedinFill />,
          }} 
          effect="fadeIn" 
          />
            </Col>
            <Col sm={4}>
            <ImageContentHover 
          className="image-cover"
          tileWidth="100%"
          tileHeight="440px" 
          image={instagram2}
          content={{
            title:  <RiInstagramLine />,
            body: 'Attempt the impossible in order to improve your work.'
          }} 
          effect="fadeIn" 
          />
            </Col>
            </Row>
        </Container>
        <div className="wrapper5">
          <h5>
          <p style={{color: '#878a8f'}}>NEED A FULLSTACK DEVELOPER?</p>
          <b className="Title-font-2">
          <a href="/contact">Let’s work together <FiCornerUpRight/></a>
          </b>
          </h5>
        </div>
        <hr></hr>
      </div>
      );
    }
  }
    return (
    <>
    <Home />
    <br></br>
    <br></br>
    
    </>
  );
};

export default HomePage;
