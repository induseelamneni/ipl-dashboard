// Write your code here
import {Component} from 'react'
import './index.css'
import TeamCard from '../TeamCard'

class Home extends Component {
  state = {
    iplCardDetails: [],
  }

  componentDidMount() {
    this.getTeamCardDetails()
  }

  getTeamCardDetails = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    console.log(data)
    const updatedData = data.map(eachData => ({
      id: eachData.id,
      name: eachData.name,
      url: eachData.team_image_url,
    }))

    this.setState({
      iplCardDetails: updatedData,
    })
  }

  render() {
    const {iplCardDetails} = this.state
    console.log(iplCardDetails)

    return (
      <div className="home-bg">
        <div className="ipl-heading-display-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="logo"
          />
          <h1 className="heading">IPL Dashboard</h1>
        </div>
        {iplCardDetails.map(item => (
          <TeamCard cardDetails={item} key={item.id} />
        ))}
      </div>
    )
  }
}
export default Home
