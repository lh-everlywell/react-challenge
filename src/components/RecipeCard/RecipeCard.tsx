import {RecipeProps} from "../../interfaces";
import React from "react";
import './RecipeCard.scss'
import { Link } from "react-router-dom";
const RecipeCard: React.FC<RecipeProps> = ({ recipe, index }: RecipeProps ) => {
    return (
        <div className={`recipeCard${index + 1}`}>
        <Link to={`${recipe?.id}`}>

        <h2>{recipe?.name}</h2>
        <img src={recipe?.thumbnail} alt={recipe?.name}/>

        </Link>
            </div>
    )
}


export default RecipeCard
