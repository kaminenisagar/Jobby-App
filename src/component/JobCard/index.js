import {Link} from 'react-router-dom'
import {BsFillBriefcaseFill, BsStarFill} from 'react-icons/bs'
import {MdLocationOn} from 'react-icons/md'
import './index.css'

const JobCard = props => {
  const {jobDetails} = props
  const {
    companyLogoUrl,
    employmentType,
    jobDescription,
    packagePerAnnum,
    rating,
    title,
    location,
    id,
  } = jobDetails
  return (
    <Link to={`/jobs/${id}`} className="link">
      <li className="list-container">
        <div className="top-container">
          <img src={companyLogoUrl} alt={id} className="logo" />
          <div className="heading-container">
            <h1 className="title">{title}</h1>
            <div className="rating-container">
              <BsStarFill className="rating-icon" />
              <p className="paragraph">{rating}</p>
            </div>
          </div>
        </div>
        <div className="package-container-element">
          <div className="imp-loc-container">
            <div className="location-container">
              <MdLocationOn className="location-icon" />
              <p className="location">{location}</p>
            </div>
            <div className="employee-container">
              <BsFillBriefcaseFill className="briefcase-item" />
              <p className="internship">{employmentType}</p>
            </div>
          </div>
          <p className="package">{packagePerAnnum}</p>
        </div>
        <hr className="line" />
        <h1 className="des-heading">Description</h1>
        <p className="description">{jobDescription}</p>
      </li>
    </Link>
  )
}
export default JobCard
