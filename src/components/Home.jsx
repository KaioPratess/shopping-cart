import { Link } from 'react-router-dom'

function Home({setBackground}) {
 
  setBackground('home')

  return (
    <div className="home">
      <h1>Welcome to the Wild Store</h1>
      <span>The best customized clothes in South Carolina</span>
      <Link to='/Products'>Visit the Shop</Link>
    </div>
  )
}

export default Home