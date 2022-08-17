import { useState, useEffect } from 'react'
import Modal from '../Modal/Modal'
import Pagination from '../Pagination/Pagination'
import getCocktails from '../FetchData'
import CocktailCard from '../CocktailCard/CocktailCard'

const CocktailList = ({ name }) => {

const [cocktails, setCocktails] = useState([])
const [isOpen, setIsOpen] = useState(false)
const [cocktailData, setCocktailData] = useState([])

const [currentPage, setCurrentPage] = useState(1);
const [recordsPerPage] = useState(6);

const indexOfLastRecord = currentPage * recordsPerPage;
const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

const nPages = Math.ceil(cocktails.length / recordsPerPage)

useEffect(() => {
  getCocktails(name, setCocktails, setCurrentPage)
}, [name])

if(cocktails === null) {
  return (
    <h2 className='cocktail-search-error'>No cocktail recepies found for that search parameter ...</h2>
  )
}
else {
  return (
    <div className="cocktails-wrapper">
        <h1>Cocktail list</h1>
        <div className="cocktails-catalog">
        {
          cocktails.slice(indexOfFirstRecord, indexOfLastRecord)
          .map((cocktail) => (
            <CocktailCard
              key={cocktail.idDrink}
              cocktail={cocktail}
              setIsOpen={setIsOpen}
              CocktailData={setCocktailData}
              />
          ))
        }
        </div>
        <Modal
          chosenCocktail={cocktailData}
          open={isOpen}
          onClose={() => setIsOpen(false)}
          />
        <Pagination
          nPages={nPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          />
    </div>
    )
  }
}

export default CocktailList