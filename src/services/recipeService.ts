import axios from "axios";
import {Ingredient, Recipe} from "../interfaces";

export const searchForRecipe = async (recipeName: string) => {
    try {
        const searchResults = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${recipeName}`);
        if (searchResults.data.meals) {
            return searchResults.data.meals.map((meal: any): Recipe => transformRecipe(meal));
        } else {
            return null;
        }
    } catch (err) {
        console.error(err);
        throw err;
    }
}

export const getRecipeById = async (id: string): Promise<Recipe | null> => {
    try {
        const recipeResponse = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        if (recipeResponse.data.meals) {
            return transformRecipe(recipeResponse.data.meals[0]);
        } else {
            return null;
        }
    } catch (err) {
        console.error(err)
        throw err;
    }
}

export const getRandomRecipe = async () => {
    try {
        const recipeResponse = await axios.get("https://www.themealdb.com/api/json/v1/1/random.php");
        if (recipeResponse.data.meals) {
            return transformRecipe(recipeResponse.data.meals[0])
        } else {
            return null;
        }
    } catch (err) {
        console.error(err);
        throw err
    }
}

const transformRecipe = (recipeResponse: any): Recipe => {
    return {
        id: recipeResponse.idMeal,
        name: recipeResponse.strMeal,
        category: recipeResponse.strCategory,
        area: recipeResponse.strArea,
        instructions: recipeResponse.strInstructions,
        thumbnail: recipeResponse.strMealThumb,
        ingredients: parseIngredientList(recipeResponse)
    }
}

const parseIngredientList = (recipeResponse: any): Ingredient[] => {
    let ingredients: Ingredient[] = [];
    for (let ingredientIndex = 1; ingredientIndex <= 20; ingredientIndex++) {
        if (!recipeResponse[`strIngredient${ingredientIndex}`]) {
            break;
        }
        ingredients.push({
            name: recipeResponse[`strIngredient${ingredientIndex}`],
            measurement: recipeResponse[`strMeasure${ingredientIndex}`]
        })
    }
    return ingredients
}
