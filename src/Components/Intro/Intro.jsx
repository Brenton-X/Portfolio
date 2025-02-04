import React from 'react';
import './Intro.css';
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import boy from '../../img/boy.png';
import thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import { themeContext } from "../../Context";
import { useContext } from "react";

const Intro = () => {



  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode

  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? 'white' : '' }}>Hi! I Am</span>
          <span>Brenton</span>
          <span>Frontend Developver with high level of experience in
            web designing and development, producing the Quality work
          </span>
        </div>
        <div className="button i-button">Hire me</div>
        <div className="i-icons">
          <a href="https://github.com/Brenton-X">
            <img src={Github} alt="" />
          </a>
          <a href="">
            <img src={LinkedIn} alt="" />
          </a>
          <a href="">
            <img src={Instagram} alt="" />
          </a>
        </div>
      </div>


      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
        <img src={glassesimoji} alt="" />
        <div style={{ top: '-4%', left: '70%' }}>
          <FloatingDiv image={Crown} txt1='Web' txt2='Developer' />
        </div>
        <div style={{ top: '19rem', left: '10rem' }}>
          <FloatingDiv image={thumbup} txt1='Best Design' txt2='Award' />
        </div>
        {/* blur div */}
        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div className="blur"
          style={{ background: '#C1F5FF', top: '17rem', width: '21rem', height: '11rem', left: '3rem' }}></div>
      </div>

    </div >
  )
}

export default Intro