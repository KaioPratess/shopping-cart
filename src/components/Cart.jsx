import {useState} from 'react'

function Cart() {
  const [cart, setCart] = useState([])

  return (
    <div className="cart">
      <span className='close-cart'>X</span>
      <h1>Cart</h1>
      <div className="products-cart"> </div>
      <div className='total'>
        <span>Total:</span>
        <span>$0</span>
      </div>
      <button type='button' className='checkout-btn'>Checkout</button>
    </div>
  )
}

export default Cart