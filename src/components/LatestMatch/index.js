// Write your code here
import './index.css'

const LatestMatch = props => {
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
    <>
      <div className="game-details">
        <p className="competing">{competingTeam}</p>
        <p className="date">{date}</p>
        <p className="venue1">{venue}</p>
        <p className="res1">{result}</p>
      </div>
      <div className="game-details">
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="team-img"
        />
      </div>
      <div className="game-details">
        <p className="res1">First Innings</p>
        <p className="res1">{firstInnings}</p>
        <p className="res1">second Innings</p>
        <p className="res1">{secondInnings}</p>
        <p className="res1">Man of the Match</p>
        <p className="res1">{manOfTheMatch}</p>
        <p className="res1">Umpires</p>
        <p className="res1">{umpires}</p>
      </div>
    </>
  )
}
export default LatestMatch
