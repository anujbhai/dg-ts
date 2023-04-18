import React from "react"

type PropsType = {
  viewCart: boolean,
  setViewCart: React.Dispatch<React.SetStateAction<boolean>>,
}

const Header = ({ viewCart, setViewCart }: PropsType) => {
  const content = (
    <header className="header">
      <div className="header__title-bar">
        <h1>Acme Co.</h1>
      </div>
    </header>
  )

  return (
    <div>
      Header
    </div>
  )
}

export default Header

