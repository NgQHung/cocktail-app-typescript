import { Cocktail } from "./cocktails";

export interface Http {
    data: Cocktail[];
    clickedCocktail: Cocktail[];
    navigationClicked: boolean;
    searchClicked: boolean;
    typeSearchClicked: boolean;
}
