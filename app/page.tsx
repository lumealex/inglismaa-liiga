"use client"

import { useState } from "react"
import { WindowPopup } from "@/components/window-popup"

interface Fixture {
  fixture: {
    id: number
    date: string
  }
  teams: {
    home: { name: string; logo: string }
    away: { name: string; logo: string }
  }
  goals: {
    home: number | null
    away: number | null
  }
  score: {
    fulltime: { home: number | null; away: number | null }
  }
}

interface Standing {
  rank: number
  team: {
    id: number
    name: string
    logo: string
  }
  all: {
    played: number
    win: number
    draw: number
    lose: number
  }
  points: number
  goalsDiff: number
}

interface Player {
  player: {
    id: number
    name: string
    photo: string
  }
  statistics: Array<{
    team: {
      name: string
      logo: string
    }
    goals: {
      total: number
    }
    games: {
      appearences: number
    }
  }>
}

const PREMIER_LEAGUE = { id: 39, name: "Premier League", country: "England" }

const TEAMS = [
  {
    id: 33,
    name: "Manchester United",
    badge: "/images/man-united-badge.png",
    kit: "/images/manunited-1.png",
    player: {
      name: "Cristiano Ronaldo",
      image: "/images/ronaldo.png",
      era: "2003-2009",
    },
  },
  {
    id: 42,
    name: "Arsenal",
    badge: "https://media.api-sports.io/football/teams/42.png",
    kit: "https://media.api-sports.io/football/teams/42.png",
    player: {
      name: "Thierry Henry",
      image: "https://media.api-sports.io/football/teams/42.png",
      era: "1999-2007",
    },
  },
  {
    id: 40,
    name: "Liverpool",
    badge: "https://media.api-sports.io/football/teams/40.png",
    kit: "/images/liverpool-1.png",
    player: {
      name: "Steven Gerrard",
      image: "https://media.api-sports.io/football/teams/40.png",
      era: "1998-2015",
    },
  },
  {
    id: 50,
    name: "Manchester City",
    badge: "https://media.api-sports.io/football/teams/50.png",
    kit: "/images/man-city-1.png",
    player: {
      name: "Sergio Agüero",
      image: "https://media.api-sports.io/football/teams/50.png",
      era: "2011-2021",
    },
  },
  {
    id: 49,
    name: "Chelsea",
    badge: "https://media.api-sports.io/football/teams/49.png",
    kit: "https://media.api-sports.io/football/teams/49.png",
    player: {
      name: "Frank Lampard",
      image: "https://media.api-sports.io/football/teams/49.png",
      era: "2001-2014",
    },
  },
  {
    id: 34,
    name: "Newcastle United",
    badge: "https://media.api-sports.io/football/teams/34.png",
    kit: "/images/newcastle-1.png",
    player: {
      name: "Alan Shearer",
      image: "https://media.api-sports.io/football/teams/34.png",
      era: "1996-2006",
    },
  },
  {
    id: 48,
    name: "West Ham United",
    badge: "https://media.api-sports.io/football/teams/48.png",
    kit: "/images/west-ham-1.png",
    player: {
      name: "Bobby Moore",
      image: "https://media.api-sports.io/football/teams/48.png",
      era: "1958-1974",
    },
  },
  {
    id: 63,
    name: "Leeds United",
    badge: "https://media.api-sports.io/football/teams/63.png",
    kit: "/images/leeds-1.png",
    player: {
      name: "Billy Bremner",
      image: "https://media.api-sports.io/football/teams/63.png",
      era: "1959-1976",
    },
  },
  {
    id: 36,
    name: "Fulham",
    badge: "https://media.api-sports.io/football/teams/36.png",
    kit: "/images/fulham-1.png",
    player: {
      name: "Johnny Haynes",
      image: "https://media.api-sports.io/football/teams/36.png",
      era: "1952-1970",
    },
  },
  {
    id: 39,
    name: "Wolverhampton",
    badge: "https://media.api-sports.io/football/teams/39.png",
    kit: "/images/wolves-1.png",
    player: {
      name: "Steve Bull",
      image: "https://media.api-sports.io/football/teams/39.png",
      era: "1986-1999",
    },
  },
  {
    id: 47,
    name: "Tottenham",
    badge: "https://media.api-sports.io/football/teams/47.png",
    kit: "/images/tottenham-1.png",
    player: {
      name: "Jimmy Greaves",
      image: "https://media.api-sports.io/football/teams/47.png",
      era: "1961-1970",
    },
  },
  {
    id: 71,
    name: "Sunderland",
    badge: "https://media.api-sports.io/football/teams/71.png",
    kit: "/images/sunderland-1.png",
    player: {
      name: "Kevin Phillips",
      image: "https://media.api-sports.io/football/teams/71.png",
      era: "1997-2003",
    },
  },
]

