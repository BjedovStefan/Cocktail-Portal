import React from 'react'
import './style.css'

export default function Modal({ open, onClose, chosenCocktail }) {
  if(!open) return null

  let cocktailIngridients = []
  let cocktailMeasurements = []
  for (let key in chosenCocktail) {
    if (chosenCocktail[key] !== null && key.includes('strIngredient'))
       cocktailIngridients.push(chosenCocktail[key])

    if(chosenCocktail[key] !== null && key.includes('strMeasure'))
      cocktailMeasurements.push(chosenCocktail[key])
  }

  // Merging two arrays with map function
  const zip = (a1, a2) => a1.map((x, i) => [x, " (" , a2[i], ")"]);

  return (
    <>
      <div className="modal-overlay"  />
      <div className="cocktail-modal">
          <button className='cocktail-modal__close' onClick={onClose}>X</button>
        <div className="cocktail-instructions-wrapper">
          <h2 className="cockatail-modal__title">How to make {chosenCocktail.strDrink}</h2>
          <div className="cocktail-instructions">
            <div className="cocktail-instructions__ingridients">
              <h3>Ingridients :</h3>
              <ul className='cocktail-instructions__ingridients-list'>
                {
                  zip(cocktailIngridients, cocktailMeasurements)
                  .map(v =>
                    <li key={v}>{v}</li>
                  )
                }
              </ul>
            </div>
            <div className="cocktail-instructions__description">
            <h3>Instructions :</h3>
              <p className='cocktail-instructions__process'>
                {chosenCocktail.strInstructions}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
