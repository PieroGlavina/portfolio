import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import OceanWorld from "./OceanWorld.jsx";

gsap.registerPlugin(ScrollTrigger)

const Contact = () => {

    const divRef = useRef(null)
    const sectionRef = useRef(null)

    useEffect(() => {
        const el = divRef.current

        gsap.fromTo(el, {
            borderRadius: 16,
            scale: 0.1,


        },{
            scale: 1,
            borderRadius: 0,
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top center',
                end: '+=1000',
                scrub: true,
            },
            ease: 'power2.inOut',
        })
    }, [])


    return (
        <section ref={sectionRef} className="h-[200vh] relative flex justify-center items-center ">
            <div ref={divRef} className="w-full h-full">
            </div>
        </section>
    )
}
export default Contact
