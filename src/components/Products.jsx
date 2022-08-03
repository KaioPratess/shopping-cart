import products from '../db'
import {useState, useEffect} from 'react'

function Products({changeBackground, addToCart}) {
  const cards = products.map(product => {
    const addProduct = (e) => {
      const nodes = e.target.parentElement.childNodes
      const img = nodes[0].childNodes[0].currentSrc
      const description = nodes[1].textContent
      const price = nodes[2].textContent.slice(1)
      const id = e.target.parentElement.attributes.id.textContent
      addToCart({img, description, price, id})
    }

    return (
      <div className='card' key={product.id} id={product.id}>
        <div><img src={product.img} alt="T-shirt" /></div>
        <p>{product.description}</p>
        <span>${product.price}</span>
        <button type='button' className='add-btn' onClick={addProduct}>Add to Cart</button>
      </div>
    )
  })

  useEffect(() => {
    changeBackground('products')
  }, [])

  return (
    <div className="products">
      <div className='cards'>
        {cards}
      </div>
    </div>
  )
}

export default Products