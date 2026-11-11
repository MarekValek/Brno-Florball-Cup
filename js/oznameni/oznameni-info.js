// ==========================================
// OZNÁMENÍ 1: Informace / Novinka (Modrá)
// ==========================================
const bfcAktualita = {
    aktivni: true,
    typ: "info",
    cas: "Novinka",
    titulek: "Spuštěn portál výplatnic.",
    text: "Pořadatelé a rozhodčí mohou využívat novou sekci.",
    
    nadpisDetailu: "Portál odměn",
    datum: "Průběžně",
    casDetail: "24/7",
    misto: "Admin sekce",
    detail: "Byl spuštěn nový zabezpečený portál pro správu odměn a výplatnic pro všechny pořadatele a rozhodčí."
};

document.addEventListener("DOMContentLoaded", function() {
    if (!bfcAktualita.aktivni) return;
    const container = document.getElementById('oznameni-box');
    if (!container) return;

    // Všechno pohromadě v jednom bloku pod sebou
    container.innerHTML = `
        <!-- Plovoucí banner s pulzující tečkou -->
        <div class="bg-[#181a1f]/90 border border-bfcBorder/80 backdrop-blur-xl rounded-2xl px-6 py-4 max-w-3xl mx-auto my-5 shadow-2xl flex items-center justify-between gap-4 text-left transition-all duration-300 hover:border-blue-500/50">
            
            <div class="flex items-center space-x-4">
                <div class="relative flex h-3 w-3 flex-shrink-0">
                  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span class="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                </div>
            
                <div class="text-xs sm:text-sm leading-snug">
                    <span class="font-black uppercase tracking-wider text-blue-400 mr-2">${bfcAktualita.cas}</span>
                    <span class="text-white font-medium">${bfcAktualita.titulek}</span>
                    <span class="text-gray-400 ml-1 hidden md:inline">${bfcAktualita.text}</span>
                </div>
            </div>

            <button onclick="openAlertModal()" class="px-4 py-2 bg-bfcDark hover:bg-blue-500 text-gray-200 hover:text-white font-bold text-xs rounded-xl border border-bfcBorder hover:border-blue-500 transition-all shadow flex-shrink-0">
                Více info
            </button>
        </div>

        <!-- Modální okno s detailem -->
        <div id="bfc-alert-modal" class="hidden fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
            <div class="bg-bfcCard border border-bfcBorder rounded-3xl p-6 md:p-8 max-w-lg w-full space-y-6 shadow-2xl relative text-left">
                <button onclick="closeAlertModal()" class="absolute top-6 right-6 p-2 rounded-xl bg-bfcDark border border-bfcBorder text-gray-400 hover:text-white transition">
                    <i data-lucide="x" class="w-5 h-5"></i>
                </button>
                <div class="space-y-1">
                    <span class="text-[10px] font-bold uppercase tracking-wider text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/30">Novinka</span>
                    <h2 class="text-2xl font-black text-white pt-2 uppercase tracking-wide">${bfcAktualita.nadpisDetailu}</h2>
                </div>
                <div class="bg-bfcDark border border-bfcBorder rounded-2xl p-4 space-y-3 text-xs text-gray-300">
                    <div class="flex justify-between border-b border-bfcBorder pb-2"><span class="text-gray-400">Kdy</span><span class="font-bold text-white">${bfcAktualita.datum}</span></div>
                    <div class="flex justify-between border-b border-bfcBorder pb-2"><span class="text-gray-400">Čas</span><span class="font-bold text-white">${bfcAktualita.casDetail}</span></div>
                    <div class="flex justify-between"><span class="text-gray-400">Kde</span><span class="font-bold text-white text-right">${bfcAktualita.misto}</span></div>
                </div>
                <div class="text-xs text-gray-300 whitespace-pre-line leading-relaxed">${bfcAktualita.detail}</div>
                <button onclick="closeAlertModal()" class="w-full py-3 bg-bfcRed hover:bg-red-700 text-white font-bold text-xs rounded-xl transition shadow-lg shadow-bfcRed/20">Rozumím / Zavřít</button>
            </div>
        </div>
    `;

    if (typeof lucide !== 'undefined') lucide.createIcons();
});

function openAlertModal() { 
    const modal = document.getElementById('bfc-alert-modal');
    if (modal) {
        modal.classList.remove('hidden');
        modal.classList.add('flex');
    }
}

function closeAlertModal() { 
    const modal = document.getElementById('bfc-alert-modal');
    if (modal) {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
    }
}
