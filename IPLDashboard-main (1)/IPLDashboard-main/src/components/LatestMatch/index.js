// Write your code here
import MatchCard from '../MatchCard'

import './index.css'

const LatestMatch = props => {
  const {latestMatches, recentMatches} = props
  console.log(latestMatches)
  const updatedData = {
    competingTeam: latestMatches.competing_team,
    competingTeamLogo: latestMatches.competing_team_logo,
    date: latestMatches.date,
    firstInnings: latestMatches.first_innings,
    id: latestMatches.id,
    manOfTheMatch: latestMatches.man_of_the_match,
    matchStatus: latestMatches.match_status,
    result: latestMatches.result,
    secondInnings: latestMatches.second_innings,
    umpires: latestMatches.umpires,
    venue: latestMatches.venue,
  }
  console.log(recentMatches)
  return (
    <>
      <li>
        <h1 className="latest-match-heading">Latest Matches</h1>
        <div className="card-container">
          <div className="firs-container">
            <h1 className="first-container-heading">
              {updatedData.competingTeam}
            </h1>
            <p className="card-description">{updatedData.date}</p>
            <p className="card-description">{updatedData.venue}</p>
            <p className="card-description">{updatedData.result}</p>
          </div>
          <div>
            <img
              src={updatedData.competingTeamLogo}
              alt={`latest match ${updatedData.competingTeam}`}
            />
          </div>
          <div>
            <p className="card-description">
              First Innings
              <br />
            </p>
            <p className="card-description">{updatedData.firstInnings}</p>

            <p className="card-description">Second Innings</p>
            <br />
            <p className="card-description">{updatedData.secondInnings}</p>

            <p className="card-description">
              Man of the Match
              <br />
            </p>
            <p className="card-description">{updatedData.manOfTheMatch}</p>

            <p className="card-description">
              Umpires
              <br />
            </p>
            <p className="card-description">{updatedData.umpires}</p>
          </div>
        </div>
      </li>
      <MatchCard recentMatches={recentMatches} />
    </>
  )
}

export default LatestMatch
