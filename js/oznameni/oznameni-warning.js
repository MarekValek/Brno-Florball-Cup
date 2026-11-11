// ==========================================
// OZNÁMENÍ 2: Upozornění / Změna času (Žluté)
// ==========================================
const bfcAktualita = {
    aktivni: true,
    typ: "warning",
    cas: "Dnes 15:00",
    titulek: "Změna harmonogramu v hale Moravany.",
    text: "Prosíme všechny týmy o dodržování časového itineráře.",
    
    nadpisDetailu: "Změna harmonogramu",
    datum: "Sobota 5. 9. 2026",
    casDetail: "15:00 – 18:00",
    misto: "Sportovní hala Moravany",
    detail: "Vzhledem k prodloužení předchozího semifinále se odpolední blok zápasů posouvá o 15 minut.\n\nProsíme týmy, aby byly připraveny k zápasu s předstihem.\n\nDěkujeme za pochopení."
};

// Spouštěcí logika (vložení do stránky)
document.addEventListener("DOMContentLoaded", function() {
    if (!bfcAktualita.aktivni) return;
    const container = document.getElementById('oznameni-box');
    if (!container) return;

    container.innerHTML = `
        <div class="bg-[#121316]/75 border border-bfcBorder/80 backdrop-blur-md rounded-[2rem] p-5 max-w-xl mx-auto my-3 shadow-2xl flex items-start justify-between gap-4 text-left transition duration-300">
            <div class="w-11 h-11 rounded-full text-yellow-500 bg-yellow-500/20 border border-yellow-500/40 border flex items-center justify-center flex-shrink-0 mt-0.5 shadow-md">
                <i data-lucide="bell" class="w-5 h-5 stroke-[2.5]"></i>
            </div>
            <div class="flex-1 space-y-1 text-sm leading-snug">
                <p class="text-yellow-500 font-bold">${bfcAktualita.cas} · <span class="text-gray-200 font-normal">${bfcAktualita.titulek}</span></p>
                <p class="text-gray-400 text-xs font-normal">${bfcAktualita.text}</p>
            </div>
            <button onclick="openAlertModal()" class="px-5 py-2.5 bg-bfcDark/90 text-gray-200 font-semibold text-xs rounded-full border border-bfcBorder hover:bg-yellow-500 hover:text-black hover:border-yellow-500 transition flex-shrink-0 self-center shadow-lg">
                Více
            </button>
        </div>

        <div id="bfc-alert-modal" class="hidden fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
            <div class="bg-bfcCard border border-bfcBorder rounded-3xl p-6 md:p-8 max-w-lg w-full space-y-6 shadow-2xl relative text-left">
                <button onclick="closeAlertModal()" class="absolute top-6 right-6 p-2 rounded-xl bg-bfcDark border border-bfcBorder text-gray-400 hover:text-white transition">
                    <i data-lucide="x" class="w-5 h-5"></i>
                </button>
                <div class="space-y-1">
                    <span class="text-[10px] font-bold uppercase tracking-wider text-yellow-500 bg-yellow-500/10 px-3 py-1 rounded-full border border-yellow-500/30">Upozornění</span>
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

function openAlertModal() { document.getElementById('bfc-alert-modal')?.classList.remove('hidden'), document.getElementById('bfc-alert-modal')?.classList.add('flex'); }
function closeAlertModal() { document.getElementById('bfc-alert-modal')?.classList.add('hidden'); }
