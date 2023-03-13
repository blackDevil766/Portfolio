import React, { useState } from "react";
import Item from "./Item";
import Tilt from 'react-parallax-tilt';


function NavBar(props) {

    const [onscrolls, setOnScroll] = useState()

    window.addEventListener("scroll", () => {
        if (window.scrollY >= 150) {
            setOnScroll("nav")
        } else{
            setOnScroll("nav2")
        }
    
    })

    
    return (
        <nav  id={onscrolls} className ="navbar navbar-expand-lg navbar-light ">
            <div className ="container-fluid ">

                <a className ="navbar-brand navLogo" href="#">
                    <h3 data-aos="fade-down" data-aos-duration="2000" className="TitleName">
                        {/* <img src="img/sleep2.svg" alt="" /> */}
                    </h3>

                <Tilt >
                    <svg width="50pt" height="50pt" version="1.1" viewBox="0 0 700 700" xmlns="http://www.w3.org/2000/svg">
                         <path fill="transparent" class="path" stroke="#c4cfde" stroke-width="50"
                            d="m570.5 197.75v-113.75c0-14-10.5-24.5-24.5-24.5h-113.75c-21 0-42 7-59.5 17.5-8.75 5.25-15.75 12.25-22.75 21-19.25-22.75-49-38.5-82.25-38.5h-113.75c-14 0-24.5 10.5-24.5 24.5v113.75c0 33.25 15.75 61.25 38.5 82.25-22.75 19.25-38.5 49-38.5 82.25v113.75c0 14 10.5 24.5 24.5 24.5h113.75c14 0 24.5-10.5 24.5-24.5s-10.5-24.5-24.5-24.5h-89.25v-89.25c0-31.5 24.5-56 56-56h89.25v89.25c0 59.5 47.25 106.75 106.75 106.75h113.75c14 0 24.5-10.5 24.5-24.5v-113.75c0-33.25-15.75-61.25-38.5-82.25 26.25-21 40.25-50.75 40.25-84zm-334.25 57.75c-31.5 0-56-24.5-56-56v-91h89.25c31.5 0 56 24.5 56 56v89.25h-89.25zm285.25 106.75v89.25h-89.25c-31.5 0-56-24.5-56-56v-89.25h89.25c29.75-1.75 56 24.5 56 56zm-147-106.75v-89.25c0-19.25 8.75-36.75 24.5-47.25 8.75-7 21-10.5 31.5-10.5h89.25v89.25c0 31.5-24.5 56-56 56h-89.25z" />
                    </svg>
                </Tilt>
                    {/* <img className="LogoIcon" src="img\avater1.png" alt="" /> */}
                    
                </a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className ="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul id="changeColor" className ="navbar-nav me-auto mb-2 mb-lg-0">

                        <li className="nav-item">
                            <a id="homeItem" className="nav-link active" aria-current="page" href="#">HOME</a>
                        </li>

                        {/* <Item time ="1500" text="ABOUT" linkIt = "#AboutMe"  /> */}
                        <Item text="RESUME" linkIt = "#resume"    /> 
                        <Item text="PORTFOLIO" linkIt = "#portfolio" /> 
                        <Item text="CONTACT" linkIt = "#contact"   /> 
                        {/* <Item text="CLIENTS" linkIt = "#clients"   /> */}
                        {/* <Item text="PRICING" linkIt = "#pricing"   /> */}
                        {/* <Item text="BLOG" linkIt = "#blog"      />  */}
                    


                    </ul>
                    <div className="hireMe-part">
                        <a href="img\Ahmed'sResume.pdf" target="_blank" download>
                            <button  id="NavSignUpBtn" className="btn" type="submit">
                                    Resume
                            </button>
                        </a>

                        <a href="#hireMe">
                            <button id="NavSignUpBtn" className="btn" type="submit">Hire me</button><div className="hvr-icon"></div>
                        </a> 
                    </div>


                </div>
            </div>

        </nav>

       


)
}


export default NavBar;










































// var lastScrollY = window.scrollY;

// window.addEventListener("scroll", () => {

//     var nav = document.querySelector("#nav");

//     if (lastScrollY < window.scrollY ) {
//         nav.classList.remove("native2");
//         nav.classList.add("native");
        
//         if (window.scrollY == 777.7777709960938) {
//             // console.log(its);
//         }


//     } else {
//         nav.classList.remove("native2");
//         nav.classList.add("native2");
//     }

//     lastScrollY = window.scrollY;
// })


































// scond try //






// if (lastScroll < window.scrollY) {
    
//     var nav = document.querySelector("#nav");

//     nav.classList.add("native");
   
//     if (window.scrollY == 700 && 701 && 702 && 703 && 704 && 705 && 706) {
//         nav.classList.remove("native");
//         nav.classList.add("native2");
//     }

// }

//     lastScrollY = window.scrollY;
