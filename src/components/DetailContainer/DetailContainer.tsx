import React, {Suspense, useEffect, useState} from 'react';
import {DetailProps, Recipe} from "../../interfaces";
import {getRecipeById} from "../../services/recipeService";
import Failure from "../Failure";
import './DetailContainer.scss';
import Nav from "../Nav/Nav";
import Details from "../Details/Details";
import SearchIcon from "../Search/SearchIcon";

const DetailContainer= ({ match }: DetailProps) => {
    const [recipe, setRecipe] = useState<Recipe | null>(null)
    const [failedToLookup, setFailedToLookup] = useState(false);
    const getRecipe = async (): Promise<void> => {
        const recipe: Recipe | null = await getRecipeById(match.params.id);
        if (!recipe) {
            setFailedToLookup(true)
            return;
        }
        setRecipe(recipe);
    }
    useEffect(() => {
        getRecipe().then(() => console.log("Recipe retrieved"));
    }, [])
    return (
        <>
            <Nav />
            <Suspense fallback={"Loading..."}>
                {failedToLookup
                    ? <Failure />
                    : <Details recipe={recipe} index={1}/>
}
            </Suspense>
        </>
    )
}
export default DetailContainer;
