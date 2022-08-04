import { useState, useEffect } from 'react'

function Cart({cart, closeCart, deleteProduct}) {
  const [total, setTotal] = useState(0)
  const [amounts, setAmounts] = useState({})

  const productsCart = cart.map((product, index) => {
    useEffect(() => {
      setAmounts(prevAmount => ({...prevAmount, [index]: 1}))
    }, [])
    
    const increase = () => {
      setAmounts(prevAmount => ({...prevAmount, [index]: prevAmount[index] + 1}))
      setTotal(prevTotal => prevTotal + +product.price)
    }
  
    const decrease = () => {
      setAmounts(prevAmount => ({...prevAmount, [index]: prevAmount[index] - 1}))
      setTotal(prevTotal => prevTotal - +product.price)
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