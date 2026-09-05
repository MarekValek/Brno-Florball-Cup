-- 1. Tabulka pro Turnaje / Kategorie (např. BFC 2026 - Muži, BFC 2026 - Junioři)
CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL, -- např. "Muži PRO", "U17"
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 2. Tabulka pro Týmy
CREATE TABLE teams (
    id SERIAL PRIMARY KEY,
    category_id INT REFERENCES categories(id) ON DELETE CASCADE,
    name VARCHAR(100) NOT NULL,
    logo_url VARCHAR(255),
    group_name VARCHAR(10) -- např. "A", "B" pro základní skupiny
);

-- 3. Tabulka pro Hráče (pro kanadské bodování)
CREATE TABLE players (
    id SERIAL PRIMARY KEY,
    team_id INT REFERENCES teams(id) ON DELETE CASCADE,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    jersey_number INT
);

-- 4. Tabulka pro Zápasy
CREATE TABLE matches (
    id SERIAL PRIMARY KEY,
    category_id INT REFERENCES categories(id) ON DELETE CASCADE,
    home_team_id INT REFERENCES teams(id),
    away_team_id INT REFERENCES teams(id),
    field_name VARCHAR(50), -- např. "Hala Vodova A"
    scheduled_at TIMESTAMP NOT NULL,
    status VARCHAR(20) DEFAULT 'SCHEDULED', -- SCHEDULED, LIVE, FINISHED
    home_score INT DEFAULT 0,
    away_score INT DEFAULT 0
);

-- 5. Tabulka pro Události v zápase (Góly, Asistence, Vyloučení)
CREATE TABLE match_events (
    id SERIAL PRIMARY KEY,
    match_id INT REFERENCES matches(id) ON DELETE CASCADE,
    team_id INT REFERENCES teams(id),
    player_id INT REFERENCES players(id),
    assistant_id INT REFERENCES players(id), -- Hráč, který přihrával
    event_type VARCHAR(20) NOT NULL, -- 'GOAL', 'PENALTY'
    minute INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
