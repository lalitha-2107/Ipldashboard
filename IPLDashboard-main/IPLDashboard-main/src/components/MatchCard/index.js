// Write your code here
import './index.css'

const MatchCard = props => {
  const {recentMatches} = props
  const updatedData = recentMatches.map(each => ({
    competingTeam: each.competing_team,
    competingTeamLogo: each.competing_team_logo,
    date: each.date,
    firstInnings: each.first_innings,
    id: each.id,
    manOfTheMatch: each.man_of_the_match,
    matchStatus: each.match_status,
    result: each.result,
    secondInnings: each.second_innings,
    umpires: each.umpires,
    venue: each.venue,
  }))

  const renderEachMatch = each => {
    const {competingTeam, competingTeamLogo, result, matchStatus} = each
    const matchStatusClassName = matchStatus === 'Won' ? 'won' : 'loss'
    return (
      <div className="match-card-container">
        <img
          className="competing-team-logo"
          src={competingTeamLogo}
          alt="Example response"
        />
        <h1 className="competing-team">{competingTeam}</h1>
        <p className="result">{result}</p>
        <p className={matchStatusClassName}>{matchStatus}</p>
      </div>
    )
  }

  return <div>{updatedData.map(each => renderEachMatch(each))}</div>
}

export default MatchCard
