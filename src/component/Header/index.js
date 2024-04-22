import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const Header = props => {
  const onClickLogOut = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <div className="header-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
        className="logo"
        alt="website logo"
      />
      <ul className="links-container">
        <Link to="/" className="link">
          <li className="link-home">Home</li>
        </Link>
        <Link to="/jobs" className="link">
          <li className="link-jobs"> Jobs</li>
        </Link>
      </ul>
      <button type="button" className="log-btn" onClick={onClickLogOut}>
        Logout
      </button>
    </div>
  )
}
export default withRouter(Header)
