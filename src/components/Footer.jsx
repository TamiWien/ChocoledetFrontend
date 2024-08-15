import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/images/logo.svg'

const Footer = () => {
  return (
    <div >
        <div id='Footer'>
          <NavLink className='navFooter' to="/"><img className='logoImgFooter' src={logo} alt='logoImg'></img></NavLink>
          <div id='navMenuFooter'>
              <NavLink className='navFooter' to="/">Homepage</NavLink>
              <NavLink className='navFooter' to="/">Our Story</NavLink>
              <NavLink className='navFooter' to="/">Contact Us</NavLink>
          </div>
          <div className='navMenuFooter'>
                <div id='navMenuFooterIn'>
                  <b>Adress</b>
                  <p>299-213 Waverly Ave, Syracuse, NY 13210, US</p>
                  <iframe id='map' src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2700.722049481831!2d-76.1310342112832!3d43.03988217745644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1siw!2sil!4v1714606781985!5m2!1siw!2sil"></iframe>
                </div>
          </div>
          <div className='navMenuFooter'>
              <div className='socialMedia'>
              </div>
                <div id='join'>JOIN US!</div>
                <div id='comp'>
                  <label class="abel">Email *</label>
                  <input name="email" type="email" id="email" />
                  <button class="email-button">Send</button>
                </div>
          </div>
      </div>
      <div id='by'>Tamar Wienet & Hadassa Sabag</div>
    </div>
  )
}

export default Footer