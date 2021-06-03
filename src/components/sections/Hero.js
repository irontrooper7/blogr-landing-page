import React from 'react'
import ImgBackground from '../../img/bg-pattern-intro.svg'

const Hero = () => {
    return (
        <>
            <section className="hero" style={{background: `#FF515D url(${ImgBackground}) center`}}>
                <div className="container">
                    <div className="cont-info">
                        <h1><strong>A modern publishing platform</strong></h1>
                        <p>Grow your audience and build your online brand</p>
                        <div className="botones">
                            <button className="boton secundario">Start for Free</button>
                            <button className="boton">Learn More</button>
                        </div>
                    </div>
                </div>
                
            </section>
        </>
    )
}

export default Hero