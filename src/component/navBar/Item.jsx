import React from "react";

function Item(props) {
    return (
        <li data-aos="fade-down" data-aos-duration={props.time} className="nav-item">
            <a id="othersNavItem" className="nav-link" href={props.linkIt}>{props.text}</a>
        </li>
    )
}


export default Item;