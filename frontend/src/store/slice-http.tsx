export const getAllCocktail = async (): Promise<void> => {
    const response = await fetch("www.thecocktaildb.com/api/json/v1/1/search.php?f=a");
    const data = await response.json();
    console.log(data);
};
