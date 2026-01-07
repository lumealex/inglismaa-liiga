// Football Scores Data
const TEAMS = {
  "man-united": {
    id: 33,
    name: "Manchester United",
    badge: "images/man-united-badge.png",
    kit: "images/man-united-kit.png",
    player: {
      name: "Cristiano Ronaldo",
      image: "images/ronaldo.png",
      era: "2003-2009",
    },
  },
  arsenal: {
    id: 42,
    name: "Arsenal",
    badge: "https://media.api-sports.io/football/teams/42.png",
    kit: "/images/arsenal-1.png",
    player: {
      name: "Thierry Henry",
      image: "https://media.api-sports.io/football/teams/42.png",
      era: "1999-2007",
    },
  },
  liverpool: {
    id: 40,
    name: "Liverpool",
    badge: "https://media.api-sports.io/football/teams/40.png",
    kit: "https://media.api-sports.io/football/teams/40.png",
    player: {
      name: "Steven Gerrard",
      image: "https://media.api-sports.io/football/teams/40.png",
      era: "1998-2015",
    },
  },
  "man-city": {
    id: 50,
    name: "Manchester City",
    badge: "https://media.api-sports.io/football/teams/50.png",
    kit: "https://media.api-sports.io/football/teams/50.png",
    player: {
      name: "Sergio Agüero",
      image: "https://media.api-sports.io/football/teams/50.png",
      era: "2011-2021",
    },
  },
  chelsea: {
    id: 49,
    name: "Chelsea",
    badge: "https://media.api-sports.io/football/teams/49.png",
    kit: "/images/chelsea-1.png",
    player: {
      name: "Frank Lampard",
      image: "https://media.api-sports.io/football/teams/49.png",
      era: "2001-2014",
    },
  },
  tottenham: {
    id: 47,
    name: "Tottenham Hotspur",
    badge: "https://media.api-sports.io/football/teams/47.png",
    kit: "https://media.api-sports.io/football/teams/47.png",
    player: {
      name: "Harry Kane",
      image: "https://media.api-sports.io/football/teams/47.png",
      era: "2011-2023",
    },
  },
  newcastle: {
    id: 34,
    name: "Newcastle United",
    badge: "https://media.api-sports.io/football/teams/34.png",
    kit: "https://media.api-sports.io/football/teams/34.png",
    player: {
      name: "Alan Shearer",
      image: "https://media.api-sports.io/football/teams/34.png",
      era: "1996-2006",
    },
  },
  "aston-villa": {
    id: 66,
    name: "Aston Villa",
    badge: "https://media.api-sports.io/football/teams/66.png",
    kit: "/images/aston-villa-1.png",
    player: {
      name: "Ollie Watkins",
      image: "https://media.api-sports.io/football/teams/66.png",
      era: "2020-Present",
    },
  },
  brighton: {
    id: 51,
    name: "Brighton",
    badge: "https://media.api-sports.io/football/teams/51.png",
    kit: "/images/brighton-1.png",
    player: {
      name: "Lewis Dunk",
      image: "https://media.api-sports.io/football/teams/51.png",
      era: "2010-Present",
    },
  },
  "west-ham": {
    id: 48,
    name: "West Ham United",
    badge: "https://media.api-sports.io/football/teams/48.png",
    kit: "https://media.api-sports.io/football/teams/48.png",
    player: {
      name: "Declan Rice",
      image: "https://media.api-sports.io/football/teams/48.png",
      era: "2017-2023",
    },
  },
  everton: {
    id: 45,
    name: "Everton",
    badge: "https://media.api-sports.io/football/teams/45.png",
    kit: "/images/everton-1.png",
    player: {
      name: "Wayne Rooney",
      image: "https://media.api-sports.io/football/teams/45.png",
      era: "2002-2004, 2017-2018",
    },
  },
  fulham: {
    id: 36,
    name: "Fulham",
    badge: "https://media.api-sports.io/football/teams/36.png",
    kit: "https://media.api-sports.io/football/teams/36.png",
    player: {
      name: "Aleksandar Mitrović",
      image: "https://media.api-sports.io/football/teams/36.png",
      era: "2018-2023",
    },
  },
  brentford: {
    id: 55,
    name: "Brentford",
    badge: "https://media.api-sports.io/football/teams/55.png",
    kit: "/images/brentford-1.png",
    player: {
      name: "Ivan Toney",
      image: "https://media.api-sports.io/football/teams/55.png",
      era: "2020-Present",
    },
  },
  "crystal-palace": {
    id: 52,
    name: "Crystal Palace",
    badge: "https://media.api-sports.io/football/teams/52.png",
    kit: "/images/crystal-palace-1.png",
    player: {
      name: "Wilfried Zaha",
      image: "https://media.api-sports.io/football/teams/52.png",
      era: "2013-2023",
    },
  },
  "nottm-forest": {
    id: 65,
    name: "Nottingham Forest",
    badge: "https://media.api-sports.io/football/teams/65.png",
    kit: "/images/forest-1.png",
    player: {
      name: "Brennan Johnson",
      image: "https://media.api-sports.io/football/teams/65.png",
      era: "2018-2023",
    },
  },
  bournemouth: {
    id: 35,
    name: "AFC Bournemouth",
    badge: "https://media.api-sports.io/football/teams/35.png",
    kit: "/images/bournemouth-1.png",
    player: {
      name: "Callum Wilson",
      image: "https://media.api-sports.io/football/teams/35.png",
      era: "2014-2020",
    },
  },
  leicester: {
    id: 46,
    name: "Leicester City",
    badge: "https://media.api-sports.io/football/teams/46.png",
    kit: "https://media.api-sports.io/football/teams/46.png",
    player: {
      name: "Jamie Vardy",
      image: "https://media.api-sports.io/football/teams/46.png",
      era: "2012-Present",
    },
  },
  wolves: {
    id: 39,
    name: "Wolverhampton",
    badge: "https://media.api-sports.io/football/teams/39.png",
    kit: "https://media.api-sports.io/football/teams/39.png",
    player: {
      name: "Raúl Jiménez",
      image: "https://media.api-sports.io/football/teams/39.png",
      era: "2018-Present",
    },
  },
  ipswich: {
    id: 57,
    name: "Ipswich Town",
    badge: "https://media.api-sports.io/football/teams/57.png",
    kit: "https://media.api-sports.io/football/teams/57.png",
    player: {
      name: "Nathan Broadhead",
      image: "https://media.api-sports.io/football/teams/57.png",
      era: "2023-Present",
    },
  },
  southampton: {
    id: 41,
    name: "Southampton",
    badge: "https://media.api-sports.io/football/teams/41.png",
    kit: "https://media.api-sports.io/football/teams/41.png",
    player: {
      name: "James Ward-Prowse",
      image: "https://media.api-sports.io/football/teams/41.png",
      era: "2011-2023",
    },
  },
}

const MOCK_FIXTURES = [
  {
    id: 1,
    date: "2025-01-04T15:00:00Z",
    home: { name: "Manchester United", logo: "" },
    away: { name: "Liverpool", logo: "" },
    homeScore: 2,
    awayScore: 3,
  },
  {
    id: 2,
    date: "2025-01-04T17:30:00Z",
    home: { name: "Arsenal", logo: "" },
    away: { name: "Chelsea", logo: "" },
    homeScore: 1,
    awayScore: 1,
  },
  {
    id: 3,
    date: "2025-01-04T20:00:00Z",
    home: { name: "Manchester City", logo: "" },
    away: { name: "Tottenham", logo: "" },
    homeScore: 4,
    awayScore: 0,
  },
]

