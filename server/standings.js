/**
 * Spočíta tabulku skupiny na základě odehraných zápasů.
 * Pravidla: Výhra = 3b, Remíza = 1b, Prohra = 0b
 */
function calculateGroupStandings(teams, matches) {
  // 1. Inicializace statistik pro všechny týmy ve skupině
  const table = {};
  
  teams.forEach(team => {
    table[team.id] = {
      id: team.id,
      name: team.name,
      played: 0,
      wins: 0,
      draws: 0,
      losses: 0,
      goalsFor: 0,
      goalsAgainst: 0,
      goalDifference: 0,
      points: 0
    };
  });

  // 2. Procházení pouze odehraných zápasů (FINISHED)
  matches.forEach(match => {
    if (match.status !== 'FINISHED') return;

    const home = table[match.home_team_id];
    const away = table[match.away_team_id];

    if (!home || !away) return;

    home.played += 1;
    away.played += 1;
    home.goalsFor += match.home_score;
    home.goalsAgainst += match.away_score;
    away.goalsFor += match.away_score;
    away.goalsAgainst += match.home_score;

    // Logika bodování
    if (match.home_score > match.away_score) {
      home.wins += 1;
      home.points += 3;
      away.losses += 1;
    } else if (match.home_score < match.away_score) {
      away.wins += 1;
      away.points += 3;
      home.losses += 1;
    } else {
      home.draws += 1;
      home.points += 1;
      away.draws += 1;
      away.points += 1;
    }
  });

  // 3. Spočítání rozdílu skóre a seřazení (Body -> Rozdíl skóre -> Vstřelené góly)
  return Object.values(table)
    .map(team => ({
      ...team,
      goalDifference: team.goalsFor - team.goalsAgainst
    }))
    .sort((a, b) => {
      if (b.points !== a.points) return b.points - a.points;
      if (b.goalDifference !== a.goalDifference) return b.goalDifference - a.goalDifference;
      return b.goalsFor - a.goalsFor;
    });
}

module.exports = { calculateGroupStandings };
