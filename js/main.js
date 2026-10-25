// --- LOGIKA ČASOMÍRY PRO BFC ---
let courtsCount = 3;
let courtsData = [
    { id: 1, time: 480, running: false, period: 1, score1: 0, score2: 0, team1: "TROOPERS Orange", team2: "Bulldogs Brno Black" },
    { id: 2, time: 480, running: false, period: 1, score1: 0, score2: 0, team1: "Aligators WUTC", team2: "Orel Vyškov" },
    { id: 3, time: 480, running: false, period: 1, score1: 0, score2: 0, team1: "Florbal Židenice", team2: "TROOPERS Black" }
];
let timerInterval = null;

function setCourtsCount(count) {
    courtsCount = count;
    renderCourts();
}

function renderCourts() {
    const container = document.getElementById('courts-container');
    if(!container) return;
    container.innerHTML = '';

    for(let i = 0; i < courtsCount; i++) {
        const c = courtsData[i];
        const mins = String(Math.floor(c.time / 60)).padStart(2, '0');
        const secs = String(c.time % 60).padStart(2, '0');

        const card = document.createElement('div');
        card.className = "bg-bfcCard border border-bfcBorder rounded-2xl p-6 space-y-4";
        card.innerHTML = `
            <div class="flex justify-between items-center border-b border-bfcBorder pb-2">
                <span class="font-bold text-white">Hřiště ${c.id}</span>
                <span class="text-xs bg-bfcCardHover px-2 py-1 rounded text-bfcRed font-bold">${c.period}. perioda</span>
            </div>
            <div class="space-y-2">
                <div class="flex justify-between text-sm font-semibold text-white">
                    <span>${c.team1}</span>
                    <div class="space-x-1">
                        <button onclick="updateScore(${i},1,-1)" class="px-1.5 bg-bfcBorder rounded">-</button>
                        <span class="text-bfcRed font-bold">${c.score1}</span>
                        <button onclick="updateScore(${i},1,1)" class="px-1.5 bg-bfcBorder rounded">+</button>
                    </div>
                </div>
                <div class="flex justify-between text-sm font-semibold text-white">
                    <span>${c.team2}</span>
                    <div class="space-x-1">
                        <button onclick="updateScore(${i},2,-1)" class="px-1.5 bg-bfcBorder rounded">-</button>
                        <span class="text-bfcRed font-bold">${c.score2}</span>
                        <button onclick="updateScore(${i},2,1)" class="px-1.5 bg-bfcBorder rounded">+</button>
                    </div>
                </div>
            </div>
            <div class="text-center py-4 bg-bfcDark rounded-xl border border-bfcBorder">
                <div class="text-4xl font-black text-emerald-400">${mins}:${secs}</div>
            </div>
            <div class="grid grid-cols-2 gap-2">
                <button onclick="toggleTimer(${i})" class="py-2 rounded-lg font-bold text-xs ${c.running ? 'bg-amber-600' : 'bg-emerald-600'} text-white">
                    ${c.running ? 'Pauza' : 'Spustit'}
                </button>
                <button onclick="resetTimer(${i})" class="py-2 bg-bfcCardHover border border-bfcBorder rounded-lg font-bold text-xs text-gray-300">Reset</button>
            </div>
        `;
        container.appendChild(card);
    }
}

function toggleTimer(idx) {
    courtsData[idx].running = !courtsData[idx].running;
    checkInterval();
    renderCourts();
}

function resetTimer(idx) {
    courtsData[idx].running = false;
    courtsData[idx].time = 480;
    checkInterval();
    renderCourts();
}

function updateScore(courtIdx, teamNum, delta) {
    if(teamNum === 1) courtsData[courtIdx].score1 = Math.max(0, courtsData[courtIdx].score1 + delta);
    else courtsData[courtIdx].score2 = Math.max(0, courtsData[courtIdx].score2 + delta);
    renderCourts();
}

function globalAction(action) {
    courtsData.slice(0, courtsCount).forEach(c => {
        if(action === 'start') c.running = true;
        if(action === 'pause') c.running = false;
        if(action === 'reset') { c.running = false; c.time = 480; }
    });
    checkInterval();
    renderCourts();
}

function checkInterval() {
    const anyRunning = courtsData.slice(0, courtsCount).some(c => c.running);
    if(anyRunning && !timerInterval) {
        timerInterval = setInterval(() => {
            courtsData.slice(0, courtsCount).forEach(c => {
                if(c.running && c.time > 0) c.time--;
            });
            renderCourts();
        }, 1000);
    } else if(!anyRunning && timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
}
