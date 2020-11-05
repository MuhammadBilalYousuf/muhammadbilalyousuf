import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";

import {
  staggerText,
  staggerReveal,
  fadeInUp,
  handleHover,
  handleHoverExit,
  handleCityReturn,
  handleCity,
  staggerRevealClose
} from "./Animations";

import Backend from "../images/backend.jpg";
import Frontend from "../images/frontend.jpg";

const cities = [
  { name: "Backend Development", image: Backend },
  { name: "Frontend Development", image: Frontend }
];

const Hamburger = ({ state }) => {
  // Create varibles of our dom nodes
  let menuLayer = useRef(null);
  let reveal1 = useRef(null);
  let reveal2 = useRef(null);
  let cityBackground = useRef(null);
  let line1 = useRef(null);
  let line2 = useRef(null);
  let line3 = useRef(null);
  let info = useRef(null);
  let linkedin = "https://linkedin.com/in/muhammadbilalyousuf";
  let github = "https://github.com/MuhammadBilalYousuf";
  let instagram = "https://www.instagram.com/muhammadbilallyousuf";
   

  useEffect(() => {
    // If the menu is open and we click the menu button to close it.
    if (state.clicked === false) {
      // If menu is closed and we want to open it.

      staggerRevealClose(reveal2, reveal1);
      // Set menu to display none
      gsap.to(menuLayer, { duration: 1, css: { display: "none" } });
    } else if (
      state.clicked === true ||
      (state.clicked === true && state.initial === null)
    ) {
      // Set menu to display block
      gsap.to(menuLayer, { duration: 0, css: { display: "block" } });
      //Allow menu to have height of 100%
      gsap.to([reveal1, reveal2], {
        duration: 0,
        opacity: 1,
        height: "100%"
      });
      staggerReveal(reveal1, reveal2);
      fadeInUp(info);
      staggerText(line1, line2, line3);
    }
  }, [state]);

  return (
    <div ref={el => (menuLayer = el)} className='hamburger-menu'>
      <div
        ref={el => (reveal1 = el)}
        className='menu-secondary-background-color'></div>
      <div ref={el => (reveal2 = el)} className='menu-layer'>
        <div
          ref={el => (cityBackground = el)}
          className='menu-city-background'></div>
        <div className='container'>
          <div className='wrapper'>
            <div className='menu-links'>
              <nav>
                <ul>
                  <li>
                    <Link
                      onMouseEnter={e => handleHover(e)}
                      onMouseOut={e => handleHoverExit(e)}
                      ref={el => (line1 = el)}
                      to='/'>
                      Projects
                    </Link>
                  </li>
                  <li>
                    <Link
                      onMouseEnter={e => handleHover(e)}
                      onMouseOut={e => handleHoverExit(e)}
                      ref={el => (line2 = el)}
                      to='/about'>
                      About me
                    </Link>
                  </li>
                  <li>
                    <Link
                      onMouseEnter={e => handleHover(e)}
                      onMouseOut={e => handleHoverExit(e)}
                      ref={el => (line3 = el)}
                      to='/contact'>
                      Contact
                    </Link>
                  </li>
                  <li>
                    <a 
                    onMouseEnter={e => handleHover(e)}
                    onMouseOut={e => handleHoverExit(e)}
                    ref={el => (line3 = el)}
                    href={linkedin} rel="noopener noreferrer" target="_blank">
                    LinkedIn
                    </a>
                  </li>
                  <li>
                    <a 
                    onMouseEnter={e => handleHover(e)}
                    onMouseOut={e => handleHoverExit(e)}
                    ref={el => (line3 = el)}
                    href={github} rel="noopener noreferrer" target="_blank">
                    Github
                    </a>
                  </li>
                  <li>
                    <a 
                    onMouseEnter={e => handleHover(e)}
                    onMouseOut={e => handleHoverExit(e)}
                    ref={el => (line3 = el)}
                    href={instagram} rel="noopener noreferrer" target="_blank">
                    Instagram
                    </a>
                  </li>
                </ul>
              </nav>
              <div ref={el => (info = el)} className='info'>
                <h3>Contact Information</h3>
                <p>
                Feel free to reach out to me any time. I prefer to talk over email, especially since we may be a few time zones away.
                <br></br>
                E: <a href="mailto:muhammadbilalyousuf0@gmail.com" style={{color: 'white'}}>muhammadbilalyousuf0@gmail.com</a>
                <br></br>
                P: <a href="tel:+923323420840" style={{color: 'white'}}>+92-332-3420840</a>
                </p>
              </div>
              <div className='locations'>
                I make it happen:
                {/* Returning the list of cities */}
                {cities.map(el => (
                  <span
                    key={el.name}
                    onMouseEnter={() => handleCity(el.image, cityBackground)}
                    onMouseOut={() => handleCityReturn(cityBackground)}>
                    {el.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hamburger;