const MOCK_STANDINGS = [
  { rank: 1, team: "Liverpool FC", played: 29, won: 21, drawn: 7, lost: 1, gd: 42, points: 70 },
  { rank: 2, team: "Arsenal", played: 29, won: 16, drawn: 10, lost: 3, gd: 29, points: 58 },
  { rank: 3, team: "Nottingham Forest", played: 29, won: 16, drawn: 10, lost: 3, gd: 14, points: 58 },
  { rank: 4, team: "Chelsea FC", played: 29, won: 16, drawn: 7, lost: 6, gd: 22, points: 55 },
  { rank: 5, team: "Manchester City", played: 28, won: 16, drawn: 6, lost: 6, gd: 24, points: 54 },
  { rank: 6, team: "Brighton & Hove Albion", played: 29, won: 12, drawn: 11, lost: 6, gd: 6, points: 47 },
  { rank: 7, team: "Fulham", played: 29, won: 12, drawn: 9, lost: 8, gd: 5, points: 45 },
  { rank: 8, team: "Aston Villa", played: 29, won: 12, drawn: 9, lost: 8, gd: -4, points: 45 },
  { rank: 9, team: "AFC Bournemouth", played: 29, won: 12, drawn: 8, lost: 9, gd: 12, points: 44 },
  { rank: 10, team: "Newcastle United", played: 29, won: 9, drawn: 9, lost: 11, gd: 6, points: 36 },
  { rank: 11, team: "Brentford FC", played: 29, won: 12, drawn: 5, lost: 12, gd: 5, points: 41 },
  { rank: 12, team: "Tottenham Hotspur", played: 29, won: 10, drawn: 7, lost: 12, gd: -3, points: 37 },
  { rank: 13, team: "Manchester United", played: 29, won: 10, drawn: 7, lost: 12, gd: -12, points: 37 },
  { rank: 14, team: "West Ham United", played: 29, won: 9, drawn: 7, lost: 13, gd: -16, points: 34 },
  { rank: 15, team: "Everton", played: 29, won: 7, drawn: 13, lost: 9, gd: -4, points: 34 },
  { rank: 16, team: "Crystal Palace", played: 28, won: 10, drawn: 9, lost: 9, gd: 3, points: 39 },
  { rank: 17, team: "Wolverhampton Wanderers", played: 29, won: 7, drawn: 5, lost: 17, gd: -18, points: 26 },
  { rank: 18, team: "Ipswich Town", played: 29, won: 3, drawn: 8, lost: 18, gd: -34, points: 17 },
  { rank: 19, team: "Leicester City", played: 28, won: 3, drawn: 5, lost: 20, gd: -28, points: 14 },
  { rank: 20, team: "Southampton", played: 29, won: 1, drawn: 4, lost: 24, gd: -39, points: 7 },
]

const MOCK_TOP_SCORERS = [
  { rank: 1, name: "Erling Haaland", team: "Manchester City", goals: 18 },
  { rank: 2, name: "Mohamed Salah", team: "Liverpool", goals: 15 },
  { rank: 3, name: "Harry Kane", team: "Tottenham", goals: 14 },
]

// API Configuration
const API_BASE_URL = "http://localhost:5000" // Premier League API endpoint
const useLocalAPI = false // Set to true when you have the Flask API running locally

// Global state
let windows = []
let zIndexCounter = 100

// Fantasy Team state
let fantasyTeam = {
  formation: "4-3-3",
  goalkeeper: null,
  defenders: [],
  midfielders: [],
  forwards: [],
}

let currentChallenge = null
let selectedPosition = null
let selectedIndex = null

// Formation definitions
const FORMATIONS = {
  "4-3-3": { def: 4, mid: 3, fwd: 3 },
  "4-4-2": { def: 4, mid: 4, fwd: 2 },
  "3-5-2": { def: 3, mid: 5, fwd: 2 },
  "5-3-2": { def: 5, mid: 3, fwd: 2 },
  "4-2-3-1": { def: 4, mid: 5, fwd: 1 },
  "3-4-3": { def: 3, mid: 4, fwd: 3 },
}

// Fantasy Challenges
const CHALLENGES = [
  {
    id: "budget",
    name: "Budget Beast",
    icon: "💰",
    description: "Build the best team under £50M total value",
    maxBudget: 50,
  },
  {
    id: "future-stars",
    name: "Future Stars",
    icon: "🌟",
    description: "Players under 23 years old only",
    maxAge: 23,
  },
  {
    id: "dream-team",
    name: "Dream Team",
    icon: "👑",
    description: "No budget limit - pick your ultimate XI",
    maxBudget: null,
  },
  {
    id: "one-club",
    name: "One Club Army",
    icon: "🏠",
    description: "All players must be from the same team",
    sameTeam: true,
  },
  {
    id: "underdog",
    name: "Underdog XI",
    icon: "🐕",
    description: "Only players from bottom 10 teams",
    bottomTeams: true,
  },
]

