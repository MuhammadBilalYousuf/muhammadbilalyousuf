import React, { Component } from "react";
import { Container, Row, Col } from 'react-grid-system';
import "../styles/HomePage.scss";
import "../styles/About.scss";
import Image1 from "../images/me/image1.jpeg";
import Image2 from "../images/me/image2.jpeg";
import Image3 from "../images/me/image3.jpg";
import Image4 from "../images/me/image4.jpg";
import Image5 from "../images/me/image5.jpg";
import Image6 from "../images/me/image6.jpg";
import Image7 from "../images/me/image7.jpg";
import Image8 from "../images/me/image8.jpg";
import { FiCornerUpRight } from "react-icons/fi";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';


class Table extends Component {
  constructor(props) {
     super(props) 
     this.state = { 
      experience: [
          { name: 'GlobalxSolutions', age: 'Founder, Full Stack Developer', email: 'December 2018 — Present' },
          { name: 'Codup', age: 'Senior Full Stack Developer', email: 'November 2020 — Present' },
          { name: 'Digitonics Labs Pvt. Ltd', age: 'Senior Full Stack Developer', email: 'June 2020 — October 2020' },
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
      <div className="wrapper10">
      <div className="wrapper5">
          <p className="About-Title-font">A FEW WORDS ABOUT ME</p>
          <strong className="About-Detail-font">
          I’m Muhammad Bilal Yousuf, highly-skilled Software Engineer from Karachi Pakistan who enjoys leaderships and mentoring and loves to writes software to build great products and help businesses succeed with their goals. I’m fascinated by leverage and always looking for opportunities to increase my ability and performance by acting as a force multiplier, comfortable at all levels of the software development stack.
          </strong>
            <br></br>
          <b className="About-Detail">Over the past 4 years I have been working with big companies and rising startups as a full stack developer, working solo and leading small developer teams. In my spare time I enjoy doing Martial arts and travel adventures.</b>
      </div>
<br></br>
<br></br>
   <AwesomeSlider animation="cubeAnimation" className="AwesomeSlider" >
    <div data-src={Image1} />
    <div data-src={Image2} />
    <div data-src={Image3} />
    <div data-src={Image4} />
    <div data-src={Image5} />
    <div data-src={Image6} />
    <div data-src={Image7} />
    <div data-src={Image8} />
  </AwesomeSlider>
<br></br>
<br></br>
      <div className="wrapper5">
            <p className="About-Title-font">EXPERIENCE</p>
            <strong className="About-Services-font">
            Over 4 years of experience
            </strong>
            <br></br>
<br></br>
      <Table/>
      </div>
<br></br>
<br></br>
      <div className="wrapper5">
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
      </div>
      </div>
      <hr></hr>
      </div>
      </>
    )
}

export default AboutMe
