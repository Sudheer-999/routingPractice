import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div className="navbar-con">
    <div className="app-logo-con">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="app-logo"
      />
      <p className="logo-text">Wave</p>
    </div>
    <ul className="sections">
      <li>
        <Link to="/" className="dec">
          Home
        </Link>
      </li>
      <li>
        <Link to="/about" className="dec">
          About
        </Link>
      </li>
      <li>
        <Link to="/contact" className="dec">
          Contact
        </Link>
      </li>
    </ul>
  </div>
)

export default Header
