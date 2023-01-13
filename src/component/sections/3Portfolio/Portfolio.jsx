import React, { useState } from "react";
import CardCreator from "./portfolioCreator";
import { portfolioImgs } from "./portfolioCreator";

function Portfolio() {

    const [actionTaken, setActionTaken] = useState(() => {
        return {
            page1: "hideTheFlyDiv1",
            page2: "hideTheFlyDiv2",
            page3: "hideTheFlyDiv3",
        }
    })

    function Showw1() {
        setActionTaken(() => {
            return {
                page1: "flyingDiv",
                page2: "hideTheFlyDiv2",
                page3: "hideTheFlyDiv3",
            }
        })
    }

    function Showw2() {
        setActionTaken(() => {
            return {
                page1: "hideTheFlyDiv1",
                page2: "flyingDiv",
                page3: "hideTheFlyDiv3",
            }
        })
    }

    function Showw3() {
        setActionTaken(() => {
            return {
                page1: "hideTheFlyDiv1",
                page2: "hideTheFlyDiv2",
                page3: "flyingDiv",
            }
        })
    }

    function hideTheAction() {
        setActionTaken(() => {
            return {
                page1: "hideTheFlyDiv1",
                page2: "hideTheFlyDiv2",
                page3: "hideTheFlyDiv3",
            }
        }
        )
    }


    // const [ShowDetail, setShowDetail] = useState(() =>{
    //     return{
    //         id1:"detali1",
    //         id2:"detali2",
    //         id3:"detali3",
    //     }
    // })


    // function PageDetails(props) {
    //     return (
    //         <div className={props.class} >
    //             <div className="portfolioShower">

    //                 <div className="showImg">
    //                     <img className="PortfoiloImg" src={props.img} alt="" />
    //                 </div>

    //                 <div className="showDescribtions">

    //                     <div onClick={hideTheAction} className="closeDiv">
    //                         <img className="closeIco" src="\img\closeIcon.svg" alt="" />
    //                     </div>

    //                     <div className="contactShower">
    //                         <p className="headTitleOfFlyingDescribtion">Featured - Design</p>
    //                         <h3 className="titleOfFlyingDescribtion">App Design Development.</h3>
    //                         <p className="md-typo-of-flying-describtion">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate distinctio assumenda explicabo veniam temporibus eligendi.</p>
    //                         <p className="md-typo-of-flying-describtion2">Consectetur adipisicing elit. Cupiditate distinctio assumenda. dolorum alias suscipit rerum maiores aliquam earum odit, nihil culpa quas iusto hic minus!</p>
    //                     </div>
    //                     <div className="buttons">
    //                         <button i d="signUpBtn" className="btn likeBtn" type="submit">Like this <img src="\img\like.svg" alt="" /></button>
    //                         <button id="signUpBtn" className="btn viewBtn" type="submit"><a href={props.href}>view project <img src="\img\right-arrow.svg" alt="" /> </a></button>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     )
    // }


    return (
        <div id="portfolio" className="Portfolio-Container1">
            <hr />

            {/* <PageDetails href = "http://localhost:3002/" class = {actionTaken.page1} img="img/beete.png" />
            <PageDetails href = "http://localhost:3003/" class = {actionTaken.page2} img="img/inbio.png" />
            <PageDetails href = "http://localhost:3001/" class = {actionTaken.page3} img="img/smart.png" /> */}


            <div className={actionTaken.page1} >
                <div className="portfolioShower">

                    <div className="showImg">
                        <img className="PortfoiloImg" src="img/beete.png" alt="" />
                    </div>

                    <div className="showDescribtions">

                        <div onClick={hideTheAction} className="closeDiv">
                            <img className="closeIco" src="\img\closeIcon.svg" alt="" />
                        </div>

                        <div className="contactShower">
                            <p className="headTitleOfFlyingDescribtion">Featured - Design</p>
                            <h3 className="titleOfFlyingDescribtion">Ecommerce App.</h3>
                            <p className="md-typo-of-flying-describtion">sell products, its show product that owner add it and its have a payment method so that we can sell online</p>
                            <p className="md-typo-of-flying-describtion2">I made it using HTML - CSS - JSX - BOOTSTRAP - ES6 - REACT JS - PYTHON - DEJANGO</p>
                        </div>
                        <div className="buttons">
                            <button id="signUpBtn" className="btn likeBtn" type="submit">Like this <img src="\img\like.svg" alt="" /></button>
                            <button id="signUpBtn" className="btn viewBtn" type="submit"><a href="http://localhost:3002/">view project <img src="\img\right-arrow.svg" alt="" /> </a></button>
                        </div>
                    </div>
                </div>
            </div>


            <div className={actionTaken.page2} >
                <div className="portfolioShower">

                    <div className="showImg">
                        <img className="PortfoiloImg" src="img/inbio.png" alt="" />
                    </div>

                    <div className="showDescribtions">

                        <div onClick={hideTheAction} className="closeDiv">
                            <img className="closeIco" src="\img\closeIcon.svg" alt="" />
                        </div>

                        <div className="contactShower">
                            <p className="headTitleOfFlyingDescribtion">Featured - Design</p>
                            <h3 className="titleOfFlyingDescribtion">portfoilo Design</h3>
                            <p className="md-typo-of-flying-describtion">portfoilo that show your skills and show it to the world, i made it to prove to my self that i can make anything and to prove to you what am cabable for.</p>
                            <p className="md-typo-of-flying-describtion2"> I made it using HTML - CSS - JSX - BOOTSTRAP - ES6 - REACT JS</p>
                        </div>
                        <div className="buttons">
                            <button id="signUpBtn" className="btn likeBtn" type="submit">Like this <img src="\img\like.svg" alt="" /></button>
                            <button id="signUpBtn" className="btn viewBtn" type="submit"><a href="http://localhost:3003/">view project <img src="\img\right-arrow.svg" alt="" /> </a></button>
                        </div>
                    </div>
                </div>
            </div>


            <div className={actionTaken.page3} >
                <div className="portfolioShower">

                    <div className="showImg">
                        <img className="PortfoiloImg" src="img/smart.png" alt="" />
                    </div>

                    <div className="showDescribtions">

                        <div onClick={hideTheAction} className="closeDiv">
                            <img className="closeIco" src="\img\closeIcon.svg" alt="" />
                        </div>

                        <div className="contactShower">
                            <p className="headTitleOfFlyingDescribtion">Featured - Design</p>
                            <h3 className="titleOfFlyingDescribtion">Agency Design.</h3>
                            <p className="md-typo-of-flying-describtion">It a website to show some people who can make a UI/UX, and It's my first project and i just saw it somewhere and i just traditon it, </p>
                            <p className="md-typo-of-flying-describtion2">I made it using HTML - CSS - JSX - BOOTSTRAP - ES6 - REACT JS</p>
                        </div>
                        <div className="buttons">
                            <button id="signUpBtn" className="btn likeBtn" type="submit">Like this <img src="\img\like.svg" alt="" /></button>
                            <button id="signUpBtn" className="btn viewBtn" type="submit"><a href="http://localhost:3001/">view project <img src="\img\right-arrow.svg" alt="" /> </a></button>
                        </div>
                    </div>
                </div>
            </div>




            <div className="header-portoflio">
                <p data-aos="fade-down" data-aos-duration="1500" className="subtitle2">VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</p>
                {/* <h1 className="title2">My Portfolio</h1> */}
                <h1 data-aos="fade-down" data-aos-duration="1000" className="title2">My Portfolio</h1>
            </div>

            <div className="portfolio-boxes">

                <CardCreator
                    time="1500"
                    id="id1"
                    show={Showw1}
                    img="img\beete.png"
                    listTitle="Ecommerce"
                    numbers="600"
                    title="Its provide a products"
                />

                <CardCreator
                    time="2000"
                    id="id2"
                    show={Showw2}
                    img="img\inbio.png"
                    listTitle="application"
                    numbers="750"
                    title="portfoilo landing Page"
                />

                <CardCreator
                    time="2500"
                    id="id3"
                    show={Showw3}
                    img="img\smart.png"
                    listTitle="photoshop"
                    numbers="630"
                    title="Discover Agency developers"
                />


            </div>

            {/* <div className="portfolio-boxes">

                <CardCreator
                    show={Showw}
                    img={portfolioImgs.figma}
                    listTitle="figma"
                    numbers="360"
                    title="Mobile app landing design & app maintain"
                />

                <CardCreator
                    show={Showw}
                    img={portfolioImgs.webDesign}
                    listTitle="web design"
                    numbers="280"
                    title="Design for tecnology & services"
                />

                <CardCreator
                    show={Showw}
                    img={portfolioImgs.webDesign2}
                    listTitle="web design"
                    numbers="690"
                    title="App for tecnology & services"
                />
            </div> */}

        </div>
    )
}

