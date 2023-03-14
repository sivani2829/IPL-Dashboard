// Write your code here

import {Component} from 'react'
import './index.css'

import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import LatestMatch from '../LatestMatch'

import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {matchData: [], isLoading: true}

  componentDidMount() {
    this.getMatch()
  }

  getMatch = async () => {
    const {matchData, isLoading} = this.state
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    console.log(data)

    const updatedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: {
        id: data.latest_match_details.id,
        competingTeam: data.latest_match_details.competing_team,
        competingTeamLogo: data.latest_match_details.competing_team_logo,
        date: data.latest_match_details.date,
        firstInnings: data.latest_match_details.first_innings,
        manOfTheMatch: data.latest_match_details.man_of_the_match,
        matchStatus: data.latest_match_details.match_status,
        result: data.latest_match_details.result,
        secondInnings: data.latest_match_details.second_innings,
        umpires: data.latest_match_details.umpires,
        venue: data.latest_match_details.venue,
      },

      recentMatches: data.recent_matches.map(e => ({
        umpires: e.umpires,
        result: e.result,
        manOfTheMatch: e.man_of_the_match,
        id: e.id,
        date: e.date,
        venue: e.venue,
        competingTeam: e.competing_team,
        competingTeamLogo: e.competing_team_logo,
        firstInnings: e.first_innings,
        secondInnings: e.second_innings,
        matchStatus: e.match_status,
      })),
    }

    this.setState({
      matchData: updatedData,
      isLoading: false,
    })
  }

  render() {
    const {matchData, isLoading} = this.state
    const {teamBannerUrl} = matchData
    const {latestMatchDetails, recentMatches} = matchData
    // console.log(matchData)
    // console.log(latestMatchDetails)
    console.log(recentMatches)

    return (
      <>
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className="match-container">
            <img src={teamBannerUrl} alt="team banner" className="banner" />
            <div className="latest-match">
              <LatestMatch
                details={latestMatchDetails}
                key={latestMatchDetails.id}
              />
            </div>
            <ul className="match-card-container">
              {recentMatches.map(e => (
                <MatchCard details={e} key={e.id} />
              ))}
            </ul>
          </div>
        )}
      </>
    )
  }
}

export default TeamMatches
