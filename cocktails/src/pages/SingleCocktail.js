import React from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const SingleCocktail = () => {
  const { id } = useParams();

  const [loadingDetails, setLoadingDetails] = React.useState(true);
  const [drinkDetails, setdrinkDetails] = React.useState({});

  const getDrinkDetails = async () => {
    setLoadingDetails(true);
    try {
      const response = await fetch(`${url}${id}`);
      const {drinks} = await response.json();
      console.log(drinks);
      if (drinks) {
        console.log(drinks[0]);
        const {
          strDrink,
          strAlcoholic,
          strCategory,
          strDrinkThumb,
          strGlass,
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strInstructions,
        } = drinks[0];
        setdrinkDetails({
          name: strDrink,
          alcohol: strAlcoholic,
          category: strCategory,
          image: strDrinkThumb,
          glass: strGlass,
          ingredient1: strIngredient1,
          ingredient2: strIngredient2,
          ingredient3: strIngredient3,
          instructions:strInstructions,
        });
        setLoadingDetails(false);
      }
      else {
        setdrinkDetails({});
        setLoadingDetails(false);
      }
    }
    catch (error) {
      console.log(error);
      setLoadingDetails(false);
    }
    };
    
    React.useEffect(() => {
      getDrinkDetails();
    }, [])

  if (loadingDetails) {
    return <Loading />;
  }

  return (
    <section className="section cocktail-section">
      <h1>{drinkDetails.name}</h1>
      <div className="drink">
        <img src={drinkDetails.image} alt="" />
        <div className="drink-info">
          <p>
            <span className="drink-data">Drink name: </span>
            {drinkDetails.name}
          </p>
          <p>
            <span className="drink-data">Category: </span>
            {drinkDetails.category}
          </p>
          <p>
            <span className="drink-data">Info: </span>
            {drinkDetails.alcohol}
          </p>
          <p>
            <span className="drink-data">Glass: </span>
            {drinkDetails.glass}
          </p>
          <p>
            <span className="drink-data">Instructions: </span>
            {drinkDetails.instructions}
          </p>
          <p>
            <span className="drink-data">Ingredients: </span>
            {drinkDetails.ingredient1}, {drinkDetails.ingredient2},{" "}
            {drinkDetails.ingredient3}
          </p>
        </div>
      </div>
      <Link className="btn-primary" to="/">Back Home</Link>
    </section>
  );
}

export default SingleCocktail
