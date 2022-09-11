export interface Cocktail {
    idDrink: number;
    strDrink: string;
    strDrinkThumb: string;
    idIngredient: number;
    strIngredient: string;
    strDescription: string;
    strType: string;
    strAlcohol: string;
}

export interface ClickedCocktail {
    idDrink?: number;
    strDrink?: string;
    strAlcoholic?: string;
    strCategory?: string;
    strDrinkThumb?: string;
    strGlass?: string;
    strIngredient1?: string;
    strIngredient2?: string;
    strIngredient3?: string;
    strIngredient4?: string;
    strIngredient5?: string;
    strIngredient6?: string;
    strIngredient7?: string;
    strIngredient8?: string;
    strIngredient9?: string;
    strMeasure1?: string;
    strMeasure2?: string;
    strMeasure3?: string;
    strMeasure4?: string;
    strMeasure5?: string;
    strMeasure6?: string;
    strMeasure7?: string;
    strMeasure8?: string;
    strMeasure9?: string;
    strInstructions?: string;
}

export interface signupModel {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}
