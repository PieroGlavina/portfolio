import React, {useRef} from 'react'

const Hero = () => {

    return (
        <section className="h-screen w-full relative">

            <video
                className="absolute top-10 left-[45%] aspect-square w-[40%] z-0 "
                autoPlay
                muted
                playsInline
                loop
            >
                <source src="/video/output_boosted.webm" type="video/webm" />
            </video>

            <img src="/images/circuitSx.png" alt="Circuit" className="object-contain absolute -bottom-1 left-0 md:w-fit w-1/3 z-10" />
            <img src="/images/circuitDx.png" alt="Circuit" className="object-contain absolute -top-2 right-0 md:w-fit w-1/4 z-10" />

            <div className="w-full h-full flex justify-center items-center z-10 relative mt-3">
                <div className="w-2/3 mr-60 mb-45">
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
