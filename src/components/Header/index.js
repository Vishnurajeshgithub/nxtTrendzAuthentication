// Write your JS code here

import './index.css'

const Header = () => (
  <nav className="header-container">
    <img
      className="website-logo-head"
      src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
      alt="website logo"
    />
    <ul className="nav-menu">
      <li className="nav-item">Home</li>
      <li className="nav-item">Products</li>
      <li className="nav-item">Cart</li>
      <li className="nav-item">
        <button type="button" className="logout-btn">
          Logout
        </button>
      </li>
    </ul>
  </nav>
)
export default Header
