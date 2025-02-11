import gsap from 'gsap'
import {useGSAP} from '@gsap/react'

import React, { useEffect, useState } from 'react'
import { heroVideo, smallHeroVideo } from '../utils'

function Hero() {

  const [videoSrc,setVideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo);
 
  const handleVideoSrcSet = () => {
    if(window.innerWidth <760){
      setVideoSrc(smallHeroVideo)
    }
    else{
      setVideoSrc(heroVideo)
    }
  }

  useEffect(()=>{
    window.addEventListener('resize' ,handleVideoSrcSet);
    return () => {
      window.removeEventListener('resize', handleVideoSrcSet);
    }
  },[])


  useGSAP(()=>{
    gsap.to("#hero",{
      duration: 1,
      opacity:1,
      delay:1.5
    })
  },[])

  return (
    <div>
      <section className='w-full nav-height bg-black relative'>
        <div className='h-5/6 w-full flex-center flex-col'>
            <p id="hero" className='hero-title'>iPhone 15 Pro</p>
            <div className='md:w-10/12 w-9/12'>
              <video className='pointer-events-none' autoPlay loop muted playsInline={true} key={videoSrc} >
                <source src={videoSrc}/>
              </video>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Hero
