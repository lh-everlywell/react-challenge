import React, {useState} from "react";
import './Search.scss'
import Nav from "../Nav/Nav";
import {searchForRecipe} from "../../services/recipeService";
import {Recipe} from "../../interfaces";
import { Link } from "react-router-dom";
const Search: React.FC = () => {
    const [search, setSearch] = useState("")
    const [searchResults, setSearchResults] = useState([]);
    const searchForResults = async (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
        if (e.target.value.length >= 3) {
            const results = await searchForRecipe(`${e.target.value}`);
            if (results) {
                setSearchResults(results);
            }
        }
        if (e.target.value.length <= 2 && searchResults.length > 0) {
            setSearchResults([]);
        }
    }
    return (
        <>
            <Nav>
                <span style={{color: "white", paddingLeft: "15px", paddingRight: "15px"}}>I'm craving...</span><input autoFocus={true} value={search} onChange={searchForResults}/>
            </Nav>
            {searchResults.map((searchResult: Recipe) => {
                return <Link to={`/${searchResult.id}`}><p>{searchResult.name}</p></Link>
            })}
        </>
    )
}

export default Search
