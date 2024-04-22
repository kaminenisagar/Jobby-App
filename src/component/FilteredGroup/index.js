import ProfileDetails from '../ProfileDetails'
import './index.css'

const employmentTypesList = [
  {
    label: 'Full Time',
    employmentTypeId: 'FULLTIME',
  },
  {
    label: 'Part Time',
    employmentTypeId: 'PARTTIME',
  },
  {
    label: 'Freelance',
    employmentTypeId: 'FREELANCE',
  },
  {
    label: 'Internship',
    employmentTypeId: 'INTERNSHIP',
  },
]

const salaryRangesList = [
  {
    salaryRangeId: '1000000',
    label: '10 LPA and above',
  },
  {
    salaryRangeId: '2000000',
    label: '20 LPA and above',
  },
  {
    salaryRangeId: '3000000',
    label: '30 LPA and above',
  },
  {
    salaryRangeId: '4000000',
    label: '40 LPA and above',
  },
]

const renderSalaryType = () => (
  <ul className="unordered-list">
    {salaryRangesList.map(eachSalary => {
      const {label, salaryRangeId} = eachSalary
      return (
        <li className="list-element" key={label}>
          <input
            id={salaryRangeId}
            type="radio"
            className="type"
            alt="checkBox"
          />
          <label htmlFor={salaryRangeId} className="text">
            {label}
          </label>
        </li>
      )
    })}
  </ul>
)

const renderEmploymentType = () => (
  <ul className="unordered-list">
    {employmentTypesList.map(eachType => {
      const {label, employmentTypeId} = eachType
      return (
        <li className="list-element">
          <input
            id={employmentTypeId}
            type="checkbox"
            className="type"
            alt="checkBox"
          />
          <label htmlFor={employmentTypeId} className="text">
            {label}
          </label>
        </li>
      )
    })}
  </ul>
)
const FilteredGroup = () => (
  <div className="filtered-group-container">
    <ProfileDetails />
    <hr className="line" />
    <h1 className="text-heading">Type Of Employment</h1>
    {renderEmploymentType()}
    <hr className="line" />
    <h1 className="salary-heading">Salary Range</h1>
    {renderSalaryType()}
  </div>
)
export default FilteredGroup
