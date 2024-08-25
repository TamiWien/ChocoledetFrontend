import React, { useEffect } from 'react'
import About from '../components/homePageComponents/About'
import Contact from '../components/homePageComponents/Contact'
import FAQ from '../components/homePageComponents/FAQ'
import Gallery from '../components/homePageComponents/Gallery'
import OurBox from '../components/homePageComponents/OurBox'
import Recommend from '../components/homePageComponents/Recommend'
import homespeedlow from '../assets/video/homespeedlow.mp4'
import VideoTitle from '../components/homePageComponents/VideoTitle'
import FAQContainer from '../components/homePageComponents/FAQContainer'

const HomePage = () => {

    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
          const element = document.getElementById(hash.substring(1));
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }, []);

  return (
    <div id='homePage'>
        <div className='contentVideo'>
            <video id='video' autoPlay muted>
            <source src={homespeedlow} alt='video' title='video' type="video/mp4" />
                Your browser does not support HTML5 video. We're sorry.
            </video>
            <div className='contentText'>
                <VideoTitle/>
            </div>
        </div>
        <div id='about'><About/></div>
        <div id='ourBox'><OurBox/></div>
        <div id='recommend'><Recommend/></div>
        <div id='faq'><FAQContainer/></div>
        <div id='gallery'><Gallery/></div>
        <div id='contact'><Contact/></div>
    </div>
  )
}

export default HomePage