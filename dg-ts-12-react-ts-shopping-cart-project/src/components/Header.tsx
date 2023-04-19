import React from 'react'
import useCart from '../hooks/useCart'
import Nav from './Nav'

type PropsType = {
  viewCart: boolean,
  setViewCart: React.Dispatch<React.SetStateAction<boolean>>,
}

const Header = ({ viewCart, setViewCart }: PropsType) => {
  const { total_items, total_price } = useCart()

  const content = (
    <header className="header">
      <div className="header__title-bar">
        <h1>Acme Co.</h1>

        <div className="header__price-box">
          <p>Total Items: { total_items }</p>
          <p>Total Price: { total_price }</p>
        </div>
      </div>

      <Nav
        viewCart={viewCart}
        setViewCart={setViewCart}
      />
    </header>
  )

  return content
}

export default Header

