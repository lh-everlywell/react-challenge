import {RouteComponentProps} from "react-router";

interface DetailParams {
    id: string;
}

export interface DetailProps extends RouteComponentProps<DetailParams>{}

export interface Ingredient {
    name: string;
    measurement: string;
}

export interface Recipe {
    id: string,
    name: string,
    category: string,
    area: string,
    instructions: string;
    thumbnail: string;
    ingredients: Ingredient[]
}

export interface RecipeProps {
    recipe: Recipe | null;
    index: number;
}
