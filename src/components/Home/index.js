// Write your code here
import './index.css'

import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import TeamCard from '../TeamCard'

class Home extends Component {
  state = {teamsData: [], isload: true}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const {teamsData, isload} = this.state
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()

    const {teams} = data

    const updatedData = teams.map(e => ({
      id: e.id,
      name: e.name,
      teamImageUrl: e.team_image_url,
    }))

    this.setState({
      teamsData: updatedData,
      isload: false,
    })
  }

  render() {
    const {teamsData, isload} = this.state

    return (
      <>
        {isload ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className="home-container">
            <div className="heading">
              <img
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                alt="ipl logo"
                className="ipl-img"
              />
              <h1 className="ipl-heading">IPL Dashboard</h1>
            </div>
            <div className="cards-container">
              <ul className="ul-cont">
                {teamsData.map(e => (
                  <TeamCard key={e.id} details={e} />
                ))}
              </ul>
            </div>
          </div>
        )}
      </>
    )
  }
}

export default Home
