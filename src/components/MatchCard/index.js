// Write your code here
import './index.css'

const MatchCard = props => {
  const {details} = props
  const {
    id,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    date,
    manOfTheMatch,
    result,
    matchStatus,
    secondInnings,
    umpires,
    venue,
  } = details
  return (
    <list className="list-cont">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="logo-img"
      />
      <p className="res">{competingTeam}</p>
      <p className="res">{result}</p>
      <p className="res">{matchStatus}</p>
    </list>
  )
}
export default MatchCard
