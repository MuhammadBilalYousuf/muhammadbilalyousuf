import React, { Component } from "react";
import { Container, Row, Col } from 'react-grid-system';
import "../styles/HomePage.scss";
import "../styles/About.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Image1 from "../images/image1.jpeg";
import Image2 from "../images/image2.jpeg";
import Image3 from "../images/image3.jpg";
import Image4 from "../images/image4.jpeg";
import Image5 from "../images/image5.jpg";
import { FiCornerUpRight } from "react-icons/fi";


class Table extends Component {
  constructor(props) {
     super(props) 
     this.state = { 
      experience: [
          { name: 'GlobalxSolutions', age: 'Founder, Full Stack Developer', email: 'December 2018 — Present' },
          { name: 'Digitonics Labs Pvt', age: 'Senior Full Stack Developer', email: 'June 2020 — Present' },
          { name: 'Zeroland Digital', age: 'Senior Full Stack Developer', email: 'January 2020 — May 2020' },
          { name: 'Universal Solutions', age: 'Senior Developer', email: 'February 2019 — November 2019' },
          { name: 'Synapse Consulting', age: 'Junior Web Developer', email: 'January 2017 — December 2018' }
        ]
     }
  }
  renderTableData() {
    return this.state.experience.map((student, index) => {
       const { name, age, email } = student
       return (
          <tr>
             <td><strong className="About-Experience-font">{name}</strong></td>
             <td className="About-Title-font" style={{color: '#878a8f'}}>{age}</td>
             <td className="About-Title-font" style={{color: '#878a8f'}}>{email}</td>
          </tr>
       )
    })
 }
 render() {
  return (
     <div>
        <Container>
        <Row>
        <table id='experience'>
           <tbody>
              {this.renderTableData()}
           </tbody>
        </table>
        </Row>
        </Container>
     </div>
  )
}
}
 
const AboutMe = () => {
    return (
      <>
      <div>
      <div className="wrapper5">
          <p className="About-Title-font">A FEW WORDS ABOUT ME</p>
          <strong className="About-Detail-font">
          I’m Muhammad Bilal Yousuf, highly-skilled Software Engineer from Karachi Pakistan who enjoys leaderships and mentoring and loves to writes software to build great products and help businesses succeed with their goals. I’m fascinated by leverage and always looking for opportunities to increase my ability and performance by acting as a force multiplier, comfortable at all levels of the software development stack.
          </strong>
            <br></br>
          <b className="About-Detail">Over the past 4 years I have been working with big companies and rising startups as a full stack developer, working solo and leading small developer teams. In my spare time I enjoy doing Martial arts and travel adventures.</b>
<br></br>
<br></br>
        <Carousel className="carousel-items">
               <div>
                    <img src={Image1} alt="me"/>
                </div>
                <div>
                    <img src={Image2} alt="me"/>
                </div>
                <div>
                    <img src={Image3} alt="me"/>
                </div>
                <div>
                    <img src={Image4} alt="me"/>
                </div>
                <div>
                    <img src={Image5} alt="me"/>
                </div>
            </Carousel>
<br></br>
<br></br>
            <p className="About-Title-font">EXPERIENCE</p>
            <strong className="About-Services-font">
            Over 4 years of experience
            {/* I have 4+ Years Experience and my Journey is just begin  */}
            </strong>
            <br></br>
<br></br>
      <Table/>
<br></br>
<br></br>
            <Container>
            <Row>
            <Col sm={6} style={{textAlign: 'center'}}>
            <p className="About-Title-font">DEVELOPMENT SERVICES</p>
            <strong className="About-Platforms-font">
            Font-end Development / Back-end Development / CRM development / ERP development / E-commerce Development
            </strong>
            </Col>
            <Col sm={6} style={{textAlign: 'center'}}>
            <p className="About-Title-font">TECHNOLOGIES I USE</p>
            <strong className="About-Platforms-font">
            ReactJs / NodeJs / Php / Python / WordPress / Gatsby / Yii2 / Magento 2 / OpenCart / Shopify
            </strong>
            </Col>
            </Row>
        </Container>
        </div>
<br></br>
<br></br>
      <div className="wrapper5">
        <h5>
          <p style={{color: '#878a8f'}}>NEED A FULLSTACK DEVELOPER?</p>
          <b className="Title-font-2">
          <a href="/contact">Let’s work together <FiCornerUpRight/></a>
          </b>
        </h5>
        <hr></hr>
      </div>
      </div>
      </>
    )
}

export default AboutMe
