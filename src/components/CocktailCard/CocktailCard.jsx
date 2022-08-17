import React from 'react'

const CocktailCard = ({ cocktail, setIsOpen, CocktailData }) => {
  return (
    <div key={cocktail.idDrink} className="cocktail-card">
        <div className="cocktail-card__img">
            <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
        </div>
        <div className="cocktail-card__data">
            <span className="cocktail-alkoholic"><i>{cocktail.strAlcoholic}</i></span>
            <h2 className="cocktail-name">{cocktail.strDrink}</h2>
            <p className="cocktail-footer__category">{cocktail.strCategory}</p>
        </div>
        <button className="cocktail-footer__btn" onClick={() => {
        setIsOpen(true);
        CocktailData(cocktail)}}>
            Recipe
        </button>
    </div>
  )
}

export default CocktailCard