export default Portfolio;
































































// import React, { useState } from "react";
// import PortfolioCreator from "./portfolioCreator";
// import { portfolioImgs } from "./portfolioCreator";

// function Portfolio() {


//     const [showIt, setShowIT] = useState("")

//     // const dataa = ;

//     function Showw() {
//         setShowIT(
//             <div className="flyingDiv">
//                 <div className="portfolioShower">

//                     <div className="showImg">
//                         <img className="rainboitImg" src="https://rainbowit.net/html/inbio/assets/images/portfolio/portfolio-04.jpg" alt="" />
//                     </div>

//                     <div className="showDescribtions">

//                         <div onClick={hideIt} className="closeDiv">
//                             <img className="closeIco" src="\img\closeIcon.svg" alt="" />
//                         </div>

//                         <div className="contactShower">
//                             <p className="headTitleOfFlyingDescribtion">Featured - Design</p>
//                             <h3 className="titleOfFlyingDescribtion">App Design Development.</h3>
//                             <p className="md-typo-of-flying-describtion">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate distinctio assumenda explicabo veniam temporibus eligendi.</p>
//                             <p className="md-typo-of-flying-describtion2">Consectetur adipisicing elit. Cupiditate distinctio assumenda. dolorum alias suscipit rerum maiores aliquam earum odit, nihil culpa quas iusto hic minus!</p>
//                         </div>
//                         <div className="buttons">
//                             <button id="signUpBtn" className="btn likeBtn" type="submit">Like this <img src="\img\like.svg" alt="" /></button>
//                             <button id="signUpBtn" className="btn viewBtn" type="submit">view project <img src="\img\right-arrow.svg" alt="" /></button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         )
//     }


