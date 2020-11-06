import React from 'react'
import { Container, Row, Col } from 'react-grid-system';
import "../styles/Footer.scss";
import "../styles/HomePage.scss";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Logo from '../images/mby-logo.png';

function Footer() {
    return (
        <div>
            <div className='container'>
          <div className='footer'>
          <Container>
            <Row>
            <Col sm={4}>
            <h5>
            <b className="Title-font">
            Contact <br></br>information —
            </b>
            <p style={{color: '#878a8f', fontWeight: '500'}}>Feel free to reach out to me any time. I prefer to talk over email, especially since we may be a few time zones away.</p>
            <p style={{color: '#878a8f', fontWeight: '500'}}>E: <a href="mailto:muhammadbilalyousuf0@gmail.com">muhammadbilalyousuf0@gmail.com</a></p>
            <p style={{color: '#878a8f', fontWeight: '500'}}>P: <a href="tel:+923323420840">+92-332-3420840</a></p>
            </h5>
            </Col>
            <Col sm={3}>
            <h5>
            <b className="Title-font">
            Additional<br></br>information —
            </b>
            <ul style={{listStyle: "none", padding: "0"}}>
                <li style={{color: '#878a8f', fontWeight: '500'}}>
                    <a href="/">Projects</a> 
                </li>
                <li style={{color: '#878a8f', fontWeight: '500'}}>
                <a href="/about">About me</a> 
                </li>
                <li style={{color: '#878a8f', fontWeight: '500'}}>
                <a href="/contact">Contact</a> 
                </li>
                <li style={{color: '#878a8f', fontWeight: '500'}}>
                <a href="https://www.linkedin.com/in/muhammadbilalyousuf" target="_blank" rel="noopener noreferrer">Linkedin</a> 
                </li>
                <li style={{color: '#878a8f', fontWeight: '500'}}>
                <a href="https://github.com/MuhammadBilalYousuf" target="_blank" rel="noopener noreferrer">Github</a> 
                </li>
                <li style={{color: '#878a8f', fontWeight: '500'}}>
                <a href="https://www.instagram.com/muhammadbilallyousuf" target="_blank" rel="noopener noreferrer">Instagram</a> 
                </li>
            </ul>
            </h5>
            </Col>
            <Col sm={3}>
            <h5>
            <b className="Title-font">
            Current <br></br>availability —
            </b>
            <p style={{color: '#878a8f', fontWeight: '500'}}>I usually work on several projects but I’ll be happy to discuss new opportunities. Let’s get in touch!</p>
            {/* <ul style={{listStyle: "none", padding: "0"}}>
                <li style={{color: '#878a8f', fontWeight: '500'}}>
                    <a href="/projects">Projects</a> 
                </li>
                <li style={{color: '#878a8f', fontWeight: '500'}}>
                <a href="/about">About me</a> 
                </li>
                <li style={{color: '#878a8f', fontWeight: '500'}}>
                <a href="/contact">Contact</a> 
                </li>
                <li style={{color: '#878a8f', fontWeight: '500'}}>
                <a href="https://www.linkedin.com/in/muhammadbilalyousuf" target="_blank" rel="noopener noreferrer">Linkedin</a> 
                </li>
                <li style={{color: '#878a8f', fontWeight: '500'}}>
                <a href="https://github.com/MuhammadBilalYousuf" target="_blank" rel="noopener noreferrer">Github</a> 
                </li>
                <li style={{color: '#878a8f', fontWeight: '500'}}>
                <a href="https://www.instagram.com/muhammadbilallyousuf" target="_blank" rel="noopener noreferrer">Instagram</a> 
                </li>
            </ul> */}
            </h5>
            </Col>
            <Col sm={2}>
            <h5>
            <b className="Title-font">
            Follow<br></br>me on —
            </b>
            <p style={{color: '#878a8f', fontWeight: '500'}}></p>
            <a href="https://www.linkedin.com/in/muhammadbilalyousuf" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn size={32}/>
            </a>
            <a href="https://www.instagram.com/muhammadbilallyousuf" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={32}/>
            </a>
            </h5>
            </Col>
            </Row>
            <Row className="footer-logo">
            <Col sm={12}>
            <img src={Logo} className="Logo-Size" alt="Logo"></img>© 2020 Muhammad Bilal Yousuf.
            </Col>
            </Row>
        </Container>

        </div>
          </div>
        </div>
    )
}

export default Footer


