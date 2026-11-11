// ==========================================
// AKTUÁLNÍ OZNÁMENÍ PRO BFC (Zde provádíš úpravy)
// ==========================================
const bfcAktualita = {
    aktivni: true, // Pokud přepneš na 'false', oznámení se vůbec nezobrazí
    titulek: "Důležité upozornění",
    text: "Změna rozpisu zápasů v hale Moravany – zkontrolujte si čas!",
    datum: "Sobota 5. 9. 2026",
    cas: "9:00 – 15:00",
    misto: "Sportovní hala Moravany",
    detail: "Vzhledem k technickým důvodům se posunují zápasy základní skupiny. Prosíme týmy o 15minutový předstih."
};

// Automatické vygenerování kódu po načtení stránky
document.addEventListener("DOMContentLoaded", function() {
    if (!bfcAktualita.aktivni) return;

    // Vložení plovoucího banneru (pokud na stránce existuje kontejner s ID 'oznameni-box')
    const container = document.getElementById('oznameni-box');
    if (container) {
        container.innerHTML = `
            <div class="bg-bfcCard border border-bfcBorder rounded-2xl p-4 max-w-xl mx-auto my-4 shadow-2xl flex items-center justify-between gap-4 relative overflow-hidden">
                <div class="absolute top-0 left-0 bottom-0 w-1.5 bg-bfcRed"></div>
                <div class="flex items-center space-x-3 pl-2">
                    <div class="w-10 h-10 rounded-xl bg-bfcRed/10 border border-bfcRed/30 flex items-center justify-center text-bfcRed flex-shrink-0">
                        <i data-lucide="bell" class="w-5 h-5"></i>
                    </div>
                    <div>
                        <span class="text-[10px] font-bold uppercase tracking-wider text-bfcRed">${bfcAktualita.titulek}</span>
                        <p class="text-xs text-white font-medium">${bfcAktualita.text}</p>
                    </div>
                </div>
                <button onclick="openAlertModal()" class="px-4 py-2 bg-bfcRed hover:bg-red-700 text-white font-bold text-xs rounded-xl transition flex-shrink-0 shadow-lg shadow-bfcRed/20">
                    Více
                </button>
            </div>

            <!-- Modální okno s detailem -->
            <div id="bfc-alert-modal" class="hidden fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
                <div class="bg-bfcCard border border-bfcBorder rounded-3xl p-6 md:p-8 max-w-lg w-full space-y-5 shadow-2xl relative">
                    <button onclick="closeAlertModal()" class="absolute top-6 right-6 p-2 rounded-xl bg-bfcDark border border-bfcBorder text-gray-400 hover:text-white transition">
                        <i data-lucide="x" class="w-5 h-5"></i>
                    </button>
                    <div class="space-y-1">
                        <span class="text-[10px] font-bold uppercase tracking-wider text-bfcRed bg-bfcRed/10 px-2.5 py-1 rounded-full border border-bfcRed/30">Upozornění</span>
                        <h2 class="text-xl font-black text-white pt-2">${bfcAktualita.titulek}</h2>
                    </div>
                    <div class="bg-bfcDark border border-bfcBorder rounded-2xl p-4 space-y-3 text-xs text-gray-300">
                        <div class="flex justify-between border-b border-bfcBorder pb-2">
                            <span class="text-gray-400">Kdy</span>
                            <span class="font-bold text-white">${bfcAktualita.datum}</span>
                        </div>
                        <div class="flex justify-between border-b border-bfcBorder pb-2">
                            <span class="text-gray-400">Čas</span>
                            <span class="font-bold text-white">${bfcAktualita.cas}</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-gray-400">Kde</span>
                            <span class="font-bold text-white">${bfcAktualita.misto}</span>
                        </div>
                    </div>
                    <p class="text-xs text-gray-400 leading-relaxed">${bfcAktualita.detail}</p>
                    <button onclick="closeAlertModal()" class="w-full py-3 bg-bfcDark hover:bg-bfcRed text-white font-bold text-xs rounded-xl transition border border-bfcBorder hover:border-bfcRed">
                        Rozumím / Zavřít
                    </button>
                </div>
            </div>
        `;
        
        // Inicializace ikon, pokud používáš Lucide
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }
});

function openAlertModal() {
    const modal = document.getElementById('bfc-alert-modal');
    if (modal) modal.classList.remove('hidden');
}
function closeAlertModal() {
    const modal = document.getElementById('bfc-alert-modal');
    if (modal) modal.classList.add('hidden');
}
