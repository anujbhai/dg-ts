import useCart from "../hooks/useCart"

type PropsType = {
  viewCart: boolean
}

const Footer = ({ viewCart }: PropsType) => {
  const { total_items, total_price } = useCart()

  const year: number = new Date().getFullYear()

  const pageContent = viewCart
    ? <p>Shopping Cart &copy; {year}</p>
    : (
        <>
          <p>Total Items: {total_items}</p>
          <p>Total Price: {total_price}</p>
          <p>Shopping Cart &copy; {year}</p>
        </>
      )

  const content = (
    <footer className="footer">
      {pageContent}
    </footer>
  )

  return content
}

export default Footer

