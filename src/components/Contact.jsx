import facebook from '../assets/facebook.png'
import twitter from '../assets/twitter.png'
import instagram from '../assets/instagram.png'

function Contact({setBackground}) {

  setBackground('contact')


  return (
    <div className="contact">
      <h1>Contact</h1>
      <div>
        <ul className="info">
          <li className="phone">843-873-0988</li>
          <li className="email">contact@contact.com</li>
          <li className="address">2676 Khale Street, Beaufort - South Carolina</li>
        </ul>
      </div>
      <div>
        <ul className="social-media">
          <li><a href='https://facebook.com' target='_blank'><img src={facebook} alt="facebook icon" /></a></li>
          <li><a href='https://twitter.com' target='_blank'><img src={twitter} alt="twitter icon" /></a></li>
          <li><a href='https://instagram.com' target='_blank'><img src={instagram} alt="instagram icon" /></a></li>
        </ul>
      </div>
    </div>
  )
}

export default Contact