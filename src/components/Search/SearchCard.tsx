import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React, {useState} from "react";
import Search from "./Search";

const SearchCard: React.FC = () => {
    const [showSearch, setShowSearch] = useState(false);
    const handleSearchClick = (e: React.MouseEvent<HTMLDivElement | MouseEvent>) => {
        setShowSearch(!showSearch);
    }
    if (!showSearch) {
        return (
            <div className={"searchCard"} onClick={handleSearchClick}>
                <FontAwesomeIcon className={'searchIcon'} icon="search" color="white"/>
            </div>
        )
    } else {
        return (
            <Search/>
        )
    }
}

export default SearchCard