// Players Database by Position
const FANTASY_PLAYERS = {
  GK: [
    {
      id: 1,
      name: "Alisson",
      team: "Liverpool",
      value: 12,
      age: 32,
      rating: 89,
      image: "https://media.api-sports.io/football/teams/40.png",
    },
    {
      id: 2,
      name: "Ederson",
      team: "Man City",
      value: 11,
      age: 31,
      rating: 88,
      image: "https://media.api-sports.io/football/teams/50.png",
    },
    {
      id: 3,
      name: "David Raya",
      team: "Arsenal",
      value: 10,
      age: 29,
      rating: 86,
      image: "https://media.api-sports.io/football/teams/42.png",
    },
    {
      id: 4,
      name: "André Onana",
      team: "Man United",
      value: 9,
      age: 28,
      rating: 84,
      image: "https://media.api-sports.io/football/teams/33.png",
    },
    {
      id: 5,
      name: "Robert Sánchez",
      team: "Chelsea",
      value: 8,
      age: 27,
      rating: 82,
      image: "https://media.api-sports.io/football/teams/49.png",
    },
    {
      id: 6,
      name: "Nick Pope",
      team: "Newcastle",
      value: 8,
      age: 32,
      rating: 83,
      image: "https://media.api-sports.io/football/teams/34.png",
    },
    {
      id: 7,
      name: "Jordan Pickford",
      team: "Everton",
      value: 7,
      age: 30,
      rating: 82,
      image: "https://media.api-sports.io/football/teams/45.png",
    },
    {
      id: 8,
      name: "Guglielmo Vicario",
      team: "Tottenham",
      value: 8,
      age: 28,
      rating: 83,
      image: "https://media.api-sports.io/football/teams/47.png",
    },
    {
      id: 9,
      name: "Matz Sels",
      team: "Nottm Forest",
      value: 6,
      age: 32,
      rating: 80,
      image: "https://media.api-sports.io/football/teams/65.png",
    },
    {
      id: 10,
      name: "Bernd Leno",
      team: "Fulham",
      value: 6,
      age: 32,
      rating: 81,
      image: "https://media.api-sports.io/football/teams/36.png",
    },
    {
      id: 11,
      name: "Mark Flekken",
      team: "Brentford",
      value: 5,
      age: 31,
      rating: 79,
      image: "https://media.api-sports.io/football/teams/55.png",
    },
    {
      id: 12,
      name: "Alphonse Areola",
      team: "West Ham",
      value: 5,
      age: 31,
      rating: 78,
      image: "https://media.api-sports.io/football/teams/48.png",
    },
  ],
  DEF: [
    {
      id: 13,
      name: "Virgil van Dijk",
      team: "Liverpool",
      value: 14,
      age: 33,
      rating: 90,
      image: "https://media.api-sports.io/football/teams/40.png",
    },
    {
      id: 14,
      name: "Trent Alexander-Arnold",
      team: "Liverpool",
      value: 13,
      age: 26,
      rating: 88,
      image: "https://media.api-sports.io/football/teams/40.png",
    },
    {
      id: 15,
      name: "William Saliba",
      team: "Arsenal",
      value: 13,
      age: 23,
      rating: 88,
      image: "https://media.api-sports.io/football/teams/42.png",
    },
    {
      id: 16,
      name: "Rúben Dias",
      team: "Man City",
      value: 12,
      age: 27,
      rating: 87,
      image: "https://media.api-sports.io/football/teams/50.png",
    },
    {
      id: 17,
      name: "Gabriel Magalhães",
      team: "Arsenal",
      value: 11,
      age: 27,
      rating: 86,
      image: "https://media.api-sports.io/football/teams/42.png",
    },
    {
      id: 18,
      name: "Joško Gvardiol",
      team: "Man City",
      value: 11,
      age: 22,
      rating: 85,
      image: "https://media.api-sports.io/football/teams/50.png",
    },
    {
      id: 19,
      name: "Kyle Walker",
      team: "Man City",
      value: 10,
      age: 34,
      rating: 84,
      image: "https://media.api-sports.io/football/teams/50.png",
    },
    {
      id: 20,
      name: "Lisandro Martínez",
      team: "Man United",
      value: 10,
      age: 26,
      rating: 84,
      image: "https://media.api-sports.io/football/teams/33.png",
    },
    {
      id: 21,
      name: "Levi Colwill",
      team: "Chelsea",
      value: 9,
      age: 21,
      rating: 82,
      image: "https://media.api-sports.io/football/teams/49.png",
    },
    {
      id: 22,
      name: "Kieran Trippier",
      team: "Newcastle",
      value: 8,
      age: 34,
      rating: 83,
      image: "https://media.api-sports.io/football/teams/34.png",
    },
    {
      id: 23,
      name: "Destiny Udogie",
      team: "Tottenham",
      value: 8,
      age: 22,
      rating: 81,
      image: "https://media.api-sports.io/football/teams/47.png",
    },
    {
      id: 24,
      name: "Pedro Porro",
      team: "Tottenham",
      value: 9,
      age: 25,
      rating: 83,
      image: "https://media.api-sports.io/football/teams/47.png",
    },
    {
      id: 25,
      name: "Antonee Robinson",
      team: "Fulham",
      value: 7,
      age: 27,
      rating: 80,
      image: "https://media.api-sports.io/football/teams/36.png",
    },
    {
      id: 26,
      name: "Marc Cucurella",
      team: "Chelsea",
      value: 8,
      age: 26,
      rating: 81,
      image: "https://media.api-sports.io/football/teams/49.png",
    },
    {
      id: 27,
      name: "Jarrad Branthwaite",
      team: "Everton",
      value: 7,
      age: 22,
      rating: 79,
      image: "https://media.api-sports.io/football/teams/45.png",
    },
    {
      id: 28,
      name: "Lewis Hall",
      team: "Newcastle",
      value: 6,
      age: 20,
      rating: 77,
      image: "https://media.api-sports.io/football/teams/34.png",
    },
  ],
  MID: [
    {
      id: 29,
      name: "Kevin De Bruyne",
      team: "Man City",
      value: 15,
      age: 33,
      rating: 91,
      image: "https://media.api-sports.io/football/teams/50.png",
    },
    {
      id: 30,
      name: "Martin Ødegaard",
      team: "Arsenal",
      value: 14,
      age: 26,
      rating: 89,
      image: "https://media.api-sports.io/football/teams/42.png",
    },
    {
      id: 31,
      name: "Bruno Fernandes",
      team: "Man United",
      value: 13,
      age: 30,
      rating: 88,
      image: "https://media.api-sports.io/football/teams/33.png",
    },
    {
      id: 32,
      name: "Declan Rice",
      team: "Arsenal",
      value: 13,
      age: 26,
      rating: 87,
      image: "https://media.api-sports.io/football/teams/42.png",
    },
    {
      id: 33,
      name: "Rodri",
      team: "Man City",
      value: 14,
      age: 28,
      rating: 90,
      image: "https://media.api-sports.io/football/teams/50.png",
    },
    {
      id: 34,
      name: "Cole Palmer",
      team: "Chelsea",
      value: 12,
      age: 22,
      rating: 86,
      image: "https://media.api-sports.io/football/teams/49.png",
    },
    {
      id: 35,
      name: "Bukayo Saka",
      team: "Arsenal",
      value: 14,
      age: 23,
      rating: 88,
      image: "https://media.api-sports.io/football/teams/42.png",
    },
    {
      id: 36,
      name: "Alexis Mac Allister",
      team: "Liverpool",
      value: 11,
      age: 26,
      rating: 85,
      image: "https://media.api-sports.io/football/teams/40.png",
    },
    {
      id: 37,
      name: "James Maddison",
      team: "Tottenham",
      value: 10,
      age: 28,
      rating: 84,
      image: "https://media.api-sports.io/football/teams/47.png",
    },
    {
      id: 38,
      name: "Eberechi Eze",
      team: "Crystal Palace",
      value: 9,
      age: 26,
      rating: 83,
      image: "https://media.api-sports.io/football/teams/52.png",
    },
    {
      id: 39,
      name: "Morgan Gibbs-White",
      team: "Nottm Forest",
      value: 8,
      age: 25,
      rating: 82,
      image: "https://media.api-sports.io/football/teams/65.png",
    },
    {
      id: 40,
      name: "Bruno Guimarães",
      team: "Newcastle",
      value: 10,
      age: 27,
      rating: 85,
      image: "https://media.api-sports.io/football/teams/34.png",
    },
    {
      id: 41,
      name: "Moisés Caicedo",
      team: "Chelsea",
      value: 10,
      age: 23,
      rating: 83,
      image: "https://media.api-sports.io/football/teams/49.png",
    },
    {
      id: 42,
      name: "Anthony Gordon",
      team: "Newcastle",
      value: 9,
      age: 24,
      rating: 82,
      image: "https://media.api-sports.io/football/teams/34.png",
    },
    {
      id: 43,
      name: "Dominik Szoboszlai",
      team: "Liverpool",
      value: 9,
      age: 24,
      rating: 82,
      image: "https://media.api-sports.io/football/teams/40.png",
    },
    {
      id: 44,
      name: "Andreas Pereira",
      team: "Fulham",
      value: 6,
      age: 28,
      rating: 78,
      image: "https://media.api-sports.io/football/teams/36.png",
    },
    {
      id: 45,
      name: "Yoane Wissa",
      team: "Brentford",
      value: 7,
      age: 28,
      rating: 79,
      image: "https://media.api-sports.io/football/teams/55.png",
    },
    {
      id: 46,
      name: "Ryan Gravenberch",
      team: "Liverpool",
      value: 8,
      age: 22,
      rating: 81,
      image: "https://media.api-sports.io/football/teams/40.png",
    },
  ],
  FWD: [
    {
      id: 47,
      name: "Erling Haaland",
      team: "Man City",
      value: 18,
      age: 24,
      rating: 94,
      image: "https://media.api-sports.io/football/teams/50.png",
    },
    {
      id: 48,
      name: "Mohamed Salah",
      team: "Liverpool",
      value: 16,
      age: 32,
      rating: 91,
      image: "https://media.api-sports.io/football/teams/40.png",
    },
    {
      id: 49,
      name: "Alexander Isak",
      team: "Newcastle",
      value: 14,
      age: 25,
      rating: 87,
      image: "https://media.api-sports.io/football/teams/34.png",
    },
    {
      id: 50,
      name: "Luis Díaz",
      team: "Liverpool",
      value: 12,
      age: 28,
      rating: 85,
      image: "https://media.api-sports.io/football/teams/40.png",
    },
    {
      id: 51,
      name: "Nicolas Jackson",
      team: "Chelsea",
      value: 10,
      age: 23,
      rating: 82,
      image: "https://media.api-sports.io/football/teams/49.png",
    },
    {
      id: 52,
      name: "Ollie Watkins",
      team: "Aston Villa",
      value: 11,
      age: 29,
      rating: 84,
      image: "https://media.api-sports.io/football/teams/66.png",
    },
    {
      id: 53,
      name: "Darwin Núñez",
      team: "Liverpool",
      value: 11,
      age: 25,
      rating: 83,
      image: "https://media.api-sports.io/football/teams/40.png",
    },
    {
      id: 54,
      name: "Son Heung-min",
      team: "Tottenham",
      value: 12,
      age: 32,
      rating: 86,
      image: "https://media.api-sports.io/football/teams/47.png",
    },
    {
      id: 55,
      name: "Kai Havertz",
      team: "Arsenal",
      value: 10,
      age: 25,
      rating: 83,
      image: "https://media.api-sports.io/football/teams/42.png",
    },
    {
      id: 56,
      name: "Dominic Solanke",
      team: "Tottenham",
      value: 9,
      age: 27,
      rating: 81,
      image: "https://media.api-sports.io/football/teams/47.png",
    },
    {
      id: 57,
      name: "Jean-Philippe Mateta",
      team: "Crystal Palace",
      value: 8,
      age: 27,
      rating: 80,
      image: "https://media.api-sports.io/football/teams/52.png",
    },
    {
      id: 58,
      name: "Chris Wood",
      team: "Nottm Forest",
      value: 7,
      age: 33,
      rating: 79,
      image: "https://media.api-sports.io/football/teams/65.png",
    },
    {
      id: 59,
      name: "Jhon Durán",
      team: "Aston Villa",
      value: 8,
      age: 21,
      rating: 78,
      image: "https://media.api-sports.io/football/teams/66.png",
    },
    {
      id: 60,
      name: "Raúl Jiménez",
      team: "Fulham",
      value: 6,
      age: 33,
      rating: 77,
      image: "https://media.api-sports.io/football/teams/36.png",
    },
    {
      id: 61,
      name: "Liam Delap",
      team: "Ipswich",
      value: 5,
      age: 21,
      rating: 74,
      image: "https://media.api-sports.io/football/teams/57.png",
    },
    {
      id: 62,
      name: "Matheus Cunha",
      team: "Wolves",
      value: 8,
      age: 25,
      rating: 80,
      image: "https://media.api-sports.io/football/teams/39.png",
    },
  ],
}

