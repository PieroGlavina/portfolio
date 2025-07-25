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
        <section className="h-screen w-full bg-red-500">

            <video
                ref={videoRef}
                className="cursor-pointer h-[50%] w-[50%]"
                autoPlay
                muted
                playsInline
                loop
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onLoadedMetadata={() => {
                    if (videoRef.current) videoRef.current.playbackRate = 0.8;
                }}            >
                <source src="/video/output.webm" type="video/webm" />
            </video>


        </section>
    )
}
export default Hero