const MOCK_FIXTURES: Fixture[] = [
  {
    fixture: { id: 1, date: "2025-01-04T15:00:00Z" },
    teams: {
      home: { name: "Manchester United", logo: "" },
      away: { name: "Liverpool", logo: "" },
    },
    goals: { home: 2, away: 3 },
    score: { fulltime: { home: 2, away: 3 } },
  },
  {
    fixture: { id: 2, date: "2025-01-04T17:30:00Z" },
    teams: {
      home: { name: "Arsenal", logo: "" },
      away: { name: "Chelsea", logo: "" },
    },
    goals: { home: 1, away: 1 },
    score: { fulltime: { home: 1, away: 1 } },
  },
  {
    fixture: { id: 3, date: "2025-01-04T20:00:00Z" },
    teams: {
      home: { name: "Manchester City", logo: "" },
      away: { name: "Tottenham", logo: "" },
    },
    goals: { home: 4, away: 0 },
    score: { fulltime: { home: 4, away: 0 } },
  },
]

const MOCK_STANDINGS: Standing[] = [
  {
    rank: 1,
    team: { id: 50, name: "Manchester City", logo: "" },
    all: { played: 20, win: 15, draw: 3, lose: 2 },
    points: 48,
    goalsDiff: 28,
  },
  {
    rank: 2,
    team: { id: 40, name: "Liverpool", logo: "" },
    all: { played: 20, win: 14, draw: 4, lose: 2 },
    points: 46,
    goalsDiff: 25,
  },
  {
    rank: 3,
    team: { id: 42, name: "Arsenal", logo: "" },
    all: { played: 20, win: 13, draw: 5, lose: 2 },
    points: 44,
    goalsDiff: 22,
  },
  {
    rank: 4,
    team: { id: 33, name: "Manchester United", logo: "" },
    all: { played: 20, win: 11, draw: 5, lose: 4 },
    points: 38,
    goalsDiff: 12,
  },
  {
    rank: 5,
    team: { id: 49, name: "Chelsea", logo: "" },
    all: { played: 20, win: 10, draw: 6, lose: 4 },
    points: 36,
    goalsDiff: 10,
  },
]

const MOCK_PLAYERS: Player[] = [
  {
    player: { id: 1, name: "Erling Haaland", photo: "" },
    statistics: [{ team: { name: "Manchester City", logo: "" }, goals: { total: 18 }, games: { appearences: 19 } }],
  },
  {
    player: { id: 2, name: "Mohamed Salah", photo: "" },
    statistics: [{ team: { name: "Liverpool", logo: "" }, goals: { total: 15 }, games: { appearences: 20 } }],
  },
  {
    player: { id: 3, name: "Harry Kane", photo: "" },
    statistics: [{ team: { name: "Tottenham", logo: "" }, goals: { total: 14 }, games: { appearences: 20 } }],
  },
]

