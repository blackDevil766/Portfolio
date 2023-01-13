import React from "react";
import Typed from "react-typed";




function WelcomeToMyWorld() {
    
   
    const textLines = [
        `Web Developer.`,
        `Coder.`,
        `Creative.`,
    ];

    return (
        <div className="welcomeToMyWorldSection-continer">


            <div className="space welcomeToMyWorldSection-right">
                {/* <span className="introWord">Welcome To My World</span> */}
                {/* <div className="frontImg"> */}
                <img data-aos-anchor-placement="center-center" className="personal-img" src="img\avatar.png" alt="" />
                {/* </div> */}
            </div>


            <div className="welcomeToMyWorldSection-left">
                <div className="left-contanir">
                    <div className="my-front-data">
                        <h1  className="typo">Hi, I'm <span className="subName">Ahmed Allam</span></h1>
                        <h1 className="typoChanger">a <span className="auto-type">  <Typed strings={textLines} typeSpeed={60} backSpeed={60} startDelay={500} backDelay={500} loop={true} /> </span></h1>
                        <p className="description">I'm FullStack web developmet, using a Multiple language, Creative in some points and can do anything using code in web, ambition to learn alot of new skills to improve my self.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default WelcomeToMyWorld;