// Bottom 10 teams for underdog challenge
const BOTTOM_TEAMS = [
  "Wolves",
  "Ipswich",
  "Leicester",
  "Southampton",
  "Everton",
  "West Ham",
  "Crystal Palace",
  "Brentford",
  "Bournemouth",
  "Nottm Forest",
]

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  initClock()
  initDesktopIcons()
  initStartMenu()
  loadFantasyTeam() // Load fantasy team on initial load
})

// Clock
function initClock() {
  function updateClock() {
    const now = new Date()
    const hours = now.getHours() % 12 || 12
    const minutes = now.getMinutes().toString().padStart(2, "0")
    const ampm = now.getHours() >= 12 ? "PM" : "AM"
    document.getElementById("clock").textContent = `${hours}:${minutes} ${ampm}`
  }
  updateClock()
  setInterval(updateClock, 1000)
}

// Desktop Icons
function initDesktopIcons() {
  const icons = document.querySelectorAll(".desktop-icon[data-team]")
  icons.forEach((icon) => {
    makeDraggableIcon(icon)

    icon.addEventListener("dblclick", () => {
      const teamKey = icon.getAttribute("data-team")
      openTeamWindow(teamKey)
    })
  })

  document.getElementById("premierLeagueIcon").addEventListener("dblclick", () => {
    openFixturesWindow()
  })

  document.getElementById("fantasyIcon").addEventListener("dblclick", () => {
    openFantasyWindow()
  })

  makeDraggableIcon(document.getElementById("fantasyIcon"))
  makeDraggableIcon(document.getElementById("premierLeagueIcon"))
}

function makeDraggableIcon(icon) {
  let isDragging = false
  let currentX, currentY, initialX, initialY

  icon.addEventListener("mousedown", (e) => {
    if (e.detail === 2) return // Ignore double-clicks (for opening)
    isDragging = true
    initialX = e.clientX - icon.offsetLeft
    initialY = e.clientY - icon.offsetTop
    icon.style.position = "absolute"
    e.preventDefault()
  })

  document.addEventListener("mousemove", (e) => {
    if (isDragging) {
      e.preventDefault()
      currentX = e.clientX - initialX
      currentY = e.clientY - initialY
      icon.style.left = `${currentX}px`
      icon.style.top = `${currentY}px`
    }
  })

  document.addEventListener("mouseup", () => {
    isDragging = false
  })
}

// Start Menu
function initStartMenu() {
  const startButton = document.getElementById("startButton")
  const startMenu = document.getElementById("startMenu")

  startButton.addEventListener("click", (e) => {
    e.stopPropagation()
    startMenu.classList.toggle("hidden")
  })

  document.addEventListener("click", () => {
    startMenu.classList.add("hidden")
  })

  startMenu.addEventListener("click", (e) => {
    e.stopPropagation()
    const item = e.target.closest(".start-menu-item")
    if (item) {
      const action = item.getAttribute("data-action")
      handleStartMenuAction(action)
      startMenu.classList.add("hidden")
    }
  })
}

function handleStartMenuAction(action) {
  switch (action) {
    case "live":
    case "upcoming":
    case "today":
    case "yesterday":
    case "2days":
      openFixturesWindow(action)
      break
    case "standings":
      openStandingsWindow()
      break
    case "scorers":
      openTopScorersWindow()
      break
  }
}

// Window Management
function createWindow(title, content, width = 500, x = 200, y = 100) {
  const windowId = `window-${Date.now()}`
  const windowEl = document.createElement("div")
  windowEl.className = "window-popup active"
  windowEl.id = windowId
  windowEl.style.left = `${x}px`
  windowEl.style.top = `${y}px`
  windowEl.style.width = `${width}px`
  windowEl.style.zIndex = zIndexCounter++

  windowEl.innerHTML = `
    <div class="window-title-bar">
      <span class="window-title">${title}</span>
      <div class="window-controls">
        <button class="window-button minimize">_</button>
        <button class="window-button close">✕</button>
      </div>
    </div>
    <div class="window-content">
      ${content}
    </div>
  `

  document.getElementById("desktop").appendChild(windowEl)

  // Make draggable
  makeDraggable(windowEl)

  // Close button
  windowEl.querySelector(".close").addEventListener("click", () => {
    closeWindow(windowId)
  })

  // Click to focus
  windowEl.addEventListener("mousedown", () => {
    focusWindow(windowId)
  })

  // Add to taskbar
  addToTaskbar(windowId, title)

  windows.push({ id: windowId, title })

  return windowEl
}

