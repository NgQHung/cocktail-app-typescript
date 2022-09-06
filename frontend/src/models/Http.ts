import { Cocktail } from "./cocktails";

interface TypeSearch {
    type: string;
}

export interface Http {
    data: Cocktail[];
    clickedCocktail: Cocktail[];
    navigationClicked: boolean;
    searchClicked: boolean;
    selectedType: string;
}
