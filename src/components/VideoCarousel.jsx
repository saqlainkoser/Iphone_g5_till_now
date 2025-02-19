import React, { useEffect, useRef, useState } from 'react'
import { hightlightsSlides } from '../constants'

function VideoCarousel() {

   //refrences 
    const videoRef = useRef([]);
    const videoSpanRef = useRef([]);
    const videoDivRef = useRef([]);
 
    //video indicator flags
    const [video, setVideo] = useState({
        //flags
        isEnd : false,
        startPlay : false,
        videoId:0,
        isLastVideo:false,
        isPlaying: false
    })

    const [loadedData , setLoadedData ]=useState([]);
    //destructuring
   const {isEnd,startPlay,videoId,isLastVideo,isPlaying} = video 
     
   //related to animation
    useEffect(()=>{
        let currentProgress = 0;
        let span = videoSpanRef.current;

        if(span[videoId]){
            let anim = gsap.to(span[videoId],{
                onUpdate: {

                },
                onComplete:{

                }
            })
        }

    },[videoId,startPlay])

    //related to loading data
    useEffect(()=>{
        if(loadedData.length > 3){
            if(!isPlaying){
                videoRef.current[videoId].pause()
            }else{
                startPlay && videoRef.current[videoId].play()
            }

        }
    },[startPlay,videoId,isPlaying,loadedData])


    return (
        <>
        <div className='flex items-center'>
            {hightlightsSlides.map((list, i) => (
                <div key={list.id} id="slider" className='sm:pr-20 pr-10'>
                    <div className='video-carousel_container'>
                        <div className='w-full h-full flex-center rounded-3xl overflow-hidden bg-black'>
                            <video 
                            id="video" 
                            playsInline={true} 
                            ref={(el)=>(videoRef.current[i]=el)}
                            onPlay={()=>
                                setVideo((pre)=>({...pre ,isPlaying:true}))
                            }
                            preload='auto' muted>
                                <source src={list.video} />
                            </video>
                        </div>
                        <div className='absolute top-12 left-[5%] z-10'>
                            {list.textLists.map((text)=>(
                                <p key={text} className='md:text-2xl text-xl font-medium'>
                                    {text}
                                </p>
                            ))}
                        </div>

                    </div>
                </div>
            ))}

           
        </div>
        <div className='relative flex-center mt-10'>
                <div className='flex-center py-5 px-7 bg-gray-300 backdrop-blur rounded-full'>
                    {videoRef.current.map((_,i)=>{
                        <span
                        key={i}
                        className='mx-2 w-3 h-3 bg-gray-200 rounded-full relative cursor-pointer'
                        ref={(el)=>(videoDivRef.current[i]=el)}
                        ><span/></span>
                    })}
                </div>
            </div>
        </>
    )
}

export default VideoCarousel
