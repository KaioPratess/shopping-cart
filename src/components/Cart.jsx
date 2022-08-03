import { useState, useEffect } from 'react'

function Cart({cart, closeCart}) {
  const [total, setTotal] = useState(0)

  const productsCart = cart.map(product => {
    const [amount, setAmount] = useState(1)

    const increase = () => {
      setAmount(prevAmount => prevAmount < 10 ? prevAmount + 1 : 10)
      setTotal(prevTotal => prevTotal + +product.price)
    }
  
    const decrease = () => {
      setAmount(prevAmount => prevAmount > 0 ? prevAmount - 1 : 0)
      setTotal(prevTotal => prevTotal - +product.price)
    }

    return (
        <div className="cart-product" key={product.id}>
          <div><img src={product.img} alt="Product Image" /></div>
          <p>{product.description}</p>
          <span>${product.price * amount}</span>
          <div className='amount'>
            <span className='decrease' onClick={decrease}>-</span>
            <span>{amount}</span>
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