export default function FootballScoresPage() {
  const [selectedTeam, setSelectedTeam] = useState<(typeof TEAMS)[0] | null>(null)
  const [fixtures, setFixtures] = useState<Fixture[]>([])
  const [loading, setLoading] = useState(false)
  const [selectedFixture, setSelectedFixture] = useState<Fixture | null>(null)
  const [showStartMenu, setShowStartMenu] = useState(false)
  const [showLeagueWindow, setShowLeagueWindow] = useState(false)
  const [liveFixtures, setLiveFixtures] = useState<Fixture[]>([])
  const [showStandingsWindow, setShowStandingsWindow] = useState(false)
  const [showPlayersWindow, setShowPlayersWindow] = useState(false)
  const [standings, setStandings] = useState<Standing[]>([])
  const [topScorers, setTopScorers] = useState<Player[]>([])
  const [selectedDate, setSelectedDate] = useState<string>(new Date().toISOString().split("T")[0])

  const fetchFixtures = () => {
    setLoading(true)
    setShowStartMenu(false)
    setShowLeagueWindow(true)

    setTimeout(() => {
      setFixtures(MOCK_FIXTURES)
      setLoading(false)
    }, 500)
  }

  const fetchLiveFixtures = async () => {
    setLiveFixtures(MOCK_FIXTURES.slice(0, 3))
  }

  const fetchFixturesByDate = (date: string) => {
    setLoading(true)
    setSelectedDate(date)
    setShowStartMenu(false)
    setShowLeagueWindow(true)

    setTimeout(() => {
      setFixtures(MOCK_FIXTURES)
      setLoading(false)
    }, 500)
  }

  const fetchStandings = () => {
    setShowStartMenu(false)
    setShowStandingsWindow(true)
    setStandings(MOCK_STANDINGS)
  }

  const fetchTopScorers = () => {
    setShowStartMenu(false)
    setShowPlayersWindow(true)
    setTopScorers(MOCK_PLAYERS)
  }

  const openFixturePopup = (fixture: Fixture) => {
    setSelectedFixture(fixture)
  }

  const openTeamPopup = (team: (typeof TEAMS)[0]) => {
    setSelectedTeam(team)
    setShowStartMenu(false)
  }

  const getDateString = (daysAgo: number) => {
    const date = new Date()
    date.setDate(date.getDate() - daysAgo)
    return date.toISOString().split("T")[0]
  }

  return (
    <div className="h-screen flex flex-col xp-desktop relative overflow-hidden">
      <div className="absolute top-4 left-4 space-y-6 z-10">
        {TEAMS.map((team) => (
          <div
            key={team.id}
            onDoubleClick={() => openTeamPopup(team)}
            className="flex flex-col items-center gap-1 cursor-pointer hover:opacity-80 w-20"
          >
            <div className="w-16 h-16 bg-white border-2 border-black flex items-center justify-center p-1">
              <img src={team.badge || "/placeholder.svg"} alt={team.name} className="w-full h-full object-contain" />
            </div>
            <span className="text-white text-xs font-bold text-center text-shadow leading-tight">{team.name}</span>
          </div>
        ))}
      </div>

      <div className="absolute top-4 right-4 z-10">
        <div
          onDoubleClick={fetchFixtures}
          className="flex flex-col items-center gap-1 cursor-pointer hover:opacity-80 w-20"
        >
          <div className="w-16 h-16 bg-white border-2 border-black flex items-center justify-center p-1">
            <img src="/images/premier-league-logo.png" alt="Premier League" className="w-full h-full object-contain" />
          </div>
          <span className="text-white text-xs font-bold text-center text-shadow leading-tight">Premier League</span>
        </div>
      </div>

      {selectedTeam && (
        <WindowPopup
          title={`${selectedTeam.name} - Team Info`}
          initialX={300}
          initialY={150}
          onClose={() => setSelectedTeam(null)}
        >
          <div className="bg-white border-2 border-[#808080] p-6 w-[500px]">
            <div className="space-y-6">
              {/* Badge */}
              <div className="text-center">
                <div className="inline-block bg-[#DFDFDF] border-4 border-black p-4">
                  <img
                    src={selectedTeam.badge || "/placeholder.svg"}
                    alt={selectedTeam.name}
                    className="w-32 h-32 object-contain"
                  />
                </div>
                <h2 className="mt-3 text-2xl font-bold text-black">{selectedTeam.name}</h2>
              </div>

              {/* Kit */}
              <div className="border-2 border-[#808080] bg-[#DFDFDF] p-4">
                <h3 className="text-sm font-bold text-black mb-3 border-b-2 border-black pb-1">CLASSIC KIT</h3>
                <div className="flex justify-center">
                  <img
                    src={selectedTeam.kit || "/placeholder.svg"}
                    alt={`${selectedTeam.name} kit`}
                    className="w-48 h-auto object-contain"
                  />
                </div>
              </div>

              {/* Legendary Player */}
              <div className="border-2 border-[#808080] bg-[#DFDFDF] p-4">
                <h3 className="text-sm font-bold text-black mb-3 border-b-2 border-black pb-1">CLUB LEGEND</h3>
                <div className="flex items-center gap-4">
                  <img
                    src={selectedTeam.player.image || "/placeholder.svg"}
                    alt={selectedTeam.player.name}
                    className="w-24 h-24 object-cover border-2 border-black"
                  />
                  <div>
                    <p className="font-bold text-black text-lg">{selectedTeam.player.name}</p>
                    <p className="text-sm text-[#808080]">{selectedTeam.player.era}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </WindowPopup>
      )}

      {showLeagueWindow && (
        <WindowPopup
          title="Premier League - Fixtures"
          initialX={200}
          initialY={100}
          onClose={() => setShowLeagueWindow(false)}
        >
          <div className="bg-white border-2 border-[#808080] w-[700px]">
            {/* Date selector */}
            <div className="bg-[#DFDFDF] border-b-2 border-[#808080] p-2 flex gap-2 flex-wrap">
              <button
                onClick={() => fetchFixturesByDate(getDateString(2))}
                className="button-98 px-3 py-1 text-xs font-bold"
              >
                2 Days Ago
              </button>
              <button
                onClick={() => fetchFixturesByDate(getDateString(1))}
                className="button-98 px-3 py-1 text-xs font-bold"
              >
                Yesterday
              </button>
              <button
                onClick={() => fetchFixturesByDate(getDateString(0))}
                className="button-98 px-3 py-1 text-xs font-bold"
              >
                Today
              </button>
              <button onClick={fetchStandings} className="button-98 px-3 py-1 text-xs font-bold">
                Table
              </button>
              <button onClick={fetchTopScorers} className="button-98 px-3 py-1 text-xs font-bold">
                Top Scorers
              </button>
            </div>

            <div className="p-3 max-h-[450px] overflow-y-auto">
              {loading ? (
                <div className="text-center py-8">
                  <div className="text-4xl mb-4">⏳</div>
                  <p className="text-black font-bold">Loading fixtures...</p>
                </div>
              ) : fixtures.length > 0 ? (
                <div className="space-y-2">
                  <div className="text-xs text-[#808080] font-bold mb-2 pb-1 border-b border-[#808080]">
                    {new Date(selectedDate).toLocaleDateString("en-US", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                  {fixtures.map((fixture) => (
                    <div
                      key={fixture.fixture.id}
                      onClick={() => openFixturePopup(fixture)}
                      className="button-98 cursor-pointer hover:bg-[#DFDFDF] p-3 text-sm"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 flex-1 min-w-0">
                          <span className="font-bold text-black truncate">{fixture.teams.home.name}</span>
                        </div>
                        <div className="flex items-center gap-3 px-4">
                          <span className="text-2xl font-bold text-black">{fixture.goals.home ?? "-"}</span>
                          <span className="text-lg font-bold text-[#808080]">:</span>
                          <span className="text-2xl font-bold text-black">{fixture.goals.away ?? "-"}</span>
                        </div>
                        <div className="flex items-center gap-2 flex-1 justify-end min-w-0">
                          <span className="font-bold text-black truncate">{fixture.teams.away.name}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-black font-bold">No fixtures available</p>
                </div>
              )}
            </div>
          </div>
        </WindowPopup>
      )}

      {showStandingsWindow && (
        <WindowPopup
          title="Premier League - Table"
          initialX={250}
          initialY={120}
          onClose={() => setShowStandingsWindow(false)}
        >
          <div className="bg-white border-2 border-[#808080] w-[650px] max-h-[500px] overflow-y-auto">
            <table className="w-full text-xs">
              <thead className="bg-[#DFDFDF] border-b-2 border-[#808080] sticky top-0">
                <tr>
                  <th className="text-left p-2 font-bold text-black">#</th>
                  <th className="text-left p-2 font-bold text-black">Team</th>
                  <th className="text-center p-2 font-bold text-black">P</th>
                  <th className="text-center p-2 font-bold text-black">W</th>
                  <th className="text-center p-2 font-bold text-black">D</th>
                  <th className="text-center p-2 font-bold text-black">L</th>
                  <th className="text-center p-2 font-bold text-black">GD</th>
                  <th className="text-center p-2 font-bold text-black">Pts</th>
                </tr>
              </thead>
              <tbody>
                {standings.map((standing) => (
                  <tr key={standing.team.id} className="border-b border-[#C0C0C0] hover:bg-[#DFDFDF]">
                    <td className="p-2 text-black font-bold">{standing.rank}</td>
                    <td className="p-2 text-black font-bold">{standing.team.name}</td>
                    <td className="p-2 text-center text-black">{standing.all.played}</td>
                    <td className="p-2 text-center text-black">{standing.all.win}</td>
                    <td className="p-2 text-center text-black">{standing.all.draw}</td>
                    <td className="p-2 text-center text-black">{standing.all.lose}</td>
                    <td className="p-2 text-center text-black">
                      {standing.goalsDiff > 0 ? "+" : ""}
                      {standing.goalsDiff}
                    </td>
                    <td className="p-2 text-center text-black font-bold">{standing.points}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </WindowPopup>
      )}

      {showPlayersWindow && (
        <WindowPopup
          title="Premier League - Top Scorers"
          initialX={300}
          initialY={140}
          onClose={() => setShowPlayersWindow(false)}
        >
          <div className="bg-white border-2 border-[#808080] w-[550px] max-h-[450px] overflow-y-auto">
            <div className="space-y-2 p-3">
              {topScorers.map((player, index) => (
                <div key={player.player.id} className="button-98 p-3 flex items-center gap-4">
                  <div className="text-2xl font-bold text-black w-8">{index + 1}</div>
                  <div className="w-12 h-12 bg-[#DFDFDF] border-2 border-black flex items-center justify-center">
                    <span className="text-2xl">⚽</span>
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-black">{player.player.name}</p>
                    <p className="text-xs text-[#808080]">{player.statistics[0].team.name}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-black">{player.statistics[0].goals.total}</p>
                    <p className="text-xs text-[#808080]">Goals</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </WindowPopup>
      )}

      {selectedFixture && (
        <WindowPopup
          title={`Match Details - ${selectedFixture.teams.home.name} vs ${selectedFixture.teams.away.name}`}
          initialX={350}
          initialY={200}
          onClose={() => setSelectedFixture(null)}
        >
          <div className="space-y-4">
            <div className="border-2 border-[#808080] p-4 bg-white">
              <div className="flex items-center justify-between mb-4">
                <div className="text-center flex-1">
                  <div className="w-16 h-16 mx-auto mb-2 bg-[#DFDFDF] border-2 border-black flex items-center justify-center">
                    <span className="text-3xl">🏟️</span>
                  </div>
                  <p className="font-bold text-black">{selectedFixture.teams.home.name}</p>
                </div>

                <div className="text-center px-8">
                  <div className="text-5xl font-bold text-black mb-2">
                    {selectedFixture.goals.home ?? "-"} : {selectedFixture.goals.away ?? "-"}
                  </div>
                  <p className="text-sm text-[#808080]">Full Time</p>
                </div>

                <div className="text-center flex-1">
                  <div className="w-16 h-16 mx-auto mb-2 bg-[#DFDFDF] border-2 border-black flex items-center justify-center">
                    <span className="text-3xl">🏟️</span>
                  </div>
                  <p className="font-bold text-black">{selectedFixture.teams.away.name}</p>
                </div>
              </div>

              <div className="border-t-2 border-[#808080] pt-4">
                <p className="text-sm text-black">
                  <span className="font-bold">Date:</span>{" "}
                  {new Date(selectedFixture.fixture.date).toLocaleString("en-US", {
                    dateStyle: "medium",
                    timeStyle: "short",
                  })}
                </p>
              </div>
            </div>

            <button onClick={() => setSelectedFixture(null)} className="button-98 w-full py-2 font-bold text-black">
              OK
            </button>
          </div>
        </WindowPopup>
      )}

      {/* Taskbar */}
      <div className="taskbar h-10 flex items-center px-2 gap-2 absolute bottom-0 left-0 right-0">
        <div className="relative">
          <button
            onClick={() => {
              setShowStartMenu(!showStartMenu)
              if (!showStartMenu) fetchLiveFixtures()
            }}
            className="button-98 px-3 py-1 font-bold text-sm flex items-center gap-2"
          >
            <span className="text-lg">⚽</span>
            Start
          </button>

          {showStartMenu && (
            <div className="window-98 absolute bottom-full left-0 mb-1 w-80 bg-[#C0C0C0]">
              <div className="p-2 bg-gradient-to-r from-[#ff1493] to-[#0084ff] text-white font-bold text-sm border-b-2 border-white">
                Live & Upcoming Matches
              </div>
              <div className="p-2 space-y-1 max-h-[300px] overflow-y-auto">
                {liveFixtures.length > 0 ? (
                  liveFixtures.map((fixture) => (
                    <div
                      key={fixture.fixture.id}
                      onClick={() => {
                        openFixturePopup(fixture)
                        setShowStartMenu(false)
                      }}
                      className="button-98 cursor-pointer hover:bg-[#DFDFDF] p-2 text-xs"
                    >
                      <div className="font-bold text-black truncate">
                        {fixture.teams.home.name} vs {fixture.teams.away.name}
                      </div>
                      <div className="text-[#808080] text-[10px]">
                        {new Date(fixture.fixture.date).toLocaleString("en-US", {
                          month: "short",
                          day: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-4 text-black text-sm">No live matches</div>
                )}
              </div>
              <div className="border-t-2 border-white p-2">
                <button
                  onClick={() => {
                    fetchFixtures()
                    setShowStartMenu(false)
                  }}
                  className="button-98 w-full text-left px-2 py-2 text-sm hover:bg-[#000080] hover:text-white font-bold"
                >
                  <span className="mr-2">🏴󠁧󠁢󠁥󠁮󠁧󠁿</span>
                  View All Premier League Fixtures
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="flex-1" />
        <div className="button-98 px-3 py-1 text-xs font-bold flex items-center gap-2">
          <span>🔊</span>
          <span>{new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })}</span>
        </div>
      </div>
    </div>
  )
}
