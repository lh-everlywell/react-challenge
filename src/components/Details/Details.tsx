import {Ingredient, RecipeProps} from "../../interfaces";
import React from "react";
import './Details.scss';

const Details: React.FC<RecipeProps> = ({recipe}: RecipeProps) => {
    const recipeLength = recipe?.ingredients ? recipe.ingredients.length : 0;
    return (
        <div className={"recipeDetail"}>
            <img id="recipePhoto" src={recipe?.thumbnail} alt={recipe?.name}/>
            <h2 id="recipeName">{recipe?.name}</h2>
            {recipeLength <= 10
                ? <ul className={"ingredientList"}>
                    {recipe?.ingredients?.map((ingredient: Ingredient, index: number) => {
                        return (
                            <li key={`Ingredient${index}`}>
                                {ingredient.measurement} {ingredient.name}
                            </li>
                        )
                    })}
                </ul>
                :
                <div className={"extendedIngredientList"}>
                    <ul className={"extendedList1"}>
                        {recipe?.ingredients?.slice(0, recipeLength / 2).map((ingredient: Ingredient, index: number) => {
                            return (
                                <li key={`Ingredient${index}`}>
                                    {ingredient.measurement} {ingredient.name}
                                </li>
                            )
                        })}
                    </ul>
                    <ul className={"extendedList2"}>
                        {recipe?.ingredients?.slice(recipeLength / 2).map((ingredient: Ingredient, index: number) => {
                            return (
                                <li key={`Ingredient${index}`}>
                                    {ingredient.measurement} {ingredient.name}
                                </li>
                            )
                        })}
                    </ul>
                </div>
            }
            <div className={"instructions"}>
                <h2 style={{alignSelf: "center"}}>Directions</h2>
                {recipe?.instructions.split('\n').map((instruction) => {
                    const trimmedInstruction = instruction.replace(/(\r\n|\n|\r)/gm, "");
                    if (trimmedInstruction) {
                        return <p>{trimmedInstruction}</p>
                    }
                    return;
                })
                }</div>

        </div>
    )
}

export default Details;
