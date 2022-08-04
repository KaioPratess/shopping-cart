import { Link } from 'react-router-dom'
import {useEffect} from 'react'

function Home({changeBackground, cart}) {
 
  useEffect(() => {
    changeBackground('home')
  }, [])

  return (
    <div className="home">
      <h1>Welcome to the Wild Store</h1>
      <span>The best customized clothes in South Carolina</span>
      <Link to='/shopping-cart/Products'>Visit the Shop</Link>
    </div>
  )
}

export default Home