import {Link} from 'react-router-dom'
import Header from '../Header'

import './index.css'

const Home = () => (
  <div className="home-container">
    <Header />
    <div className="home-text-container" alt="website logo">
      <h1 className="heading">Find The Job That Fits Your Life</h1>
      <p className="paragraph">
        Millions of people are searching for jobs, Salary
        <br /> information company review. Find the job that fits your <br />
        abilities and potential.
      </p>
      <Link to="/jobs">
        <button type="button" className="find-btn">
          Find Jobs
        </button>
      </Link>
    </div>
  </div>
)

export default Home
