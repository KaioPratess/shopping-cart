import { useState, useEffect } from 'react'

function Cart({cart, closeCart, deleteProduct}) {
  const [total, setTotal] = useState(0)
  const [amounts, setAmounts] = useState({})

  const productsCart = cart.map((product, index) => {

    const increase = () => {
      setAmounts(prevAmount => ({...prevAmount, [index]: prevAmount[index] + 1}))
      setTotal(prevTotal => prevTotal + +product.price)
    }
  
    const decrease = (e) => {
      setAmounts(prevAmount => ({...prevAmount, [index]: prevAmount[index] - 1}))
      setTotal(prevTotal => prevTotal - +product.price)
      if(amounts[index] === 0) {
        deleteProduct(e.target.parentElement.parentElement.attributes[1].textContent)
      }
    }

    return (
        <div className="cart-product" key={product.id} id={product.id}>
          <div><img src={product.img} alt="Product Image" /></div>
          <p>{product.description}</p>
          <span className='delete' onClick={(e) => deleteProduct(e.target.parentElement.attributes[1].textContent)}>🗑</span>
          <span>${product.price * amounts[index]}</span>
          <div className='amount'>
            <span className='decrease' onClick={decrease}>-</span>
            <span>{amounts[index]}</span>
            <span className='increase' onClick={increase}>+</span>
          </div>
        </div>
    )
  })

  useEffect(() => {
    const totalValue = cart.reduce((total, currentValue) => {
      return total + +currentValue.price
    }, 0)
    setTotal(totalValue)
    for(let i = 0; i < cart.length; i++) {
      setAmounts(prevAmount => ({...prevAmount, [i]: 1}))
    }
  }, [])

  return (
    <div className='cart-bg'>
      <div className="cart">
        <span className='close-cart' onClick={closeCart}>X</span>
        <h1>Cart</h1>
        <div className="products-cart">{cart.length ? productsCart : 'Your cart is empty!'}</div>
        <div className='total'>
          <span>Total:</span>
          <span>${total}</span>
        </div>
        <button type='button' className='checkout-btn'>Checkout</button>
      </div>
    </div>
  )
}

export default Cart