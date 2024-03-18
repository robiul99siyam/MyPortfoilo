import React from "react";
import Typewriter from "typewriter-effect";

const Hero = () => {
    return (
        <>
            <section className="heroSection">
                <div className="d-flex row gap-5 flex-wrap">
                    <div className="info col-md-5 col-sm-12">
                        <br /><br />
                        <h2 className="text-light">HELLO</h2>
                        <h1>
                            I AM ,
                            <Typewriter
                                options={{
                                    strings: ['ROBIUL ISLAM','PYTHON BACKEND DEVELOPER'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </h1>
                        <h6 className="text-light">JONIOR PYTHON DJANGO BACKEND DEVELOPER</h6>
                        <br />
                        <button className="mb-5">
                            <a
                                target="_blank"
                                className="text-decoration-none text-dark"
                                href="https://drive.google.com/file/d/1CDWDhb4ib8GjLUtRqcPHIO1D7dj4vwm-/view?usp=sharing"
                                download
                            >
                                Get Resume
                            </a>
                        </button>
                    </div>
                    <div className="col-md-5 col-sm-12">
                        <img src="/src/assets/images/Porfolo pic.png" alt="" />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;