function closeWindow(windowId) {
  const windowEl = document.getElementById(windowId)
  if (windowEl) {
    windowEl.remove()
  }
  removeFromTaskbar(windowId)
  windows = windows.filter((w) => w.id !== windowId)
}

function focusWindow(windowId) {
  const windowEl = document.getElementById(windowId)
  if (windowEl) {
    windowEl.style.zIndex = zIndexCounter++
    document.querySelectorAll(".window-popup").forEach((w) => w.classList.remove("active"))
    windowEl.classList.add("active")
  }
}

function makeDraggable(windowEl) {
  const titleBar = windowEl.querySelector(".window-title-bar")
  let isDragging = false
  let currentX, currentY, initialX, initialY

  titleBar.addEventListener("mousedown", (e) => {
    if (e.target.classList.contains("window-button")) return
    isDragging = true
    initialX = e.clientX - windowEl.offsetLeft
    initialY = e.clientY - windowEl.offsetTop
    focusWindow(windowEl.id)
  })

  document.addEventListener("mousemove", (e) => {
    if (isDragging) {
      e.preventDefault()
      currentX = e.clientX - initialX
      currentY = e.clientY - initialY
      windowEl.style.left = `${currentX}px`
      windowEl.style.top = `${currentY}px`
    }
  })

  document.addEventListener("mouseup", () => {
    isDragging = false
  })
}

// Taskbar
function addToTaskbar(windowId, title) {
  const taskbarWindows = document.getElementById("taskbarWindows")
  const button = document.createElement("button")
  button.className = "taskbar-window active"
  button.id = `taskbar-${windowId}`
  button.textContent = title
  button.addEventListener("click", () => focusWindow(windowId))
  taskbarWindows.appendChild(button)
}

function removeFromTaskbar(windowId) {
  const button = document.getElementById(`taskbar-${windowId}`)
  if (button) button.remove()
}

// Team Window
function openTeamWindow(teamKey) {
  const team = TEAMS[teamKey]
  if (!team) return

  const content = `
    <div class="content-padding team-info">
      <div class="team-badge">
        <div class="badge-frame">
          <img src="${team.badge}" alt="${team.name}">
        </div>
        <div class="team-name">${team.name}</div>
      </div>
      <div class="info-box">
        <div class="info-title">CLASSIC KIT</div>
        <div class="kit-display">
          <img src="${team.kit}" alt="${team.name} kit">
        </div>
      </div>
      <div class="info-box">
        <div class="info-title">CLUB LEGEND</div>
        <div class="player-info">
          <img src="${team.player.image}" alt="${team.player.name}" class="player-photo">
          <div class="player-details">
            <div class="player-name">${team.player.name}</div>
            <div class="player-era">${team.player.era}</div>
          </div>
        </div>
        <div class="player-stats-grid">
          <div class="stat-item">
            <div class="stat-value">${Math.floor(Math.random() * 200 + 100)}</div>
            <div class="stat-label">Appearances</div>
          </div>
          <div class="stat-item">
            <div class="stat-value">${Math.floor(Math.random() * 100 + 50)}</div>
            <div class="stat-label">Goals</div>
          </div>
          <div class="stat-item">
            <div class="stat-value">${Math.floor(Math.random() * 50 + 20)}</div>
            <div class="stat-label">Assists</div>
          </div>
          <div class="stat-item">
            <div class="stat-value">${(Math.random() * 2 + 7).toFixed(1)}</div>
            <div class="stat-label">Rating</div>
          </div>
        </div>
      </div>
    </div>
  `

  createWindow(`${team.name} - Team Info`, content, 520, 300 + windows.length * 30, 150 + windows.length * 30)
}

// Fixtures Window
async function openFixturesWindow(filter = "today") {
  const toolbar = `
    <div class="fixtures-toolbar">
      <button class="button-98" onclick="openFixturesWindow('2days')">2 Days Ago</button>
      <button class="button-98" onclick="openFixturesWindow('yesterday')">Yesterday</button>
      <button class="button-98" onclick="openFixturesWindow('today')">Today</button>
      <button class="button-98" onclick="openStandingsWindow()">Table</button>
      <button class="button-98" onclick="openTopScorersWindow()">Top Scorers</button>
    </div>
  `

  const fixtures = await fetchFixtures(filter)
  const fixturesList = fixtures
    .map(
      (fixture) => `
    <div class="fixture-item" onclick='openMatchDetails(${JSON.stringify(fixture).replace(/'/g, "&#39;")})'>
      <div class="fixture-teams">
        <span class="team-name-fix">${fixture.home.name}</span>
        <div class="fixture-score">
          <span class="score-number">${fixture.homeScore}</span>
          <span class="score-separator">:</span>
          <span class="score-number">${fixture.awayScore}</span>
        </div>
        <span class="team-name-fix" style="text-align: right">${fixture.away.name}</span>
      </div>
    </div>
  `,
    )
    .join("")

  const content = `
    ${toolbar}
    <div class="fixtures-list">
      <div class="date-header">Saturday, January 4, 2025</div>
      ${fixturesList}
    </div>
  `

  createWindow("Premier League - Fixtures", content, 700, 200, 100)
}

// Match Details
function openMatchDetails(fixture) {
  const homePred = Math.floor(Math.random() * 50 + 20)
  const drawPred = Math.floor(Math.random() * 30 + 15)
  const awayPred = 100 - homePred - drawPred

  const content = `
    <div class="match-details">
      <div class="match-header">
        <div class="match-team">
          <div class="match-team-logo">🏟️</div>
          <div class="match-team-name">${fixture.home.name}</div>
        </div>
        <div class="match-score-display">
          <div class="match-score-numbers">${fixture.homeScore} : ${fixture.awayScore}</div>
          <div class="match-status">Full Time</div>
        </div>
        <div class="match-team">
          <div class="match-team-logo">🏟️</div>
          <div class="match-team-name">${fixture.away.name}</div>
        </div>
      </div>
      
      <div class="info-box" style="margin: 16px 0;">
        <div class="info-title">MATCH PREDICTION (AI)</div>
        <div class="prediction-bar">
          <div class="prediction-team">${fixture.home.name}</div>
          <div class="prediction-visual">
            <div class="prediction-home" style="width: ${homePred}%">${homePred}%</div>
            <div class="prediction-draw" style="width: ${drawPred}%">${drawPred}%</div>
            <div class="prediction-away" style="width: ${awayPred}%">${awayPred}%</div>
          </div>
          <div class="prediction-team">${fixture.away.name}</div>
        </div>
        <div style="text-align: center; font-size: 10px; color: #808080; margin-top: 8px;">
          Win - Draw - Win predictions based on form, head-to-head, and statistics
        </div>
      </div>
      
      <div class="match-info">
        <div class="match-date"><strong>Date:</strong> ${new Date(fixture.date).toLocaleString()}</div>
      </div>
      <button class="button-98" style="width: 100%; margin-top: 12px" onclick="this.closest('.window-popup').querySelector('.close').click()">OK</button>
    </div>
  `

  createWindow(`Match - ${fixture.home.name} vs ${fixture.away.name}`, content, 550, 350, 200)
}

