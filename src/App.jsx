import { useState } from 'react'
import Header from './components/Header/Header'
import CocktailList from './components/CocktailList/CocktailList'

function App() {
  const [cocktailName, setCocktailName] = useState('')

  return (
    <div className="container">
      <Header setName = {cocktailName => setCocktailName(cocktailName)} />
      <CocktailList name={cocktailName} />
    </div>
  )
}

export default App;
