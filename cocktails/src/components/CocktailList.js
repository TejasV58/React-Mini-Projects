import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'

const CocktailList = () => {

  const { cocktails, loading } = useGlobalContext();
  if (loading) {
    return <Loading />;
  }
  if (cocktails.length < 1) {
    return <section>
      <h2 className="section-title">Drink not found</h2>
    </section>;
  }
  return (
    <section className="section">
        <div>
          <h2 className="section-title">Cocktails</h2>
          <div className="cocktails-center">
            {cocktails.map((cocktail) => {
              return <Cocktail {...cocktail} key={cocktail.id}/>;
            })}
          </div>
        </div>
    </section>
  );
}

export default CocktailList
