// Write your code here
import './index.css'

import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {details} = props
  const {id, name, teamImageUrl} = details

  return (
    <Link to={`/team-matches/${id}`}>
      <li className="list-container">
        <img src={teamImageUrl} alt={name} className="img-url" />
        <p className="team-name">{name}</p>
      </li>
    </Link>
  )
}
export default TeamCard