// Standings Window
async function openStandingsWindow() {
  const standings = await fetchStandings()
  const rows = standings
    .map(
      (s) => `
    <tr>
      <td>${s.rank}</td>
      <td>${s.team}</td>
      <td style="text-align: center">${s.played}</td>
      <td style="text-align: center">${s.won}</td>
      <td style="text-align: center">${s.drawn}</td>
      <td style="text-align: center">${s.lost}</td>
      <td style="text-align: center">${s.gd > 0 ? "+" : ""}${s.gd}</td>
      <td style="text-align: center"><strong>${s.points}</strong></td>
    </tr>
  `,
    )
    .join("")

  const content = `
    <table class="standings-table">
      <thead>
        <tr>
          <th>#</th>
          <th>Team</th>
          <th style="text-align: center">P</th>
          <th style="text-align: center">W</th>
          <th style="text-align: center">D</th>
          <th style="text-align: center">L</th>
          <th style="text-align: center">GD</th>
          <th style="text-align: center">Pts</th>
        </tr>
      </thead>
      <tbody>${rows}</tbody>
    </table>
  `

  createWindow("Premier League - Table", content, 650, 250, 120)
}

// Top Scorers Window
async function openTopScorersWindow() {
  const topScorers = await fetchTopScorers()
  const scorers = topScorers
    .map(
      (s) => `
    <div class="info-box" style="margin-bottom: 8px; display: flex; align-items: center; gap: 16px;">
      <div style="font-size: 24px; font-weight: bold; width: 32px;">${s.rank}</div>
      <div style="width: 48px; height: 48px; background: #dfdfdf; border: 2px solid black; display: flex; align-items: center; justify-content: center; font-size: 24px;">⚽</div>
      <div style="flex: 1;">
        <div style="font-weight: bold; color: black;">${s.name}</div>
        <div style="font-size: 11px; color: #808080;">${s.team}</div>
      </div>
      <div style="text-align: right;">
        <div style="font-size: 24px; font-weight: bold; color: black;">${s.goals}</div>
        <div style="font-size: 11px; color: #808080;">Goals</div>
      </div>
    </div>
  `,
    )
    .join("")

  const content = `
    <div class="content-padding">
      ${scorers}
    </div>
  `

  createWindow("Premier League - Top Scorers", content, 550, 300, 140)
}

function openFantasyWindow() {
  const content = `
    <div class="fantasy-container">
      <!-- Challenge Selection -->
      <div class="fantasy-challenges">
        <div class="info-title">SELECT CHALLENGE</div>
        <div class="challenge-grid">
          ${CHALLENGES.map(
            (c) => `
            <button class="challenge-btn ${currentChallenge?.id === c.id ? "active" : ""}" onclick="selectChallenge('${c.id}')">
              <span class="challenge-icon">${c.icon}</span>
              <span class="challenge-name">${c.name}</span>
            </button>
          `,
          ).join("")}
        </div>
        ${
          currentChallenge
            ? `
          <div class="challenge-description">
            <strong>${currentChallenge.name}:</strong> ${currentChallenge.description}
          </div>
        `
            : '<div class="challenge-description">Select a challenge to begin building your team!</div>'
        }
      </div>
      
      <!-- Formation Selection -->
      <div class="formation-selector">
        <div class="info-title">FORMATION</div>
        <div class="formation-buttons">
          ${Object.keys(FORMATIONS)
            .map(
              (f) => `
            <button class="formation-btn ${fantasyTeam.formation === f ? "active" : ""}" onclick="changeFormation('${f}')">${f}</button>
          `,
            )
            .join("")}
        </div>
      </div>
      
      <!-- Team Budget Display -->
      <div class="team-budget">
        <div class="budget-info">
          <span class="budget-label">Team Value:</span>
          <span class="budget-value">£${calculateTeamValue()}M</span>
        </div>
        ${
          currentChallenge?.maxBudget
            ? `
          <div class="budget-info ${calculateTeamValue() > currentChallenge.maxBudget ? "over-budget" : ""}">
            <span class="budget-label">Budget:</span>
            <span class="budget-value">£${currentChallenge.maxBudget}M</span>
          </div>
        `
            : ""
        }
        <div class="budget-info">
          <span class="budget-label">Avg Rating:</span>
          <span class="budget-value">${calculateTeamRating()}</span>
        </div>
      </div>
      
      <!-- Football Pitch -->
      <div class="fantasy-pitch">
        ${renderFormation()}
      </div>
      
      <!-- Controls -->
      <div class="fantasy-controls">
        <button class="button-98" onclick="saveFantasyTeam()">💾 Save</button>
        <button class="button-98" onclick="clearFantasyTeam()">🗑️ Clear</button>
        <button class="button-98" onclick="autoFillTeam()">🎲 Auto Fill</button>
        <button class="button-98" onclick="exportFantasyTeam()">📤 Share</button>
      </div>
    </div>
  `

  createWindow("Fantasy Premier League - Team Builder", content, 750, 150, 50)
}

function renderFormation() {
  const formation = FORMATIONS[fantasyTeam.formation]

  // Initialize arrays if needed
  while (fantasyTeam.defenders.length < formation.def) fantasyTeam.defenders.push(null)
  while (fantasyTeam.midfielders.length < formation.mid) fantasyTeam.midfielders.push(null)
  while (fantasyTeam.forwards.length < formation.fwd) fantasyTeam.forwards.push(null)

  // Trim arrays if formation has fewer slots
  fantasyTeam.defenders = fantasyTeam.defenders.slice(0, formation.def)
  fantasyTeam.midfielders = fantasyTeam.midfielders.slice(0, formation.mid)
  fantasyTeam.forwards = fantasyTeam.forwards.slice(0, formation.fwd)

  return `
    <!-- Forwards Row -->
    <div class="pitch-row forwards-row">
      ${fantasyTeam.forwards.map((p, i) => renderPlayerSlot(p, "FWD", "forwards", i)).join("")}
    </div>
    
    <!-- Midfielders Row -->
    <div class="pitch-row midfielders-row">
      ${fantasyTeam.midfielders.map((p, i) => renderPlayerSlot(p, "MID", "midfielders", i)).join("")}
    </div>
    
    <!-- Defenders Row -->
    <div class="pitch-row defenders-row">
      ${fantasyTeam.defenders.map((p, i) => renderPlayerSlot(p, "DEF", "defenders", i)).join("")}
    </div>
    
    <!-- Goalkeeper Row -->
    <div class="pitch-row goalkeeper-row">
      ${renderPlayerSlot(fantasyTeam.goalkeeper, "GK", "goalkeeper", 0)}
    </div>
  `
}

function renderPlayerSlot(player, positionType, position, index) {
  if (player) {
    return `
      <div class="player-slot filled" onclick="openPlayerSelector('${positionType}', '${position}', ${index})">
        <div class="player-kit">
          <img src="${player.image}" alt="${player.team}" onerror="this.src='/placeholder.svg?height=40&width=40'">
        </div>
        <div class="player-slot-name">${player.name.split(" ").pop()}</div>
        <div class="player-slot-info">£${player.value}M | ${player.rating}</div>
        <button class="remove-player" onclick="event.stopPropagation(); removePlayer('${position}', ${index})">×</button>
      </div>
    `
  }
  return `
    <div class="player-slot empty" onclick="openPlayerSelector('${positionType}', '${position}', ${index})">
      <div class="slot-position">${positionType}</div>
      <div class="slot-add">+</div>
    </div>
  `
}