//     function hideIt() {
//         setShowIT("")
//     }


//     return (
//         <div className="Portfolio-Container1">
//             <hr />

//             {showIt}


//             <div className="header-portoflio">
//                 <p className="subtitle2">VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</p>
//                 {/* <h1 className="title2">My Portfolio</h1> */}
//                 <h1 onClick={Showw} className="title2">My Portfolio</h1>
//             </div>

//             <div className="portfolio-boxes">
//                 <PortfolioCreator
//                     show={Showw}
//                     img={portfolioImgs.development}
//                     listTitle="development"
//                     numbers="600"
//                     title="The services provide for design "
//                 />

//                 <PortfolioCreator
//                     show={Showw}
//                     img={portfolioImgs.application}
//                     listTitle="application"
//                     numbers="750"
//                     title="Mobile app landing design & app maintain"
//                 />

//                 <PortfolioCreator
//                     show={Showw}
//                     img={portfolioImgs.photoShop}
//                     listTitle="photoshop"
//                     numbers="630"
//                     title="Logo design creativity &amp; Application"
//                 />


//             </div>

//             <div className="portfolio-boxes">

//                 <PortfolioCreator
//                     show={Showw}
//                     img={portfolioImgs.figma}
//                     listTitle="figma"
//                     numbers="360"
//                     title="Mobile app landing design & app maintain"
//                 />

//                 <PortfolioCreator
//                     show={Showw}
//                     img={portfolioImgs.webDesign}
//                     listTitle="web design"
//                     numbers="280"
//                     title="Design for tecnology & services"
//                 />

//                 <PortfolioCreator
//                     show={Showw}
//                     img={portfolioImgs.webDesign2}
//                     listTitle="web design"
//                     numbers="690"
//                     title="App for tecnology & services"
//                 />
//             </div>

//         </div>
//     )
// }

// export default Portfolio;