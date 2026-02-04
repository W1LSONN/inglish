document.addEventListener('DOMContentLoaded', () => {
    // --- State & Elements ---
    const wordInput = document.getElementById('wordInput');
    const searchBtn = document.getElementById('searchBtn');
    const resultContainer = document.getElementById('resultContainer');
    const errorContainer = document.getElementById('errorContainer');
    const displayWord = document.getElementById('displayWord');
    const displayIPA = document.getElementById('displayIPA');
    const displaySpanish = document.getElementById('displaySpanish');
    const listenBtn = document.getElementById('listenBtn');

    // Tabs
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    const verbListContainer = document.getElementById('verbListContainer');

    let currentWord = '';

    // --- Initialization moved to bottom ---

    // --- Event Listeners ---
    searchBtn.addEventListener('click', handleSearch);
    wordInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') handleSearch();
    });

    listenBtn.addEventListener('click', () => {
        if (currentWord) speakWord(currentWord);
    });

    const printBtn = document.getElementById('printBtn');
    if (printBtn) {
        printBtn.addEventListener('click', () => {
            window.print();
        });
    }

    // --- Tab Logic ---
    function initTabs() {
        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all
                tabBtns.forEach(b => b.classList.remove('active'));
                tabContents.forEach(c => c.classList.add('hidden'));

                // Add active to clicked
                btn.classList.add('active');
                const tabId = btn.getAttribute('data-tab');

                if (tabId === 'search') {
                    document.getElementById('searchTab').classList.remove('hidden');
                } else if (tabId === 'practice') {
                    document.getElementById('practiceTab').classList.remove('hidden');
                } else if (tabId === 'project') {
                    document.getElementById('projectTab').classList.remove('hidden');
                    renderProjectSection();
                } else {
                    document.getElementById('verbsTab').classList.remove('hidden');
                }
            });
        });
    }

    // --- Search Logic ---
    async function handleSearch() {
        const word = wordInput.value.trim();
        if (!word) return;

        resultContainer.classList.add('hidden');
        errorContainer.classList.add('hidden');
        errorContainer.textContent = '';

        try {
            const data = await fetchWordData(word);
            displayResults(data);
        } catch (error) {
            showError("Sorry, word not found or error occurred.");
        }
    }

    async function fetchWordData(word) {
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word.toLowerCase()}`);
        if (!response.ok) throw new Error('Word not found');
        return await response.json();
    }

    function displayResults(data) {
        const entry = data[0];
        const word = entry.word;
        currentWord = word;

        let phoneticText = getPhonetic(entry);
        const spanishApprox = convertIPAToSpanish(phoneticText);

        displayWord.textContent = word;
        displayIPA.textContent = phoneticText;
        displaySpanish.textContent = spanishApprox;

        resultContainer.classList.remove('hidden');
    }

    function getPhonetic(entry) {
        if (entry.phonetic) return entry.phonetic;
        if (entry.phonetics) {
            const p = entry.phonetics.find(p => p.text);
            if (p) return p.text;
        }
        return '/???/';
    }

    function showError(msg) {
        errorContainer.textContent = msg;
        errorContainer.classList.remove('hidden');
    }

    function speakWord(text) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US';
        window.speechSynthesis.speak(utterance);
    }

    // --- IPA to Spanish Algorithm ---
    function convertIPAToSpanish(ipa) {
        if (!ipa || ipa === '/???/') return '???';
        let s = ipa.replace(/\//g, '');
        s = s.replace(/ˈ/g, '');
        s = s.replace(/ˌ/g, '');

        // Heuristics (Same as before)
        s = s.replace(/eɪ/g, 'ey');
        s = s.replace(/aɪ/g, 'ái');
        s = s.replace(/ɔɪ/g, 'ói');
        s = s.replace(/aʊ/g, 'áu');
        s = s.replace(/əʊ/g, 'ou');
        s = s.replace(/oʊ/g, 'ou');

        s = s.replace(/iː/g, 'í');
        s = s.replace(/uː/g, 'ú');
        s = s.replace(/ɔː/g, 'ó');
        s = s.replace(/ɑː/g, 'á');
        s = s.replace(/ɜː/g, 'er');

        s = s.replace(/ɪ/g, 'i');
        s = s.replace(/e/g, 'e');
        s = s.replace(/æ/g, 'a');
        s = s.replace(/ʌ/g, 'a');
        s = s.replace(/ɒ/g, 'o');
        s = s.replace(/ʊ/g, 'u');
        s = s.replace(/ə/g, 'e');

        s = s.replace(/j/g, 'y');
        s = s.replace(/w/g, 'u');
        s = s.replace(/ʃ/g, 'sh');
        s = s.replace(/tʃ/g, 'ch');
        s = s.replace(/dʒ/g, 'y');
        s = s.replace(/θ/g, 'z');
        s = s.replace(/ð/g, 'd');
        s = s.replace(/ŋ/g, 'ng');
        s = s.replace(/z/g, 's');
        s = s.replace(/v/g, 'v');
        s = s.replace(/ɹ/g, 'r');

        s = s.replace(/:/g, '');

        return s;
    }

    // --- Verb List Rendering ---
    function renderVerbs() {
        if (!typeof VERB_DATA) return;

        verbListContainer.innerHTML = '';
        verbListContainer.appendChild(createTable('Irregular Verbs', VERB_DATA.irregular));
        verbListContainer.appendChild(createTable('Regular Verbs (ID Sound)', VERB_DATA.regularId));
        verbListContainer.appendChild(createTable('Regular Verbs (T Sound)', VERB_DATA.regularT));
        verbListContainer.appendChild(createTable('Regular Verbs (D Sound)', VERB_DATA.regularD));
    }

    function createTable(title, data) {
        const section = document.createElement('div');
        section.className = 'verb-category';

        const h2 = document.createElement('h2');
        h2.textContent = title;
        section.appendChild(h2);

        const tableWrapper = document.createElement('div');
        tableWrapper.className = 'table-wrapper';

        const table = document.createElement('table');
        table.innerHTML = `
            <thead>
                <tr>
                    <th>Infinitive</th>
                    <th>Past</th>
                    <th>Participle</th>
                    <th>Past Continuous</th>
                    <th>Spanish</th>
                    <th class="ipa-cell">Pronunciation</th>
                </tr>
            </thead>
            <tbody></tbody>
        `;

        const tbody = table.querySelector('tbody');
        data.forEach(verb => {
            const tr = document.createElement('tr');
            tr.className = 'verb-row';

            // Get Spanish conjugations
            const esForms = conjugateSpanish(verb.spanish);

            tr.innerHTML = `
                <td class="verb-word" title="Click to listen" onclick="window.speakText('${escapeQuotes(cleanWord(verb.infinitive))}')">🔊 ${verb.infinitive}</td>
                <td class="interactive-cell">
                    <div class="clickable-word" onclick="window.speakText('${escapeQuotes(cleanWord(verb.past))}')" title="Click to listen">
                        🔊 ${verb.past}
                    </div>
                    <div class="ipa-wrapper">
                        <button class="ipa-btn xs-btn" onclick="window.loadIPA(this, '${cleanWord(verb.past)}', '${escapeQuotes(esForms.past)}')">IPA</button>
                        <div class="ipa-result hidden"></div>
                    </div>
                </td>
                <td class="interactive-cell">
                    <div class="clickable-word" onclick="window.speakText('${escapeQuotes(cleanWord(verb.participle))}')" title="Click to listen">
                        🔊 ${verb.participle}
                    </div>
                    <div class="ipa-wrapper">
                        <button class="ipa-btn xs-btn" onclick="window.loadIPA(this, '${cleanWord(verb.participle)}', '${escapeQuotes(esForms.participle)}')">IPA</button>
                        <div class="ipa-result hidden"></div>
                    </div>
                </td>
                <td class="interactive-cell">
                    <div class="clickable-word" onclick="window.speakText('${escapeQuotes(verb.pastContinuous)}')" title="Click to listen">
                        🔊 ${verb.pastContinuous}
                    </div>
                    <div class="ipa-wrapper">
                        <button class="ipa-btn xs-btn" onclick="window.loadIPA(this, '${verb.pastContinuous}', '${escapeQuotes(esForms.gerund)}')">IPA</button>
                        <div class="ipa-result hidden"></div>
                    </div>
                </td>
                <td>${verb.spanish}</td>
                <td class="ipa-cell">
                    <button class="ipa-btn" onclick="window.loadIPA(this, '${cleanWord(verb.infinitive)}', '${escapeQuotes(verb.spanish)}')">Show Phonetic</button>
                    <div class="ipa-result hidden"></div>
                </td>
            `;
            tbody.appendChild(tr);
        });

        tableWrapper.appendChild(table);
        section.appendChild(tableWrapper);
        return section;
    }

    // --- Spanish Conjugation Logic ---
    const SPANISH_IRREGULARS = {
        // Base forms to check against (lowercase)
        "ser": { past: "fue", participle: "sido", gerund: "siendo" },
        "estar": { past: "estuvo", participle: "estado", gerund: "estando" },
        "ir": { past: "fue", participle: "ido", gerund: "yendo" },
        "haber": { past: "hubo", participle: "habido", gerund: "habiendo" },
        "tener": { past: "tuvo", participle: "tenido", gerund: "teniendo" },
        "hacer": { past: "hizo", participle: "hecho", gerund: "haciendo" },
        "decir": { past: "dijo", participle: "dicho", gerund: "diciendo" },
        "ver": { past: "vio", participle: "visto", gerund: "viendo" },
        "venir": { past: "vino", participle: "venido", gerund: "viniendo" },
        "poner": { past: "puso", participle: "puesto", gerund: "poniendo" },
        "escribir": { past: "escribió", participle: "escrito", gerund: "escribiendo" },
        "romper": { past: "rompió", participle: "roto", gerund: "rompiendo" },
        "volver": { past: "volvió", participle: "vuelto", gerund: "volviendo" },
        "devolver": { past: "devolvió", participle: "devuelto", gerund: "devolviendo" },
        "morir": { past: "murió", participle: "muerto", gerund: "muriendo" },
        "abrir": { past: "abrió", participle: "abierto", gerund: "abriendo" },
        "cubrir": { past: "cubrió", participle: "cubierto", gerund: "cubriendo" },
        "freír": { past: "frió", participle: "frito", gerund: "friendo" },
        "resolver": { past: "resolvió", participle: "resuelto", gerund: "resolviendo" },
        "satisfacer": { past: "satisfizo", participle: "satisfecho", gerund: "satisfaciendo" },
        "traer": { past: "trajo", participle: "traído", gerund: "trayendo" },
        "leer": { past: "leyó", participle: "leído", gerund: "leyendo" },
        "oír": { past: "oyó", participle: "oído", gerund: "oyendo" },
        "caer": { past: "cayó", participle: "caído", gerund: "cayendo" },
        "dar": { past: "dio", participle: "dado", gerund: "dando" },
        "saber": { past: "supo", participle: "sabido", gerund: "sabiendo" },
        "caber": { past: "cupo", participle: "cabido", gerund: "cabiendo" },
        "poder": { past: "pudo", participle: "podido", gerund: "pudiendo" },
        "querer": { past: "quiso", participle: "querido", gerund: "queriendo" },
        "llegar a ser": { past: "llegó a ser", participle: "llegado a ser", gerund: "llegando a ser" },
        "llevar puesto": { past: "llevó puesto", participle: "llevado puesto", gerund: "llevando puesto" },
        "darse prisa": { past: "se dio prisa", participle: "dado prisa", gerund: "dándose prisa" },
        "arrojar": { past: "arrojó", participle: "arrojado", gerund: "arrojando" },
        "tirar": { past: "tiró", participle: "tirado", gerund: "tirando" }
    };

    function conjugateSpanish(meaningStr) {
        if (!meaningStr) return { past: '', participle: '', gerund: '' };

        // Handle separators like " / " or " o " or ","
        // We will split, conjugate each part, and join back
        const separators = /(\s\/\s|\s+o\s+|,\s*)/;
        const parts = meaningStr.split(separators);

        let pastParts = [];
        let partParts = [];
        let gerParts = [];

        parts.forEach(part => {
            if (part.match(separators)) {
                pastParts.push(part);
                partParts.push(part);
                gerParts.push(part);
            } else {
                const forms = getSingleSpanishConjugation(part.trim());
                pastParts.push(forms.past);
                partParts.push(forms.participle);
                gerParts.push(forms.gerund);
            }
        });

        return {
            past: capitalFirst(pastParts.join('')),
            participle: capitalFirst(partParts.join('')),
            gerund: capitalFirst(gerParts.join(''))
        };
    }

    function getSingleSpanishConjugation(word) {
        const lower = word.toLowerCase();

        // check irregulars
        if (SPANISH_IRREGULARS[lower]) {
            return SPANISH_IRREGULARS[lower];
        }

        // Regular rules
        let past = word;
        let participle = word;
        let gerund = word;

        if (lower.endsWith('ar')) {
            const root = word.slice(0, -2);
            past = root + 'ó';
            participle = root + 'ado';
            gerund = root + 'ando';
        } else if (lower.endsWith('er') || lower.endsWith('ir')) {
            const root = word.slice(0, -2);
            past = root + 'ió';
            participle = root + 'ido';
            gerund = root + 'iendo';
        }

        return { past, participle, gerund };
    }

    function capitalFirst(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    // Helper to clean word for API (remove parentheticals like "Be (am/is/are)" -> "Be")
    function cleanWord(str) {
        return str.split('(')[0].trim().split('/')[0].trim();
    }

    function escapeQuotes(str) {
        return str.replace(/'/g, "\\'");
    }

    // Global handlers for HTML onclick attributes
    window.speakText = function (text) {
        speakWord(text);
    }

    window.loadIPA = async function (btn, word, spanishMeaning = '') {
        const container = btn.nextElementSibling;
        btn.textContent = 'Loading...';

        try {
            const data = await fetchWordData(word);
            const entry = data[0];
            const ipa = getPhonetic(entry);
            const approx = convertIPAToSpanish(ipa);

            // Use provided Spanish meaning instead of English definition
            let definition = spanishMeaning || 'No translation';

            container.innerHTML = `
                <div class="ipa-text">${ipa}</div>
                <div class="spanish-text">${approx}</div>
                <div class="definition-text">${definition}</div>
            `;
            container.classList.remove('hidden');
            btn.classList.add('hidden'); // Hide button after loading
        } catch (e) {
            btn.textContent = 'Not Found';
            setTimeout(() => { btn.textContent = 'Show Phonetic'; }, 2000);
        }
    }
    // --- PRACTICE GAME LOGIC ---
    let gameScore = 0;
    let gameRound = 0;
    const MAX_ROUNDS = 10;
    let correctAnswer = '';
    let isGameActive = false;
    let currentMode = 'choice'; // 'choice' or 'typing'

    const startScreen = document.getElementById('startScreen');
    const gameScreen = document.getElementById('gameScreen');
    const feedbackScreen = document.getElementById('feedbackScreen');
    const questionCounter = document.getElementById('questionCounter');
    const scoreDisplay = document.getElementById('scoreDisplay');
    const questionText = document.getElementById('questionText');
    const optionsGrid = document.getElementById('optionsGrid');
    const typingArea = document.getElementById('typingArea');
    const typeInput = document.getElementById('typeInput');
    const submitTypeBtn = document.getElementById('submitTypeBtn');
    const feedbackMessage = document.getElementById('feedbackMessage');
    const lastScoreSection = document.getElementById('lastScoreSection');
    const lastScoreValue = document.getElementById('lastScoreValue');

    const startGameBtn = document.getElementById('startGameBtn');
    if (startGameBtn) startGameBtn.addEventListener('click', startGame);

    const nextQuestionBtn = document.getElementById('nextQuestionBtn');
    if (nextQuestionBtn) nextQuestionBtn.addEventListener('click', nextQuestion);

    if (submitTypeBtn) {
        submitTypeBtn.addEventListener('click', checkTypingAnswer);
        typeInput.addEventListener('keyup', (e) => {
            if (e.key === 'Enter') checkTypingAnswer();
        });
    }

    function startGame() {
        gameScore = 0;
        gameRound = 0;
        isGameActive = true;

        startScreen.classList.add('hidden');
        feedbackScreen.classList.add('hidden');
        gameScreen.classList.remove('hidden');

        loadQuestion();
    }

    function loadQuestion() {
        gameRound++;
        if (gameRound > MAX_ROUNDS) {
            endGame();
            return;
        }

        questionCounter.textContent = `Question ${gameRound}/${MAX_ROUNDS}`;
        scoreDisplay.textContent = `Score: ${gameScore}`;
        typeInput.value = ''; // Clear previous input

        // Randomly decide mode (50/50)
        currentMode = Math.random() > 0.5 ? 'choice' : 'typing';

        // Select main verb
        const verb = getRandomVerb();
        const type = Math.floor(Math.random() * 3); // 0: Spanish->Inf, 1: Inf->Past, 2: Inf->Participle

        // Define Question & Answer
        let qText = '';
        let ans = '';

        if (type === 0) {
            qText = `Translate "${verb.spanish}"`;
            ans = verb.infinitive;
        } else if (type === 1) {
            qText = `Past tense of "${verb.infinitive}"`;
            ans = verb.past;
        } else {
            qText = `Participle of "${verb.infinitive}"`;
            ans = verb.participle;
        }

        correctAnswer = cleanAnswer(ans); // Store clean version
        questionText.textContent = qText;

        if (currentMode === 'choice') {
            setupMultipleChoice(verb, type, ans);
        } else {
            setupTypingMode();
        }
    }

    function setupMultipleChoice(verb, type, rawAns) {
        optionsGrid.classList.remove('hidden');
        typingArea.classList.add('hidden');

        let distractors = [];
        if (type === 0) distractors = getDistractors(verb, 'infinitive');
        else if (type === 1) distractors = getDistractors(verb, 'past');
        else distractors = getDistractors(verb, 'participle');

        const options = [rawAns, ...distractors];
        shuffleArray(options);

        optionsGrid.innerHTML = '';
        options.forEach(opt => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.textContent = opt;
            btn.onclick = () => handleChoiceAnswer(opt);
            optionsGrid.appendChild(btn);
        });
    }

    function setupTypingMode() {
        optionsGrid.classList.add('hidden');
        typingArea.classList.remove('hidden');
        setTimeout(() => typeInput.focus(), 100);
    }

    function handleChoiceAnswer(selected) {
        const isCorrect = cleanAnswer(selected) === correctAnswer;
        showFeedback(isCorrect);
    }

    function checkTypingAnswer() {
        const userVal = cleanAnswer(typeInput.value);
        if (!userVal) return;

        const isCorrect = userVal === correctAnswer;
        showFeedback(isCorrect);
    }

    function showFeedback(isCorrect) {
        gameScreen.classList.add('hidden');
        feedbackScreen.classList.remove('hidden');
        feedbackScreen.className = 'game-section feedback-section'; // Reset & Add animation class

        if (isCorrect) {
            gameScore += 10;
            const praise = ["Excellent!", "Great job!", "Correct!", "Awesome!", "Spot on!"];
            const randomPraise = praise[Math.floor(Math.random() * praise.length)];

            feedbackMessage.innerHTML = `
                <div class="feedback-correct">
                    <span style="font-size: 3rem;">🎉</span><br>
                    ${randomPraise}
                </div>
                <div style="font-size: 1.2rem; margin-top: 10px;">+10 points</div>
            `;
        } else {
            feedbackMessage.innerHTML = `
                <div class="feedback-incorrect">
                    <span style="font-size: 3rem;">❌</span><br>
                    Incorrect
                </div>
                <div class="correct-answer-text">
                    Correct answer:<br>
                    <strong>${correctAnswer}</strong>
                </div>
            `;
        }
    }

    function nextQuestion() {
        feedbackScreen.classList.add('hidden');
        gameScreen.classList.remove('hidden');
        loadQuestion();
    }

    function endGame() {
        isGameActive = false;
        gameScreen.classList.add('hidden');
        startScreen.classList.remove('hidden');

        lastScoreValue.textContent = `${gameScore} / ${MAX_ROUNDS * 10}`;
        lastScoreSection.classList.remove('hidden');
    }

    // --- Helpers ---

    function cleanAnswer(str) {
        if (!str) return '';
        // Remove content in parenthesis, slashes, extra spaces, and lowercase it
        // e.g. "Was / Were" -> "was" (takes first option)
        // "Be (am/is/are)" -> "be"
        // "Started /id/" -> "started"

        let s = str.toLowerCase();
        s = s.split('(')[0]; // Remove (part)
        s = s.split('/')[0]; // Remove / part
        return s.trim();
    }

    function getRandomVerb() {
        // Collect all verbs
        const allVerbs = [
            ...VERB_DATA.irregular,
            ...VERB_DATA.regularId,
            ...VERB_DATA.regularT,
            ...VERB_DATA.regularD
        ];
        return allVerbs[Math.floor(Math.random() * allVerbs.length)];
    }

    function getDistractors(correctVerb, field) {
        const distractors = [];
        const allVerbs = [
            ...VERB_DATA.irregular,
            ...VERB_DATA.regularId,
            ...VERB_DATA.regularT,
            ...VERB_DATA.regularD
        ];

        while (distractors.length < 3) {
            const v = allVerbs[Math.floor(Math.random() * allVerbs.length)];
            const val = v[field];
            // Check against cleaned values to avoid "Started /id/" being diff from "Started /t/" if text is same
            if (cleanAnswer(val) !== cleanAnswer(correctVerb[field]) && !distractors.includes(val)) {
                distractors.push(val);
            }
        }
        return distractors;
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    // --- Project Section Logic ---
    function renderProjectSection() {
        const projectContainer = document.getElementById('projectContainer');
        if (!projectContainer) return;

        projectContainer.innerHTML = '';

        // Check if VERB_SENTENCES exists
        if (typeof VERB_SENTENCES === 'undefined') {
            projectContainer.innerHTML = '<p>Error: sentences.js not loaded.</p>';
            return;
        }

        const verbs = Object.keys(VERB_SENTENCES);
        if (verbs.length === 0) {
            projectContainer.innerHTML = '<p>No sentence data available yet.</p>';
            return;
        }

        verbs.forEach((verbKey, index) => {
            const data = VERB_SENTENCES[verbKey];
            const card = createVerbCard(verbKey, data, index + 1);
            projectContainer.appendChild(card);
        });
    }

    function createVerbCard(verbName, data, index) {
        const card = document.createElement('div');
        card.className = 'verb-sentence-card';

        const renderCell = (content) => {
            if (!content) return '-';
            // Handle if content is still an array (though we refactored to strings, just in case)
            if (Array.isArray(content)) {
                return `<ul class="sentence-list"><li>${content.join('</li><li>')}</li></ul>`;
            }
            return content;
        };

        const html = `
            <div class="verb-card-header">
                <div class="verb-card-title">${index}. ${verbName}</div>
            </div>
            <div class="verb-sentences-grid">
                <!-- Headers -->
                <div></div>
                <div class="grid-header">Present Simple</div>
                <div class="grid-header">Past Simple</div>
                <div class="grid-header">Present Continuous</div>
                <div class="grid-header">Present Perfect</div>
                <div class="grid-header">Future (Going To)</div>

                <!-- Positive Row -->
                <div class="row-label">Positiva <small>(+)</small></div>
                <div class="sentence-cell">${renderCell(data.presentSimple?.positive)}</div>
                <div class="sentence-cell">${renderCell(data.past?.positive)}</div>
                <div class="sentence-cell">${renderCell(data.presentContinuous?.positive)}</div>
                <div class="sentence-cell">${renderCell(data.presentPerfect?.positive)}</div>
                <div class="sentence-cell">${renderCell(data.goingTo?.positive)}</div>

                <!-- Negative Row -->
                <div class="row-label">Negativa <small>(-)</small></div>
                <div class="sentence-cell">${renderCell(data.presentSimple?.negative)}</div>
                <div class="sentence-cell">${renderCell(data.past?.negative)}</div>
                <div class="sentence-cell">${renderCell(data.presentContinuous?.negative)}</div>
                <div class="sentence-cell">${renderCell(data.presentPerfect?.negative)}</div>
                <div class="sentence-cell">${renderCell(data.goingTo?.negative)}</div>

                <!-- Question Row -->
                <div class="row-label">Pregunta <small>(?)</small></div>
                <div class="sentence-cell">${renderCell(data.presentSimple?.question)}</div>
                <div class="sentence-cell">${renderCell(data.past?.question)}</div>
                <div class="sentence-cell">${renderCell(data.presentContinuous?.question)}</div>
                <div class="sentence-cell">${renderCell(data.presentPerfect?.question)}</div>
                <div class="sentence-cell">${renderCell(data.goingTo?.question)}</div>
            </div>
        `;

        card.innerHTML = html;
        return card;
    }

    // --- Initialization ---
    initTabs();
    renderVerbs();
    renderProjectSection();
});