function openPlayerSelector(positionType, position, index) {
  selectedPosition = position
  selectedIndex = index

  let players = FANTASY_PLAYERS[positionType]

  // Filter based on challenge
  if (currentChallenge) {
    if (currentChallenge.maxAge) {
      players = players.filter((p) => p.age <= currentChallenge.maxAge)
    }
    if (currentChallenge.bottomTeams) {
      players = players.filter((p) => BOTTOM_TEAMS.includes(p.team))
    }
    if (currentChallenge.sameTeam && getFirstTeam()) {
      players = players.filter((p) => p.team === getFirstTeam())
    }
  }

  // Filter out already selected players
  const selectedIds = getSelectedPlayerIds()
  players = players.filter((p) => !selectedIds.includes(p.id))

  const content = `
    <div class="player-selector">
      <div class="selector-header">
        <div class="info-title">SELECT ${positionType} - ${players.length} Available</div>
        <input type="text" class="player-search" placeholder="Search players..." oninput="filterPlayers(this.value, '${positionType}')">
      </div>
      <div class="player-list" id="playerList">
        ${players
          .map(
            (p) => `
          <div class="player-option" onclick="selectPlayer(${p.id}, '${positionType}')">
            <img src="${p.image}" alt="${p.team}" class="player-option-img" onerror="this.src='/placeholder.svg?height=32&width=32'">
            <div class="player-option-info">
              <div class="player-option-name">${p.name}</div>
              <div class="player-option-team">${p.team} | Age: ${p.age}</div>
            </div>
            <div class="player-option-stats">
              <div class="player-option-rating">${p.rating}</div>
              <div class="player-option-value">£${p.value}M</div>
            </div>
          </div>
        `,
          )
          .join("")}
      </div>
    </div>
  `

  createWindow(`Select ${positionType}`, content, 450, 250, 100)
}

function filterPlayers(search, positionType) {
  let players = FANTASY_PLAYERS[positionType]
  const selectedIds = getSelectedPlayerIds()
  players = players.filter((p) => !selectedIds.includes(p.id))

  if (search) {
    players = players.filter(
      (p) => p.name.toLowerCase().includes(search.toLowerCase()) || p.team.toLowerCase().includes(search.toLowerCase()),
    )
  }

  // Apply challenge filters
  if (currentChallenge) {
    if (currentChallenge.maxAge) {
      players = players.filter((p) => p.age <= currentChallenge.maxAge)
    }
    if (currentChallenge.bottomTeams) {
      players = players.filter((p) => BOTTOM_TEAMS.includes(p.team))
    }
    if (currentChallenge.sameTeam && getFirstTeam()) {
      players = players.filter((p) => p.team === getFirstTeam())
    }
  }

  const listEl = document.getElementById("playerList")
  if (listEl) {
    listEl.innerHTML = players
      .map(
        (p) => `
      <div class="player-option" onclick="selectPlayer(${p.id}, '${positionType}')">
        <img src="${p.image}" alt="${p.team}" class="player-option-img" onerror="this.src='/placeholder.svg?height=32&width=32'">
        <div class="player-option-info">
          <div class="player-option-name">${p.name}</div>
          <div class="player-option-team">${p.team} | Age: ${p.age}</div>
        </div>
        <div class="player-option-stats">
          <div class="player-option-rating">${p.rating}</div>
          <div class="player-option-value">£${p.value}M</div>
        </div>
      </div>
    `,
      )
      .join("")
  }
}

function selectPlayer(playerId, positionType) {
  const player = FANTASY_PLAYERS[positionType].find((p) => p.id === playerId)
  if (!player) return

  // Check budget constraint
  if (currentChallenge?.maxBudget) {
    const newValue = calculateTeamValue() + player.value
    if (newValue > currentChallenge.maxBudget) {
      alert(`Budget exceeded! Max £${currentChallenge.maxBudget}M`)
      return
    }
  }

  if (selectedPosition === "goalkeeper") {
    fantasyTeam.goalkeeper = player
  } else {
    fantasyTeam[selectedPosition][selectedIndex] = player
  }

  // Close selector window
  const selectorWindow = Array.from(document.querySelectorAll(".window-popup")).find((w) =>
    w.querySelector(".window-title")?.textContent.includes("Select"),
  )
  if (selectorWindow) {
    selectorWindow.querySelector(".close").click()
  }

  refreshFantasyWindow()
}

function removePlayer(position, index) {
  if (position === "goalkeeper") {
    fantasyTeam.goalkeeper = null
  } else {
    fantasyTeam[position][index] = null
  }
  refreshFantasyWindow()
}

function getSelectedPlayerIds() {
  const ids = []
  if (fantasyTeam.goalkeeper) ids.push(fantasyTeam.goalkeeper.id)
  fantasyTeam.defenders.forEach((p) => p && ids.push(p.id))
  fantasyTeam.midfielders.forEach((p) => p && ids.push(p.id))
  fantasyTeam.forwards.forEach((p) => p && ids.push(p.id))
  return ids
}

function getFirstTeam() {
  if (fantasyTeam.goalkeeper) return fantasyTeam.goalkeeper.team
  for (const p of fantasyTeam.defenders) if (p) return p.team
  for (const p of fantasyTeam.midfielders) if (p) return p.team
  for (const p of fantasyTeam.forwards) if (p) return p.team
  return null
}

function calculateTeamValue() {
  let value = 0
  if (fantasyTeam.goalkeeper) value += fantasyTeam.goalkeeper.value
  fantasyTeam.defenders.forEach((p) => p && (value += p.value))
  fantasyTeam.midfielders.forEach((p) => p && (value += p.value))
  fantasyTeam.forwards.forEach((p) => p && (value += p.value))
  return value
}

function calculateTeamRating() {
  let total = 0
  let count = 0
  if (fantasyTeam.goalkeeper) {
    total += fantasyTeam.goalkeeper.rating
    count++
  }
  fantasyTeam.defenders.forEach((p) => {
    if (p) {
      total += p.rating
      count++
    }
  })
  fantasyTeam.midfielders.forEach((p) => {
    if (p) {
      total += p.rating
      count++
    }
  })
  fantasyTeam.forwards.forEach((p) => {
    if (p) {
      total += p.rating
      count++
    }
  })
  return count > 0 ? (total / count).toFixed(1) : "-"
}

function selectChallenge(challengeId) {
  currentChallenge = CHALLENGES.find((c) => c.id === challengeId)
  // Clear team when changing challenge
  clearFantasyTeam(true)
  refreshFantasyWindow()
}

function changeFormation(formation) {
  fantasyTeam.formation = formation
  refreshFantasyWindow()
}

function refreshFantasyWindow() {
  const fantasyWindow = Array.from(document.querySelectorAll(".window-popup")).find((w) =>
    w.querySelector(".window-title")?.textContent.includes("Fantasy Premier League"),
  )
  if (fantasyWindow) {
    fantasyWindow.querySelector(".close").click()
  }
  openFantasyWindow()
}

