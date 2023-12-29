// Write your code here
import {Component} from 'react'

import {Link} from 'react-router-dom'

import './index.css'

class TeamCard extends Component {
  render() {
    const {team} = this.props
    const {teamImageUrl, name, id} = team
    return (
      <Link to={`/team-matches/${id}`}>
        <li className="team-container">
          <img className="team-logo" src={teamImageUrl} alt={name} />
          <div className="heading-container">
            <p className="team-name">{name}</p>
          </div>
        </li>
      </Link>
    )
  }
}

export default TeamCard
