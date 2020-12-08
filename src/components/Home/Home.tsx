import React, {Suspense, useEffect, useState} from 'react';
import './Home.scss'
import {getRandomRecipe} from "../../services/recipeService";
import {Recipe} from "../../interfaces";
import RecipeCard from "../RecipeCard/RecipeCard";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import SearchIcon from "../Search/SearchIcon";
function Home() {
    const [recipes, setRecipes] = useState<Recipe[] | undefined>([]);
    const getRecipes = async (numberOfRecipes: number): Promise<void> => {
        const recipeContainer = []
        for (let i=0; i < numberOfRecipes; i++) {
            const recipe = await getRandomRecipe()
            if (recipe) {
                recipeContainer.push(recipe);
            }
        }
        console.log(recipeContainer)
        setRecipes(recipeContainer)
    }
    useEffect( () => {
        getRecipes(5);
    }, [])
    return (
        <div className={"container"}>
            <div className="home-background">
                <div className={'logo'} />
            </div>
            <div className={"recipeHeader"}>
                <p>Recipes of the day</p>
            </div>
            <Suspense fallback={<div>Loading...</div>}>
                <div className={"recipes"}>
                    {recipes?.map((recipe: Recipe, index: number) => {
                        return <RecipeCard key={`Recipe${index}`} recipe={recipe} index={index}/>
                    })}
                    <div className="refresh" >
                    <FontAwesomeIcon icon={"redo"} onClick={() => getRecipes(5)}/>
                    </div>
                </div>

            </Suspense>
            <SearchIcon/>
        </div>
    )
}

export default Home;
