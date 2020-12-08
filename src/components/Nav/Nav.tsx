import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, {ReactElement} from "react";
import { Link } from "react-router-dom";
import './Nav.scss'
const Nav: React.FC = (props) => {
    return <div className={"nav"}>
        <Link to={"/"}><FontAwesomeIcon icon="arrow-left" color="white"/></Link>
        {props.children}
    </div>
}

export default Nav;
