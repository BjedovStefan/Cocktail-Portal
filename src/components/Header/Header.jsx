import React from 'react'
import { DebounceInput } from 'react-debounce-input'

const Header = ({setName}) => {
  return (
    <header>
        <div className="logo">COCKTAIL PORTAL</div>
        <div className="search">

            <form className='cocktail-search'>
            <div className='magnifier'></div>
                <DebounceInput
                className='cocktail-search__input'
                placeholder='Enter you favorite cocktail...'
                minLength={1}
                debounceTimeout={500}
                onChange = {e => setName(e.target.value)}
                />
            </form>
        </div>
    </header>
  )
}

export default Header