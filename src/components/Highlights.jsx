import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { rightImg, watchImg } from '../utils'
import VideoCarousel from './VideoCarousel'

function Highlights() {
    useGSAP(()=>{
        gsap.to('#title',{
            duration:1,
            delay:1,
            y:0,
            opacity:1
        })
        gsap.to(".link",{
            duration:1,
            delay:1,
            y:0,
            opacity:1,
            stagger:{
                each:0.2
            }
        })
    },[])

  return (
    <div>
      <section id="highlights" className='w-screen overflow-hidden h-full common-padding bg-zinc'>
        <div className='screen-max-width'>
            <div className='mb-12 w-full md:flex items-end justify-between'>
                <h1 id="title" className='section-heading' >Get the highlights</h1>
                <div className='flex flex-wrap items-end gap-7'>
                    <p className='link'>Watch the film <img className='pl-2' src={watchImg} alt="" /></p>
                    <p className='link'>Watch the event <img className='pl-2' src={rightImg} alt="" /></p>
                </div>
            </div>
            <VideoCarousel/>
        </div>
      </section>
    </div>
  )
}

export default Highlights
