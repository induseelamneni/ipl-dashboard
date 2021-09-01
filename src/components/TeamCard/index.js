// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {cardDetails} = props
  const {name, url, id} = cardDetails

  return (
    <Link to={`/team-matches/${id}`} className="item-link">
      <div className="ipl-card">
        <img src={url} alt={name} className="each-team-logo" />
        <h1 className="team-name">{name}</h1>
      </div>
    </Link>
  )
}
export default TeamCard
