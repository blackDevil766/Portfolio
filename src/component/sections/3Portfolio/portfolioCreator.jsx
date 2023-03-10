import React, { useState } from "react";

const portfolioImgs = ({
    development: "https://rainbowit.net/html/inbio/assets/images/portfolio/portfolio-01.jpg",
    application: "https://rainbowit.net/html/inbio/assets/images/portfolio/portfolio-02.jpg",
    photoShop: "https://rainbowit.net/html/inbio/assets/images/portfolio/portfolio-03.jpg",
    // figma: "https://rainbowit.net/html/inbio/assets/images/portfolio/portfolio-04.jpg",
    // webDesign: "https://rainbowit.net/html/inbio/assets/images/portfolio/portfolio-05.jpg",
    // webDesign2: "https://rainbowit.net/html/inbio/assets/images/portfolio/portfolio-06.jpg"
})


function CardCreator(props) {

    // const [hoverd, setHoverd] = useState("")

    // function mouseover() {
    //     setHoverd("imgHoverd")
    // }
    // function mouseout() {
    //     setHoverd("")
    // }

    // const [arrowNumber, setArrowNumber] = useState("arrowHide");

    // function mouseoverTitle() {
    //     setArrowNumber("arrowShow")
    // }

    // function mouseoutTitle() {
    //     setArrowNumber("arrowHide")
    // }



    return (
        <div data-aos="fade-up" data-aos-duration={props.time} onClick={props.show}  className="portfolio-container2">
            

            <a className="Portfo-img" >
                <img id="portfolio-img" className="imgHover" src={props.img} alt="" />
            </a>
            <div className="category-info">
                <div className="category-list">
                    <a href="">{props.listTitle}</a>
                </div>

                <div className="category-meta">
                    <img className="heartPortfolioSvg" src="\img\heart.svg" alt="" />{props.numbers}
                </div>

            </div>
            <h4 className="describtion2">
                <h4 className="h4PortfolioTitle">{props.title}</h4>
                <img id="arrowPortfolioImg" className="arrowShow" src="\img\arrow.svg" alt="" />
            </h4>
            
        </div>
    )
}

export default CardCreator;
export { portfolioImgs };