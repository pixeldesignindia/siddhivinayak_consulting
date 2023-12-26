import React, { useRef, useEffect } from 'react'
import './Word.css'
import { useScroll,motion, useTransform } from 'framer-motion'

const Para = () => {
    const element = useRef(null)
    const { scrollYProgress } = useScroll({

        target: element,
        offset: ['start 0.9', 'start start'],
    })

    useEffect(() => {
        scrollYProgress.on("change",(e) => console.log(e))
    }, [])
const txt= 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro voluptates veritatis quaerat optio dignissimos facere consequuntur error nemo sunt eligendi!'
const word = txt.split(" ")
    return (
        <div className='container'>
            <p className='text f-w' ref={element} style={{opacity:scrollYProgress}}>
                {word.map((w,i)=>{
                const start =i/word.length
                const end =start+(1/word.length)
                console.log(start, end)
                return (
                    <Word key={i} className='word' range={[start,end]} progress={scrollYProgress}>{w}</Word>
                )})}
            </p>
        </div>
    )
}

export default Para


const Word =({children, range ,progress})=>{
    const opacity = useTransform(progress, range , [0,1])
    return(
        <span className='parentSpan'>
            <span className='spanShadow'>{children}</span>
        <motion.span style={{opacity:opacity}}  className='word'>{children}</motion.span>
        </span>
    )
}