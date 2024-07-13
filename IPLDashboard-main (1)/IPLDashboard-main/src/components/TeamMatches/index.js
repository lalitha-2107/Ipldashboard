// Write your code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import LatestMatch from '../LatestMatch'

import './index.css'

class TeamMatches extends Component {
  state = {teamData: {}, isLoading: true}

  componentDidMount() {
    this.getTeamDetails()
  }

  getTeamDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const updatedTeamData = {
      recentMatches: data.recent_matches,
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
    }
    this.setState({teamData: updatedTeamData, isLoading: false})
  }

  render() {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const {teamData, isLoading} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = teamData
    return (
      <div>
        {isLoading ? (
          <div testid="loader" className="loader-container">
            <Loader type="Oval" color="black" height={50} width={50} />
          </div>
        ) : (
          <div className={`team-matches-container-${id}`}>
            <img className="team-image" src={teamBannerUrl} alt="team banner" />
            <LatestMatch
              latestMatches={latestMatchDetails}
              recentMatches={recentMatches}
            />
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
