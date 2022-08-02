import products from '../db'
import {useState} from 'react'

function Products({setBackground}) {
  const cards = products.map(product => {
    const [qtde, setQtde] = useState(0)

    const increase = () => {
      setQtde(prevQtde => prevQtde < 10 ? prevQtde + 1 : 10)
    }
  
    const decrease = () => {
      setQtde(prevQtde => prevQtde > 0 ? prevQtde - 1 : 0)
    }
  
    return (
      <div className='card' key={product.id}>
        <div><img src={product.img} alt="T-shirt" /></div>
        <p>{product.description}</p>
        <span>${product.price}</span>
        <div className='qtde'>
          <span className='decrease' onClick={decrease}>-</span>
          <span>{qtde}</span>
          <span className='increase' onClick={increase}>+</span>
        </div>
        <button type='button' className='add-btn'>Add to Cart</button>
      </div>
    )
  })

    setBackground('products')

  return (
    <div className="products">
      <div className='cards'>
        {cards}
      </div>
    </div>
  )
}

export default Products