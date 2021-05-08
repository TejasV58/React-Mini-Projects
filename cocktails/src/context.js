import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()

const AppProvider = ({ children }) => {

  const [cocktails, setCocktails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('a');

  const getDrinks = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}${searchTerm}`);
      const products = await response.json();
      if (products.drinks) {
        const newCocktails = products.drinks.map((item) => {
          const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } = item;
          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass,
          };
        })
        setCocktails(newCocktails);
      }
      else {
        setCocktails([]);
      }
      setLoading(false);
    }catch(error){
      console.log(error);
      setLoading(false);
    }
  },[searchTerm]);

  useEffect(() => {
    getDrinks();
  }, [searchTerm,getDrinks]);

  return <AppContext.Provider value={{cocktails, loading, setSearchTerm}}>{children}</AppContext.Provider>
}

// make sure use

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }