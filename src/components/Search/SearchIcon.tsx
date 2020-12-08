import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";
import React from "react";

const SearchIcon = () => (
    <div className={"search"}>
    <Link to={"/search"}>

            <FontAwesomeIcon icon="search" color="white"/>

    </Link>
    </div>
)

export default SearchIcon
