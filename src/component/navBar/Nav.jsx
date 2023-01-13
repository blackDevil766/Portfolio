import React, { useState } from "react";
import Item from "./Item";



function NavBar(props) {

    function scrollToFeatures(params) {
        console.log("welcome in features");
    }

    function scrollToPortfolio(params) {
        console.log("welcome in portfolio");
    }

    function scrollToResume(params) {
        console.log("welcome in resume");
    }

    function scrollToClients(params) {
        console.log("welcome in clients");
    }

    function scrollToPricing(params) {
        console.log("welcome in pricing");
    }

    function scrollToBlog(params) {
        console.log("welcome in blog");
    }

    function scrollContact(params) {
        console.log("welcome in contact");
    }



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

                <a data-aos="fade-down" data-aos-duration="1500" className ="navbar-brand navLogo" href="#"><h3 data-aos="fade-down" data-aos-duration="2000" className="TitleName"><img src="img/sleep2.svg" alt="" /></h3> <img className="LogoIcon" src="img\avater1.png" alt="" /></a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className ="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul id="changeColor" className ="navbar-nav me-auto mb-2 mb-lg-0">

                        <li data-aos="fade-down" data-aos-duration="1000" className="nav-item">
                            <a id="homeItem" className="nav-link active" aria-current="page" href="#">HOME</a>
                        </li>

                        <Item time ="1500" text="ABOUT" linkIt = "#AboutMe"  />
                        <Item time ="2000" text="RESUME" linkIt = "#resume"    /> 
                        <Item time ="2500" text="PORTFOLIO" linkIt = "#portfolio" /> 
                        <Item time ="3000" text="CONTACT" linkIt = "#contact"   /> 
                        {/* <Item text="CLIENTS" linkIt = "#clients"   /> */}
                        {/* <Item text="PRICING" linkIt = "#pricing"   /> */}
                        {/* <Item text="BLOG" linkIt = "#blog"      />  */}
                    


                    </ul>
                    {/* <div className="loginPart"> */}
                        {/* <a className="login"> <img src="imgs\person.svg" alt="" /> Login</a> */}
                        <button  id="signUpBtn" className="btn" type="submit"><a data-aos="fade-down" data-aos-duration="1500" href="#hireMe">HIRE ME</a></button>
                    {/* </div> */}


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
