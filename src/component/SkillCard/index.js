import './index.css'

const SkillCard = props => {
  const {eachSkill} = props
  const {imageUrl, name} = eachSkill
  return (
    <li className="skill-list-container">
      <img src={imageUrl} className="website-logo" alt={name} />
      <h1 className="heading">{name}</h1>
    </li>
  )
}
export default SkillCard
