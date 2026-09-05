const express = require('express');
const cors = require('cors');
const { calculateGroupStandings } = require('./standings');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Testovací data pro ověření funkčnosti
const mockTeams = [
  { id: 1, name: 'FBK Bulldogs Brno' },
  { id: 2, name: 'Florbal Židenice' },
  { id: 3, name: 'Gullivers Brno' }
];

const mockMatches = [
  { id: 1, home_team_id: 1, away_team_id: 2, home_score: 5, away_score: 3, status: 'FINISHED' },
  { id: 2, home_team_id: 2, away_team_id: 3, home_score: 2, away_score: 2, status: 'FINISHED' },
  { id: 3, home_team_id: 3, away_team_id: 1, home_score: 1, away_score: 4, status: 'FINISHED' }
];

// Endpoint pro získání aktuální tabulky
app.get('/api/standings', (req, res) => {
  const standings = calculateGroupStandings(mockTeams, mockMatches);
  res.json(standings);
});

// Endpoint pro zápasy
app.get('/api/matches', (req, res) => {
  res.json(mockMatches);
});

app.listen(PORT, () => {
  console.log(`BFC Server běží na portu ${PORT}`);
});
