import { useState } from 'react';
import Home from './components/Home';
import lionBg from './assets/lion-bg.png';
import lionBg2 from './assets/lion.webp';
import Products from './components/Products';
import Contact from './components/Contact';
import Cart from './components/Cart';
import About from './components/About';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './App.css';

function App() {
  const [background, setBackground] = useState('home');
  const [openCart, setOpenCart] = useState(false);
  const [cart, setCart] = useState([]);
  const [checkout, setCheckout] = useState(false);

  const style = {
    background: `url('${
      background === 'products' ? lionBg2 : lionBg
    }') no-repeat center/cover`,
  };

  const changeBackground = (component) => {
    setBackground(component);
  };

  const changeCheckout = () => {
    setCheckout(true);
  };

  const addToCart = (product) => {
    const isInCart = cart.find((currentValue) => {
      return currentValue.id === product.id;
    });

    if (isInCart) {
      return;
    } else {
      product.e.target.textContent = 'In Cart';
      product.e.target.style.background = 'orangered';
      product.e.target.style.color = 'white';
      setCart((prevCart) => {
        return [...prevCart, product];
      });
    }
  };

  const returnToHome = () => {
    setCheckout(false);
    setCart([]);
    setOpenCart(false);
  };

  const deleteFromCart = (id) => {
    const product = cart.find((currentValue) => currentValue.id === id);
    product.e.target.textContent = 'Add to Cart';
    product.e.target.style.background = 'white';
    product.e.target.style.color = 'black';
    const newCart = [];
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id !== id) {
        newCart.push(cart[i]);
      }
    }
    setCart([...newCart]);
  };

  const closeCart = () => {
    setOpenCart(false);
  };

  return (
    <BrowserRouter>
      <div className="app" style={style}>
        <header className="header">
          <div>
            <Link to="/shopping-cart/">
              <svg
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                className="logo"
                width="256px"
                height="178px"
                viewBox="0 0 256 178"
                xmlSpace="preserve"
              >
                <path
                  d="M91.743,110.435l23.352,8.271c-10.104,13.361-26.13,25.42-26.13,25.42l3.598,19.688c6.566,0,11.929,5.246,12.074,11.81
                v0.003H81.012l-7.216-43.258C80.304,125.52,86.312,118.207,91.743,110.435z M196.106,127.513l15.566,48.112h22.641
                c0-6.523-5.289-11.813-11.813-11.813l-7.763-42.698C205.14,126.786,196.106,127.513,196.106,127.513z M234.313,29.938v-3.691
                L222.5,22.063c0.136-10.722-8.473-19.51-19.196-19.595l-11.812-0.093c-26.367,0-47.742,21.375-47.742,47.742V57.5H60.549h-0.073
                c-20.363,0-37.732,15.224-40.401,35.412l-5.14,38.891C14.08,138.267,8.52,143.141,2,143.141v16.734c0,0,20.057-4.553,22.694-26.782
                l5.14-38.891c1.511-11.431,9.237-20.76,19.481-24.756l-9.708,52.444l-4.779,5.109c-0.837,0.896-1.21,2.129-1.008,3.338l7.555,45.289
                H65c0-6.523-5.289-11.813-11.813-11.813h-0.984l-2.875-19.688l0.604-0.483c15.089-12.068,28.151-26.472,38.693-42.665l47.59,16.854
                c4.987,1.766,10.238,2.669,15.529,2.669h15.631v55.125H191v-1.969c0-5.437-4.407-9.844-9.844-9.844l7.875-43.313l7.717-1.013
                c17.616-3.309,26.829-14.737,31.17-24.374c4.396-9.757,6.398-19.219,6.395-29.297c-0.001-4.534-0.001-8.316-0.001-8.316h8.579
                c4.17,0,7.76-2.943,8.578-7.032L254,37.813L234.313,29.938z"
                />
              </svg>
            </Link>
          </div>
          <nav className="nav">
            <ul>
              <li>
                <Link to="/shopping-cart/Products">Products</Link>
              </li>
              <li>
                <Link to="/shopping-cart/Contact">Contact</Link>
              </li>
              <li>
                <Link to="/shopping-cart/About">About</Link>
              </li>
              <li onClick={() => setOpenCart(true)}>
                <span className="cart-amount">{cart.length}</span>
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  className="bag"
                >
                  <g>
                    <g>
                      <path d="m475.5,475.9l-29.5-329.4c-0.9-10.5-9.8-18.6-20.5-18.6h-77.5c-18.1-59.3-49.1-116.9-92-116.9-43,0-73.9,57.6-92.2,116.9h-77.5c-10.6,0-19.5,8.1-20.5,18.6l-29.6,332.3c-1.1,14.8 9.2,22.2 20.5,22.2h398.7c0.1,0 0.1,0 0.2,0 13,0 21.5-11.2 19.9-25.1zm-219.5-424.1c14.3-1.42109e-14 33.8,34 48.7,76.1h-97.4c14.8-42.1 34.4-76.1 48.7-76.1zm-177,408.4l26.1-291.4h48.1c-5.8,26.9-8.7,51.2-8.7,67.2 0,11.3 9.2,20.4 20.5,20.4s20.5-9.1 20.5-20.4c0-19.8 3.7-43.5 9.5-67.2h121.9c5.8,23.7 9.5,47.4 9.5,67.2 0,11.3 9.2,20.4 20.5,20.4 11.3,0 20.5-9.1 20.5-20.4 0-16-2.9-40.3-8.7-67.2h48.1l26.1,291.4h-353.9z" />
                    </g>
                  </g>
                </svg>
              </li>
            </ul>
          </nav>
        </header>
        <Routes>
          <Route
            path="/shopping-cart/"
            element={<Home changeBackground={changeBackground} />}
          />
          <Route
            path="/shopping-cart/Products"
            element={
              <Products
                changeBackground={changeBackground}
                addToCart={addToCart}
                cart={cart}
              />
            }
          />
          <Route
            path="/shopping-cart/Contact"
            element={<Contact changeBackground={changeBackground} />}
          />
          <Route
            path="/shopping-cart/About"
            element={<About changeBackground={changeBackground} />}
          />
        </Routes>
        {openCart && (
          <Cart
            closeCart={closeCart}
            cart={cart}
            deleteProduct={deleteFromCart}
            checkout={checkout}
            setCheckout={changeCheckout}
            returnToHome={returnToHome}
          />
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
