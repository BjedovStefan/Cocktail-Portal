import axios from 'axios'

export default function getCocktails( name, cocktails, curentPage ) {
const fetchCocktails = () => {
    axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`)
    .then(( res ) => {
        cocktails(res.data.drinks)
        curentPage(1)
    })
    .catch((err) => {
        console.log(err)
    })
    }
    return fetchCocktails()
}