import {Component} from 'react'
import {Loader} from 'react-loader-spinner'
import {BsSearch} from 'react-icons/bs'
import Cookies from 'js-cookie'
import Header from '../Header'
import JobCard from '../JobCard'
import FilteredGroup from '../FilteredGroup'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}
class Jobs extends Component {
  state = {
    jobsList: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getJobs()
  }

  getJobs = async () => {
    const apiUrl = 'https://apis.ccbp.in/jobs'
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const data = await response.json()
      const fetchedData = data.jobs.map(eachJob => ({
        companyLogoUrl: eachJob.company_logo_url,
        employmentType: eachJob.employment_type,
        id: eachJob.id,
        jobDescription: eachJob.job_description,
        location: eachJob.location,
        packagePerAnnum: eachJob.package_per_annum,
        rating: eachJob.rating,
        title: eachJob.title,
      }))
      this.setState({
        jobsList: fetchedData,
        apiStatus: apiStatusConstants.success,
      })
    } else if (response.status === 401) {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  renderJobsSection = () => {
    const {jobsList} = this.state
    return (
      <div className="jobs-container-list">
        <Header />
        <div className="bottom-container">
          <div className="filter">
            <FilteredGroup />
          </div>
          <div className="all">
            <div className="jobs-container">
              <div className="search-input-container-desktop">
                <input
                  type="search"
                  className="search-input-desktop"
                  placeholder="Search"
                />
                <button
                  type="button"
                  className="search-button-container-desktop"
                  alt="searchBtn"
                >
                  <BsSearch className="search-logo" />
                </button>
              </div>
              <ul className="unordered-list">
                {jobsList.map(job => (
                  <JobCard jobDetails={job} key={job.id} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }

  renderFailureView = () => (
    <div className="failure-view">
      <img
        src="https://assets.ccbp.in/frontend/react-js/jobby-app-not-found-img.png"
        alt="website logo"
        className="not-logo"
      />
      <h1 className="heading">Not Found</h1>
    </div>
  )

  renderLoaderView = () => (
    <div className="products-loader-container">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  render() {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderJobsSection()
      case apiStatusConstants.failure:
        return this.renderFailureView()

      default:
        return null
    }
  }
}
export default Jobs
