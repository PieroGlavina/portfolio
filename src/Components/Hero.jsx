import React, {useRef} from 'react'

const Hero = () => {

    const videoRef = useRef(null);

    const handleMouseEnter = () => {
        if (videoRef.current) videoRef.current.playbackRate = 2;
    };

    const handleMouseLeave = () => {
        if (videoRef.current) videoRef.current.playbackRate = 1;
    };


    return (
        <section className="h-screen w-full ">
            <img src="/images/circuitSx.png" alt="Circuit" className="object-contain absolute -bottom-1 left-0 md:w-fit w-1/3"/>
            <img src="/images/circuitDx.png" alt="Circuit" className="object-contain absolute -top-2 right-0 md:w-fit w-1/4"/>

            <div className="w-full h-full  flex justify-center items-center">
                <div className="absolute  w-2/3 mr-80 mb-50">
                    <h1 className="text-9xl font-electrolize">Piero Glavina</h1>
                    <h3 className="text-5xl font-electrolize">Web & 3D Experience Creator</h3>

                    <p className="text-2xl font-electrolize mt-20 w-2/3">
                        I design digital experiences blending front-end development, 3D graphics, and creative storytelling — where aesthetics meet technology
                    </p>
                </div>

            </div>






        </section>
    )
}
export default Hero
