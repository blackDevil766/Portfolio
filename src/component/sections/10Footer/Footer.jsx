import React from "react";

function Footer() {
    return (
        <>
            <div className="footer-container">
                <hr />
                <div className="footer">
                    <div className="footer-logo">
                    <h3 data-aos="fade-down" data-aos-duration="2000" className="TitleName"><img className="sleep-footer-img" src="img/sleep2.svg" alt="" /></h3><img  data-aos="fade-down" data-aos-duration="1500" className="personal-footer-img" src="img\avater1.png"  alt="" />
                    </div>
                    <p className="mt--30">© 2022. All rights reserved by <span  data-aos="fade-down" data-aos-duration="2000">Ahmed Allam.</span></p>
                </div>
            </div>
        </>
    )
}

export default Footer;