function autoFillTeam() {
  const formation = FORMATIONS[fantasyTeam.formation]

  let availableGK = [...FANTASY_PLAYERS.GK]
  let availableDEF = [...FANTASY_PLAYERS.DEF]
  let availableMID = [...FANTASY_PLAYERS.MID]
  let availableFWD = [...FANTASY_PLAYERS.FWD]

  // Apply challenge filters
  if (currentChallenge) {
    if (currentChallenge.maxAge) {
      availableGK = availableGK.filter((p) => p.age <= currentChallenge.maxAge)
      availableDEF = availableDEF.filter((p) => p.age <= currentChallenge.maxAge)
      availableMID = availableMID.filter((p) => p.age <= currentChallenge.maxAge)
      availableFWD = availableFWD.filter((p) => p.age <= currentChallenge.maxAge)
    }
    if (currentChallenge.bottomTeams) {
      availableGK = availableGK.filter((p) => BOTTOM_TEAMS.includes(p.team))
      availableDEF = availableDEF.filter((p) => BOTTOM_TEAMS.includes(p.team))
      availableMID = availableMID.filter((p) => BOTTOM_TEAMS.includes(p.team))
      availableFWD = availableFWD.filter((p) => BOTTOM_TEAMS.includes(p.team))
    }
    if (currentChallenge.sameTeam) {
      // Pick a random team that has enough players
      const teams = [...new Set([...availableGK, ...availableDEF, ...availableMID, ...availableFWD].map((p) => p.team))]
      const randomTeam = teams[Math.floor(Math.random() * teams.length)]
      availableGK = availableGK.filter((p) => p.team === randomTeam)
      availableDEF = availableDEF.filter((p) => p.team === randomTeam)
      availableMID = availableMID.filter((p) => p.team === randomTeam)
      availableFWD = availableFWD.filter((p) => p.team === randomTeam)
    }
  }

  // Shuffle arrays
  const shuffle = (arr) => arr.sort(() => Math.random() - 0.5)
  shuffle(availableGK)
  shuffle(availableDEF)
  shuffle(availableMID)
  shuffle(availableFWD)

  // Sort by value for budget challenge
  if (currentChallenge?.maxBudget) {
    availableGK.sort((a, b) => a.value - b.value)
    availableDEF.sort((a, b) => a.value - b.value)
    availableMID.sort((a, b) => a.value - b.value)
    availableFWD.sort((a, b) => a.value - b.value)
  }

  // Fill team
  fantasyTeam.goalkeeper = availableGK[0] || null
  fantasyTeam.defenders = availableDEF.slice(0, formation.def)
  fantasyTeam.midfielders = availableMID.slice(0, formation.mid)
  fantasyTeam.forwards = availableFWD.slice(0, formation.fwd)

  // Pad arrays if not enough players
  while (fantasyTeam.defenders.length < formation.def) fantasyTeam.defenders.push(null)
  while (fantasyTeam.midfielders.length < formation.mid) fantasyTeam.midfielders.push(null)
  while (fantasyTeam.forwards.length < formation.fwd) fantasyTeam.forwards.push(null)

  refreshFantasyWindow()
}

function saveFantasyTeam() {
  localStorage.setItem("fantasyTeam", JSON.stringify(fantasyTeam))
  localStorage.setItem("currentChallenge", JSON.stringify(currentChallenge))
  alert("Team saved successfully!")
}

function loadFantasyTeam() {
  const saved = localStorage.getItem("fantasyTeam")
  const savedChallenge = localStorage.getItem("currentChallenge")
  if (saved) {
    fantasyTeam = JSON.parse(saved)
  }
  if (savedChallenge) {
    currentChallenge = JSON.parse(savedChallenge)
  }
}

function clearFantasyTeam(silent = false) {
  if (silent || confirm("Clear your entire fantasy team?")) {
    const formation = FORMATIONS[fantasyTeam.formation]
    fantasyTeam = {
      formation: fantasyTeam.formation,
      goalkeeper: null,
      defenders: Array(formation.def).fill(null),
      midfielders: Array(formation.mid).fill(null),
      forwards: Array(formation.fwd).fill(null),
    }
    if (!silent) {
      localStorage.removeItem("fantasyTeam")
      localStorage.removeItem("currentChallenge") // Also clear challenge on clear
      refreshFantasyWindow()
    }
  }
}

function exportFantasyTeam() {
  const formation = fantasyTeam.formation
  const gk = fantasyTeam.goalkeeper?.name || "Empty"
  const defs = fantasyTeam.defenders.map((p, i) => p?.name || "Empty").join(", ")
  const mids = fantasyTeam.midfielders.map((p, i) => p?.name || "Empty").join(", ")
  const fwds = fantasyTeam.forwards.map((p, i) => p?.name || "Empty").join(", ")

  const text = `🏆 MY FANTASY XI (${formation})
${currentChallenge ? `Challenge: ${currentChallenge.name} ${currentChallenge.icon}` : ""}

⚽ Value: £${calculateTeamValue()}M | Rating: ${calculateTeamRating()}

GK: ${gk}
DEF: ${defs}
MID: ${mids}
FWD: ${fwds}`

  // Copy to clipboard
  navigator.clipboard
    .writeText(text)
    .then(() => {
      alert("Team copied to clipboard!")
    })
    .catch((err) => {
      console.error("Failed to copy text: ", err)
      alert("Could not copy to clipboard. Here is your team:\n\n" + text)
    })
}

// API fetching functions
async function fetchFixtures(filter = "today") {
  if (!useLocalAPI) {
    return MOCK_FIXTURES
  }

  try {
    // Note: API provides fixtures/{team_name} but not all fixtures, using mock for now
    return MOCK_FIXTURES
  } catch (error) {
    console.error("Error fetching fixtures:", error)
    return MOCK_FIXTURES
  }
}

async function fetchStandings() {
  if (!useLocalAPI) {
    return MOCK_STANDINGS
  }

  try {
    const response = await fetch(`${API_BASE_URL}/table`)
    if (!response.ok) {
      throw new Error(`API returned ${response.status}`)
    }
    const data = await response.json()

    // Data format: [headers, ...rows] where each row is [Position, Team, Played, Wins, Draws, Losses, GD, Points]
    if (!Array.isArray(data) || data.length < 2) {
      throw new Error("Invalid data format from API")
    }

    // Skip first row (headers) and parse the rest
    return data.slice(1).map((row) => ({
      rank: Number.parseInt(row[0]) || 0,
      team: row[1] || "Unknown",
      played: Number.parseInt(row[2]) || 0,
      won: Number.parseInt(row[3]) || 0,
      drawn: Number.parseInt(row[4]) || 0,
      lost: Number.parseInt(row[5]) || 0,
      gd: Number.parseInt(row[6]) || 0,
      points: Number.parseInt(row[7]) || 0,
    }))
  } catch (error) {
    console.error("Error fetching standings:", error)
    return MOCK_STANDINGS
  }
}

async function fetchTopScorers() {
  if (!useLocalAPI) {
    return MOCK_TOP_SCORERS
  }

  try {
    // You could fetch multiple players and sort by goals if needed
    return MOCK_TOP_SCORERS
  } catch (error) {
    console.error("Error fetching top scorers:", error)
    return MOCK_TOP_SCORERS
  }
}

async function fetchPlayerStats(playerName) {
  if (!useLocalAPI) {
    return null
  }

  try {
    const response = await fetch(`${API_BASE_URL}/players/${encodeURIComponent(playerName)}`)
    if (!response.ok) {
      throw new Error(`API returned ${response.status}`)
    }
    const data = await response.json()
    // API returns array with player data: [{name, position, club, Nationality, Date of Birth, height, key_stats}]
    return data[0] || null
  } catch (error) {
    console.error("Error fetching player stats:", error)
    return null
  }
}

async function fetchTeamFixtures(teamName) {
  if (!useLocalAPI) {
    return []
  }

  try {
    const response = await fetch(`${API_BASE_URL}/fixtures/${encodeURIComponent(teamName)}`)
    if (!response.ok) {
      throw new Error(`API returned ${response.status}`)
    }
    const data = await response.json()
    // API returns array of fixture strings: ["Team A vs Team B DD/MM/YYYY HH:MM", ...]
    return data
  } catch (error) {
    console.error("Error fetching team fixtures:", error)
    return []
  }
}
