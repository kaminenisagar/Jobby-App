import {Component} from 'react'
import Cookies from 'js-cookie'
import './index.css'

class ProfileDetails extends Component {
  state = {
    profileData: [],
  }

  componentDidMount() {
    this.getProfileList()
  }

  getProfileList = async () => {
    const apiUrl = 'https://apis.ccbp.in/profile'
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
      const profileData = {
        name: data.profile_details.name,
        profileImageUrl: data.profile_details.profile_image_url,
        shortBio: data.profile_details.short_bio,
      }
      this.setState({
        profileData,
      })
    }
  }

  render() {
    const {profileData} = this.state
    const {name, shortBio, profileImageUrl} = profileData
    return (
      <div className="profile-container">
        <img src={profileImageUrl} alt={name} />
        <h1 className="name">{name}</h1>
        <p className="bio">{shortBio}</p>
      </div>
    )
  }
}
export default ProfileDetails
