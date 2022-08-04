import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Cart({cart, closeCart, deleteProduct, checkout, setCheckout, returnToHome}) {
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

  const handleCheckout = () => {
    if(cart.length) {
      setCheckout()
    } else {
      alert('Choose a product!')
    }
  }

  useEffect(() => {
    const totalValue = cart.reduce((total, currentValue) => {
      return total + +currentValue.price
    }, 0)
    setTotal(totalValue)
    for(let i = 0; i < cart.length; i++) {
      setAmounts(prevAmount => ({...prevAmount, [i]: 1}))
    }
  }, [cart])

  return (
    <div className='cart-bg'>
      { checkout
        && 
        <div className='checkout'>
          <div>
            <h1>Thanks for shopping with us!</h1>
            <Link to='/shopping-cart/' className='return-btn' onClick={returnToHome}>Return to Home</Link>
          </div>
        </div>
      }
      <div className="cart">
        <span className='close-cart' onClick={closeCart}>X</span>
        <h1>Cart</h1>
        <div className="products-cart">{cart.length ? productsCart : 'Your cart is empty!'}</div>
        <div className='total'>
          <span>Total:</span>
          <span>${total}</span>
        </div>
        <button type='button' className='checkout-btn' onClick={handleCheckout}>Checkout</button>
      </div>
    </div>
  )
}

export default Cart