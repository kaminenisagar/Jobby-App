import {Component} from 'react'
import {BsFillBriefcaseFill, BsStarFill} from 'react-icons/bs'
import {MdLocationOn} from 'react-icons/md'
import Cookies from 'js-cookie'
import Header from '../Header'
import SkillCard from '../SkillCard'
import './index.css'

class JobItemDetails extends Component {
  state = {
    jobsDetailsList: {},
    similarJobList: [],
  }

  componentDidMount() {
    this.getJobCard()
  }

  getSimilarData = data => ({
    company_logo_url: data.company_logo_url,
    employment_type: data.employment_type,
    id: data.id,
    job_description: data.job_description,
    location: data.location,
    rating: data.rating,
    title: data.title,
  })

  getFilteredData = data => ({
    companyLogoUrl: data.company_logo_url,
    companyWebsiteUrl: data.company_website_url,
    employmentType: data.employment_type,
    id: data.id,
    lifeAtCompany: {
      description: data.description,
      image_url: data.image_url,
    },
    jobDescription: data.job_description,
    packagePerAnnum: data.package_per_annum,
    rating: data.rating,
    location: data.location,
    title: data.title,
    skills: data.skills.map(eachSkill => ({
      imageUrl: eachSkill.image_url,
      name: eachSkill.name,
    })),
  })

  getJobCard = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const apiUrl = `https://apis.ccbp.in/jobs/${id}`
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
      const jobsDetails = this.getFilteredData(data.job_details)
      const similarJobsDetails = data.similar_jobs.map(each =>
        this.getSimilarData(each),
      )
      this.setState({
        jobsDetailsList: jobsDetails,
        similarJobList: similarJobsDetails,
      })
    }
  }

  render() {
    const {jobsDetailsList, similarJobList} = this.state
    console.log(similarJobList)
    const {
      companyLogoUrl,
      employmentType,
      jobDescription,
      packagePerAnnum,
      rating,
      location,
      title,
      skills,
    } = jobsDetailsList
    return (
      <div className="job-card-container">
        <Header />
        <div className="job-card-container">
          <div className="job-container">
            <div className="top-container">
              <div className="image-title-container">
                <img src={companyLogoUrl} alt="logo" className="website-logo" />
                <div className="title-container">
                  <h1 className="title">{title}</h1>
                  <div className="star-container">
                    <BsStarFill className="star" />
                    <p className="rating">{rating}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lo-bri-package-container">
              <div className="lo-bri-container">
                <div className="location-container">
                  <MdLocationOn className="type" />
                  <p className="location">{location}</p>
                </div>
                <div className="brief-container">
                  <BsFillBriefcaseFill className="type" />
                  <p className="brief">{employmentType}</p>
                </div>
              </div>
              <p className="package">{packagePerAnnum}</p>
            </div>
            <hr className="line" />
            <h1 className="description-heading">Description</h1>
            <p className="description">{jobDescription}</p>
            <h1 className="skills-heading">Skills</h1>
            <ul className="unordered-list-container">
              {skills.map(each => (
                <SkillCard eachSkill={each} key={each.name} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default JobItemDetails
