import confetti from 'canvas-confetti';

const chomiks = [
    {
        id: 'normal_chomik',
        name: 'Normal Chomik',
        description: 'cool.',
        hint: 'are you blind',
        image: '/Site-community-image.png',
        area: 'Spawn',
        position: { top: '50%', left: '50%' },
        difficulty: 'Effortless'
    },
    {
        id: 'hi_chomik',
        name: 'Hi! My Name is Chomik!',
        description: 'Hi!',
        hint: 'Hes stuck in a tree!',
        image: '/HiChomik.png',
        area: 'Forest',
        position: { top: '20%', left: '30%' },
        difficulty: 'Easy'
    },
    {
        id: 'chess_chom',
        name: 'Chess.chom',
        description: 'rook to e5',
        hint: 'computer',
        image: '/Chess.chom.png',
        area: 'House',
        difficulty: 'Easy',
        type: 'interactive'
    },
    {
        id: 'couchmik',
        name: 'Couchmik',
        description: 'lazy ahh',
        hint: 'at the house area',
        image: '/Couch.png',
        area: 'House',
        position: { top: '45%', left: '50%' },
        difficulty: 'Easy',
        type: 'sub_area'
    },
    {
        id: 'american_idiotik',
        name: 'American Idiotik',
        description: 'peak music',
        hint: 'Find a poster then computer',
        image: '/Green_Day.png',
        area: 'House',
        difficulty: 'Easy',
        type: 'interactive'
    },
    {
        id: 'dark_reader_chomik',
        name: 'Dark Reader Chomik',
        description: 'sigma',
        hint: 'cuslsnsskwyrsyvyvbokv',
        image: '/WanderingSewers.png',
        area: 'House', // Interactive chomiks don't need a specific position as they are on a "website"
        difficulty: 'Medium',
        type: 'interactive'
    },
    {
        id: 'na_chomik',
        name: 'Not Available Chomik',
        description: 'i dont know what to put here',
        hint: 'hes not in any areas, think outside of the box',
        image: '/NA_Chomik.png',
        area: 'Nowhere',
        difficulty: 'Kinda easy',
        type: 'special'
    },
    {
        id: 'eateot_chomik',
        name: 'Everywhere At The End Of Chomik',
        description: 'you know who else has dementia?',
        hint: 'wait 20 minutes in the spawn area without leaving',
        image: '/EATEOT.png',
        area: 'Spawn',
        difficulty: 'Hard',
        type: 'special'
    },
    {
        id: 'easy_chomik',
        name: 'Easy Chomik',
        description: 'i had to get creative lol',
        hint: 'chomikdex',
        image: '/Easy_Chomik.png',
        area: 'Nowhere',
        difficulty: 'Maybe easy',
        type: 'special'
    },
    {
        id: 'chomik_clicker',
        name: 'Chomik Clicker',
        description: 'Click me to get a reward!',
        hint: 'Click the chomik!',
        image: '/3BB61D70-EDD6-4AF3-94D4-0B2DB6674ED5.png',
        area: 'Spawn',
        position: { top: '50%', left: '50%' },
        difficulty: 'Medium',
        type: 'interactive'
    },
    {
        id: 'missing_texture_chomik',
        name: 'Missing Texture Chomik',
        description: 'i forgot to download source',
        hint: 'computer error',
        image: '/NormalnyChomik_(1)_(1).png',
        area: 'House',
        difficulty: 'Medium',
        type: 'interactive'
    },
    {
        id: 'malfunctioned_chomik',
        name: 'Malfunctioned Chomik',
        description: 'woah',
        hint: 'computer error 2',
        image: '/VerseC.png',
        area: 'House',
        difficulty: 'Hard',
        type: 'interactive'
    },
    {
        id: 'epic_chomik',
        name: 'Epic Chomik',
        description: 'i had to get creative lol',
        hint: 'start at the retro area',
        image: '/Epic.png',
        area: 'Retro',
        position: { top: '50%', left: '50%' },
        difficulty: 'Easy'
    },
    {
        id: 'actual_chohio',
        name: 'Actual Chohio',
        description: 'i had to get creative lol',
        hint: 'Hidden in the trash area',
        image: '/BEtterCHOMIKIMADE.png',
        area: 'Ssyba Tsyhtema',
        difficulty: 'Remorseless',
        type: 'special'
    },
    {
        id: 'angelic_overgrowth_chomik',
        name: 'Angelic Overgrowth Chomik',
        description: 'i hope the suffering was worth it',
        hint: 'Listen in The Gateway. The computer is the key.',
        image: '/AngelPlant.png',
        area: 'Spawn',
        position: { top: '50%', left: '50%' },
        difficulty: 'Unreal',
        type: 'special'
    },
    {
        id: 'monitor_chomik',
        name: 'Monitor Chomik',
        description: 'scaryyyyy',
        hint: 'Hidden in The Blackscale Distortion',
        image: '/Monitorchomik.png',
        area: 'Nowhere',
        difficulty: 'Obama',
        type: 'special'
    },
    {
        id: 'adobe_flash_chomik',
        name: 'Adobe Flash Chomik',
        description: 'The end of an era.',
        hint: 'Search for some classic Adobe software on the computer.',
        image: '/Adobeflashchomik.png',
        area: 'House',
        difficulty: 'Intense',
        type: 'interactive'
    },
    {
        id: 'obama_chomik',
        name: 'Obama Chomik',
        description: 'MRS OBAMA GET DOWN',
        hint: 'Wait in The Blackscale Distortion.',
        image: '/Obama_Chomik.png',
        area: 'Nowhere',
        difficulty: 'Obama',
        type: 'special'
    },
    {
        id: 'devious_applemik',
        name: 'Devious Applemik',
        description: 'so devious',
        hint: 'kitchen',
        image: '/DeviousApplemikMaybe.png',
        area: 'House',
        position: { top: '50%', left: '25%' },
        difficulty: 'Easy',
        type: 'sub_area'
    },
    {
        id: 'chomchips',
        name: 'Chomchips',
        description: 'yummy',
        hint: 'in the house area',
        image: '/Chomchips.png',
        area: 'House',
        position: { top: '50%', left: '75%' },
        difficulty: 'Kinda easy',
        type: 'sub_area'
    },
    {
        id: 'dental_cream_chomik',
        name: 'Dental Cream Chomik',
        description: 'no',
        hint: 'in the house area',
        image: '/DentalCreamChomik.png',
        area: 'House',
        position: { top: '50%', left: '50%' },
        difficulty: 'Kinda easy',
        type: 'sub_area'
    },
    {
        id: 'you_joined_chomik',
        name: 'You Joined! Chomik',
        description: 'heh',
        hint: 'You want a hint? thats funny',
        image: '/You_joined.png',
        area: 'House',
        difficulty: 'Paradoxically Impossible',
        type: 'special'
    },
    {
        id: 'do_not_disturb_chomik',
        name: 'Do Not Disturb Chomik',
        description: 'why',
        hint: 'chomikdex',
        image: '/Do_Not_Disturb_Chomik.png',
        area: 'Nowhere',
        difficulty: 'Hard',
        type: 'special'
    },
    {
        id: 'wise_mystical_chomik',
        name: 'Wise Mystical Chomik',
        description: 'TREE',
        hint: 'where do trees usually appear in?',
        image: '/Wise.png',
        area: 'Forest',
        difficulty: 'Easy',
        type: 'special' // Handled in renderForest
    },
    {
        id: 'chorilla_battle',
        name: '100 Chomiks Vs 1 Chorilla',
        description: 'spoiler: chorilla won',
        hint: 'green area',
        image: '/100_Chomiks_Vs_1_Chorilla.png',
        area: 'Forest',
        position: { top: '50%', left: '50%' },
        difficulty: 'Easy'
    },
    {
        id: 'nc576c242n8o3_chomik',
        name: 'Nc576c242n8o3 Chomik',
        description: 'Nc576c242n8o3',
        hint: 'computer',
        image: '/E2yxw7m.png',
        area: 'House',
        difficulty: 'Easy',
        type: 'interactive'
    },
    {
        id: 'choccy_chomilk',
        name: 'Choccy Chomilk',
        description: 'slurp',
        hint: 'something in the trash',
        image: '/Milk.png',
        area: 'House',
        position: { top: '55%', left: '60%' },
        difficulty: 'Medium²',
        type: 'sub_area'
    },
    {
        id: 'chomputer_virus',
        name: 'Chomputer Virus',
        description: 'thats why you need a chomputer antivirus!',
        hint: 'free software no virus 2028',
        image: '/Computerviruschomik.png',
        area: 'House',
        difficulty: 'Mild',
        type: 'interactive'
    },
    {
        id: 'our_precious_special_chomik',
        name: 'Our Precious "Special" Chomik :)',
        description: 'very special!',
        hint: 'something to do with special chomiks',
        image: '/OurPreciousChomik.png',
        area: 'Nowhere',
        difficulty: 'Joke',
        type: 'special'
    },
    {
        id: 'hey_emo_chomik',
        name: 'Hey Emo Chomik',
        description: 'i regret my life choices',
        hint: 'Hidden in the desert area',
        image: '/WORSTCHOMIKEVERMADE.png',
        area: 'Nowhere',
        difficulty: 'TROLLED',
        type: 'special'
    },
    {
        id: 'shutdown_chomik',
        name: 'SHUTDOWN CHOMIK',
        description: 'meth',
        hint: 'at the school',
        image: '/Shutdown.png',
        area: 'Nowhere',
        difficulty: 'Intense',
        type: 'special'
    },
    {
        id: 'ice_bucket_chomik',
        name: 'Ice bucket chomik',
        description: 'shivers',
        hint: 'find a water bucket',
        image: '/Icebucket.png',
        area: 'Spawn',
        position: { top: '50%', left: '50%' },
        difficulty: 'Mild'
    },
    {
        id: 'pink_chomik',
        name: 'Pink Chomik',
        description: 'wow shes so girly',
        hint: 'desert area',
        image: '/Pink.webp',
        area: 'Desert',
        position: { top: '40%', left: '60%' },
        difficulty: 'Easy',
        series: 'Colors'
    },
    {
        id: 'dark_sea_green_chomik',
        name: 'Dark Sea Green Chomik',
        description: 'thats a mouthful',
        hint: 'start at the school area',
        image: '/DarkSeaGreenChomik.png',
        area: 'School',
        position: { top: '55%', left: '50%' },
        difficulty: 'Easy',
        series: 'Colors'
    },
    {
        id: 'paleturquoise_chomik',
        name: 'Paleturquoise Chomik',
        description: 'this just looks like dark green sea chomik but slightly lighter!',
        hint: 'Start at the graveyard',
        image: '/paleturquoiseChomik.png',
        area: 'Graveyard',
        position: { top: '50%', left: '50%' },
        difficulty: 'Easy',
        series: 'Colors'
    },
    {
        id: 'pursuer_chomik',
        name: 'Pursuer Chomik',
        description: 'Ahh, fresh meat...',
        hint: 'Start at the retro area then type a certain word',
        image: '/PursuerChomik.webp',
        area: 'Retro',
        position: { top: '50%', left: '50%' },
        difficulty: 'Medium',
        type: 'special'
    }
];

// New: background music state
let bgMusic = null;
let bgMusicMuted = false;

// New: special (non-playable) chomiks metadata
const SPECIAL_CHOMIKS = [
    {
        id: 'how_to_paint_chomik',
        name: 'How To Paint Chomik',
        hint: 'Suggest a chomik and manage it to get added to get this chomik!',
        image: '/Howtopaintchomik.png'
    },
    {
        id: 'true_obamik',
        name: 'True Obamik',
        hint: 'Report a critical bug to get this chomik!',
        image: '/TrueObamik.png'
    },
    {
        id: 'our_precious_special_chomik',
        name: 'Our Precious "Special" Chomik :)',
        hint: 'something to do with special chomiks',
        image: '/OurPreciousChomik.png'
    }
];

// Difficulty ranking for sorting in the ChomikDex
const difficultyRank = {
    'Effortless': 1,
    'Easy': 2,
    'Kinda easy': 3,
    'Maybe easy': 4,
    'Mild': 5,
    'Medium': 6,
    'Medium²': 7,
    'Hard': 8,
    'Harder': 9,
    'Intense': 10,
    'Remorseless': 11,
    'Unreal': 12,
    'Obama': 13,
    'Paradoxically Impossible': 14,
    'Joke': 15,
    'TROLLED': 16
};

const YOU_JOINED_QUEST_CHOMIK_COUNT_REQUIREMENT = 20;

const changelogData = [
    { version: 'v2.6 - The Dark Sea Green Update', changes: ['Added "Dark Sea Green Chomik" (Colors series).'] },
    { version: 'v2.5 - The Colors Update', changes: ['Added "Pink Chomik" (Colors series).'] },
    { version: 'v2.4 - The School Update', changes: ['Added "SHUTDOWN CHOMIK".', 'Added a math terminal reward at the school.'] },
    { version: 'v2.3 - The Ice Bucket Update', changes: ['Added "Ice bucket chomik".', 'Added a new interaction in the house bathroom.'] },
    { version: 'v2.2 - The Emo Reset Update', changes: ['Added a reset button for the "Hey Emo Chomik" puzzles.', 'Fixed background music and its mute button.', 'Adjusted ChomikDex behavior and special view.'] },
    { version: 'v2.1 - The Virus Update', changes: ['Added "Chomputer Virus".'] },
    { version: 'v2.0 - The Choccy Update', changes: ['Added "Choccy Chomilk".'] },
    { version: 'v1.9 - The DND Update', changes: ['Added "Do Not Disturb Chomik".'] },
    { version: 'v1.8 - The Juice Update', changes: ['Added "Grape Juicemik".', 'v62'] },
    { version: 'v1.7 - The Paradox Update', changes: ['Added "You Joined! Chomik".', 'Good luck.'] },
    { version: 'v1.6 - The Presidential Update', changes: ['Added "Obama Chomik".', 'Added "Adobe Flash Chomik".', 'A new secret lurks in the distortion... wait and listen.'] },
    { version: 'v1.5 - The Distortion Update', changes: ['Added "Monitor Chomik".', 'Added secret areas related to the distortion.', 'Something seems to have changed with the Ssyba Tsyhtema realm...'] },
    { version: 'v1.4.1 - The Morse Update', changes: ['Changed The Gateway minigame. Listen closely.'] },
    { version: 'v1.4 - The Heavenly Update', changes: ['Added "Angelic Overgrowth Chomik".', 'Added "The Gateway" area and a new memory challenge.'] },
    { version: 'v1.3 - The Soul-Crushing Update', changes: ['Added "Actual Chohio".', 'Added the Trash area.', 'Added the Ssyba Tsyhtema realm and its 11 puzzles.'] },
    { version: 'v1.2 - The Epic Update', changes: ['Added "Epic Chomik".', 'Added the Retro area.', 'Revamped area navigation.'] },
    { version: 'v1.1 - The Error Update', changes: ['Added "Missing Texture Chomik".', 'Added "Malfunctioned Chomik".', 'Added new computer error screens.'] },
    { version: 'v1.0 - The Clicker Update', changes: ['Added "Chomik Clicker".'] },
    { version: 'v0.9 - The Update Update', changes: ['Added a changelog to track updates.'] },
    { version: 'v0.8 - The Easy Update', changes: ['Added "Easy Chomik".'] },
    { version: 'v0.7 - The Dementia Update', changes: ['Added "Everywhere At The End Of Chomik".'] },
    { version: 'v0.6 - The ??? Update', changes: ['Added "Not Available Chomik".'] },
    { version: 'v0.5 - The Dark Update', changes: ['Added "Dark Reader Chomik" and a secret website.'] },
    { version: 'v0.4 - The Music Update', changes: ['Added "American Idiotik" Chomik.', 'Added a poster to the Desert.'] },
    { version: 'v0.3 - The Tech Update', changes: ['Added the House area.', 'Added a computer with the "Chess.chom" website.', 'Added "Chess.chom" Chomik.'] },
    { version: 'v0.2 - The Forest Update', changes: ['Added the Forest area.', 'Added "Hi! My Name is Chomik!".'] },
    { version: 'v0.1 - The First Update', changes: ['Game released.', 'Added "Normal Chomik".'] }
];

const NON_QUEST_CHOMIKS_COUNT = chomiks.length;

let foundChomiks = new Set();
let naChomikClicks = 0;
let eateotTimer = null;
let normalChomikClicks = 0;
let visitedAreas = new Set();
let youJoinedQuest = {
    stage: 0, // 0: locked, 1: obby active, 2: obby done, 3: trash done, 4: forest choice active, 5: quest complete
    jumpClicks: 0,
    correctTrashIndex: -1,
    correctForestButton: -1 // 0 for left, 1 for right
};
// Quest State
let trashButtonsClicked = new Set();
let ssybaRealmUnlocked = false;
let ssybaPuzzlesSolved = new Set();
let monitorChomikQuestActive = false;
let angelicQuestCompleted = false;
let adobeSoftwaresFound = new Set();
let obamaQuestState = 'inactive'; // Can be 'inactive', 'audio_played', 'morse_seen'
let forceOldSecret2Message = false;
let blackscaleDistortionTimer = null;
let morseAudio = null;
let choccyUnlocked = false;
let currentSimonRound = 1;
let simonSequence = [];
let playerSequence = [];
let isPlayerTurn = false;
let isSimonPlaying = false;

// New: Pursuer Chomik unlock state and current area tracking
let pursuerUnlocked = false;
let currentAreaId = 'Spawn';

// New state for Hey Emo Chomik quest
let desertPosterFlipped = false;
let schoolQuestionActive = false;
let schoolQuestionSeen = false;
let easyHintShifted = false;
let emoQuestCompleted = false;
// Timer for desert poster
let desertWaitTimer = null;

// Helper to fully reset Hey Emo Chomik quest state
function resetEmoQuestProgress() {
    desertPosterFlipped = false;
    schoolQuestionActive = false;
    schoolQuestionSeen = false;
    easyHintShifted = false;
    emoQuestCompleted = false;

    localStorage.removeItem('desertPosterFlipped');
    localStorage.removeItem('schoolQuestionActive');
    localStorage.removeItem('schoolQuestionSeen');
    localStorage.removeItem('easyHintShifted');
    localStorage.removeItem('emoQuestCompleted');

    saveProgress();
    renderDesert();
    renderSchool();
    updateDex();
    showNotification('Hey Emo Chomik puzzles have been reset.');
}

const ALL_AREAS = new Set([
    'Spawn', 'Desert', 'Forest', 'House', 'Retro', 'Trash', 'School',
    'Ssyba Tsyhtema', 'The Gateway', 'Secret', 'The Blackscale Distortion', 'Secret 2',
    'OBBY OBBY OBBY OBBY OBBY OBBY OBBY OBBY OBBY OBBY OBBY OBBY OBBY OBBY OBBY OBBY',
    'Graveyard'
]);

const ssybaPuzzleCodes = {
    idk: "/e idk",
    insane: "/e 9633159234",
    complex: "/e BST",
    extreme: "/e youcandoit",
    terrifying: "/e 123456789",
    horrifying: "/e YouUsedYourCameraDidntYou",
    obama: "/e Barack Hussein Obama II",
    ultimate: "/e haveskills",
    terriremebama: "/e NowTouchGrass",
    impossible: "/e ThereIsSomethingHiddenAmongTheDirectory",
    strenuous: "/e Timewaster",
};

const notificationEl = document.getElementById('notification');
// Modals
const dexModal = document.getElementById('chomikdex-modal');
const computerModal = document.getElementById('computer-modal');
const changelogModal = document.getElementById('changelog-modal');
// Buttons
const dexBtn = document.getElementById('dex-btn');
const changelogBtn = document.getElementById('changelog-btn');
const areasToggleBtn = document.getElementById('areas-toggle-btn');
const closeButtons = document.querySelectorAll('.close-button');
const computerCloseBtn = document.getElementById('computer-close-btn');
// Content areas
const dexListEl = document.getElementById('dex-list');
const dexDetailsEl = document.getElementById('dex-details');
const dexSortSelect = document.getElementById('dex-sort-select');
const dexSearchModeSelect = document.getElementById('dex-search-mode');
const dexSearchInput = document.getElementById('dex-search-input');
const computerViewEl = document.getElementById('computer-view');
const changelogContentEl = document.getElementById('changelog-content');
// Navigation
const areaButtons = document.querySelectorAll('.area-btn');
const gameAreas = document.querySelectorAll('.game-area');
const areaButtonsContainer = document.getElementById('area-buttons-container');
// New: special chomiks button
const dexSpecialBtn = document.getElementById('dex-special-btn');
// New: background music toggle button
const musicToggleBtn = document.getElementById('music-toggle-btn');

// Special ChomikDex mode + current user
let specialDexMode = false;
let currentUsername = null;
let specialPreciousVisible = false; // 50% appearance flag for Our Precious "Special" Chomik :)

function saveProgress() {
    localStorage.setItem('foundChomiks', JSON.stringify(Array.from(foundChomiks)));
    localStorage.setItem('normalChomikClicks', normalChomikClicks);
    localStorage.setItem('visitedAreas', JSON.stringify(Array.from(visitedAreas)));
    localStorage.setItem('youJoinedQuest', JSON.stringify(youJoinedQuest));
    localStorage.setItem('trashButtonsClicked', JSON.stringify(Array.from(trashButtonsClicked)));
    localStorage.setItem('ssybaRealmUnlocked', ssybaRealmUnlocked);
    localStorage.setItem('ssybaPuzzlesSolved', JSON.stringify(Array.from(ssybaPuzzlesSolved)));
    localStorage.setItem('monitorChomikQuestActive', monitorChomikQuestActive);
    localStorage.setItem('angelicQuestCompleted', angelicQuestCompleted);
    localStorage.setItem('adobeSoftwaresFound', JSON.stringify(Array.from(adobeSoftwaresFound)));
    localStorage.setItem('obamaQuestState', obamaQuestState);
    localStorage.setItem('forceOldSecret2Message', forceOldSecret2Message);
    localStorage.setItem('choccyUnlocked', choccyUnlocked);
    // New: save Hey Emo Chomik quest state
    localStorage.setItem('desertPosterFlipped', desertPosterFlipped);
    localStorage.setItem('schoolQuestionActive', schoolQuestionActive);
    localStorage.setItem('schoolQuestionSeen', schoolQuestionSeen);
    localStorage.setItem('easyHintShifted', easyHintShifted);
    localStorage.setItem('emoQuestCompleted', emoQuestCompleted);
    // New: save music mute state
    localStorage.setItem('bgMusicMuted', bgMusicMuted);
    // New: save Pursuer Chomik unlock state
    localStorage.setItem('pursuerUnlocked', pursuerUnlocked);
}

function loadProgress() {
    const saved = localStorage.getItem('foundChomiks');
    if (saved) {
        foundChomiks = new Set(JSON.parse(saved));
    }
    const savedClicks = localStorage.getItem('normalChomikClicks');
    if (savedClicks) {
        normalChomikClicks = parseInt(savedClicks, 10);
    }
    const savedVisitedAreas = localStorage.getItem('visitedAreas');
    if (savedVisitedAreas) {
        visitedAreas = new Set(JSON.parse(savedVisitedAreas));
    }
    const savedYouJoined = localStorage.getItem('youJoinedQuest');
    if(savedYouJoined) {
        const parsedQuest = JSON.parse(savedYouJoined);
        // Ensure all keys are present to avoid errors with old save structures
        youJoinedQuest = {
            stage: 0,
            jumpClicks: 0,
            correctTrashIndex: -1,
            correctForestButton: -1,
            ...parsedQuest
        };
    }
    const savedTrashButtons = localStorage.getItem('trashButtonsClicked');
    if (savedTrashButtons) {
        trashButtonsClicked = new Set(JSON.parse(savedTrashButtons));
    }
    const savedSsybaUnlocked = localStorage.getItem('ssybaRealmUnlocked');
    if (savedSsybaUnlocked) {
        ssybaRealmUnlocked = JSON.parse(savedSsybaUnlocked);
    }
    const savedSsybaPuzzles = localStorage.getItem('ssybaPuzzlesSolved');
    if (savedSsybaPuzzles) {
        ssybaPuzzlesSolved = new Set(JSON.parse(savedSsybaPuzzles));
    }
    const savedMonitorQuest = localStorage.getItem('monitorChomikQuestActive');
    if (savedMonitorQuest) {
        monitorChomikQuestActive = JSON.parse(savedMonitorQuest);
    }
    const savedAngelicQuest = localStorage.getItem('angelicQuestCompleted');
    if (savedAngelicQuest) {
        angelicQuestCompleted = JSON.parse(savedAngelicQuest);
    }
    const savedAdobe = localStorage.getItem('adobeSoftwaresFound');
    if (savedAdobe) {
        adobeSoftwaresFound = new Set(JSON.parse(savedAdobe));
    }
    const savedObamaQuest = localStorage.getItem('obamaQuestState');
    if (savedObamaQuest) {
        obamaQuestState = savedObamaQuest;
    }
    const savedForceOldMessage = localStorage.getItem('forceOldSecret2Message');
    if (savedForceOldMessage) {
        forceOldSecret2Message = JSON.parse(savedForceOldMessage);
    }
    const savedChoccy = localStorage.getItem('choccyUnlocked');
    if (savedChoccy) choccyUnlocked = JSON.parse(savedChoccy);

    // New: load Hey Emo Chomik quest state
    const savedDesertPoster = localStorage.getItem('desertPosterFlipped');
    if (savedDesertPoster) desertPosterFlipped = JSON.parse(savedDesertPoster);
    const savedSchoolActive = localStorage.getItem('schoolQuestionActive');
    if (savedSchoolActive) schoolQuestionActive = JSON.parse(savedSchoolActive);
    const savedSchoolSeen = localStorage.getItem('schoolQuestionSeen');
    if (savedSchoolSeen) schoolQuestionSeen = JSON.parse(savedSchoolSeen);
    const savedEasyHintShifted = localStorage.getItem('easyHintShifted');
    if (savedEasyHintShifted) easyHintShifted = JSON.parse(savedEasyHintShifted);
    const savedEmoQuestCompleted = localStorage.getItem('emoQuestCompleted');
    if (savedEmoQuestCompleted) emoQuestCompleted = JSON.parse(savedEmoQuestCompleted);

    // New: load music mute state
    const savedMusicMuted = localStorage.getItem('bgMusicMuted');
    if (savedMusicMuted) bgMusicMuted = JSON.parse(savedMusicMuted);

    // New: load Pursuer Chomik unlock state
    const savedPursuer = localStorage.getItem('pursuerUnlocked');
    if (savedPursuer) pursuerUnlocked = JSON.parse(savedPursuer);
}

function showNotification(message) {
    notificationEl.textContent = message;
    notificationEl.classList.add('show');
    setTimeout(() => {
        notificationEl.classList.remove('show');
    }, 3000);
}

function handleNormalChomikClick(chomik) {
    const clickerChomik = chomiks.find(c => c.id === 'chomik_clicker');

    // Always count the click
    if (foundChomiks.has('normal_chomik') && !foundChomiks.has('chomik_clicker')) {
        normalChomikClicks++;
        saveProgress();
    }
    
    // Check if the normal chomik has been found for the first time
    if (!foundChomiks.has(chomik.id)) {
        handleChomikClick(chomik); // This finds the normal chomik
        return; // Exit here to not show the click count on the very first click
    }

    // If normal chomik is found, but clicker is not, show progress
    if (!foundChomiks.has('chomik_clicker')) {
        showNotification(`Clicks: ${normalChomikClicks}/100`);
        if (normalChomikClicks >= 100) {
            handleChomikClick(clickerChomik);
        }
    } else {
        showNotification('Already Found!'); // Already found both
    }
}

function handleChomikClick(chomik) {
    if (foundChomiks.has(chomik.id)) {
        showNotification('Already Found!');
    } else {
        foundChomiks.add(chomik.id);
        saveProgress();
        showNotification(`${chomik.name} Found!`);
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
        updateDex();
        checkAndUnlockYouJoinedQuest();
    }
}

function checkAndUnlockYouJoinedQuest() {
    if (youJoinedQuest.stage === 0 && foundChomiks.size >= YOU_JOINED_QUEST_CHOMIK_COUNT_REQUIREMENT) {
        youJoinedQuest.stage = 1;
        showNotification('A strange new area has appeared... it seems to be an obby.');
        addObbyAreaButton();
        saveProgress();
    }
}

function renderHouse() {
    const houseArea = document.getElementById('House');
    houseArea.classList.remove('living-room-active', 'kitchen-active', 'bathroom-active');
    houseArea.innerHTML = '';

    const computerEl = document.createElement('img');
    computerEl.src = '/computer.png';
    computerEl.id = 'computer';
    computerEl.alt = 'An old computer';
    computerEl.addEventListener('click', openComputer);
    
    const navContainer = document.createElement('div');
    navContainer.id = 'house-nav-container';

    const livingRoomBtn = document.createElement('button');
    livingRoomBtn.textContent = 'Go to the living room';
    livingRoomBtn.classList.add('house-nav-btn');
    livingRoomBtn.addEventListener('click', renderLivingRoom);

    const kitchenBtn = document.createElement('button');
    kitchenBtn.textContent = 'Go to the kitchen';
    kitchenBtn.classList.add('house-nav-btn');
    kitchenBtn.addEventListener('click', renderKitchen);

    const bathroomBtn = document.createElement('button');
    bathroomBtn.textContent = 'Go to the bathroom';
    bathroomBtn.classList.add('house-nav-btn');
    bathroomBtn.addEventListener('click', renderBathroom);

    houseArea.appendChild(computerEl);
    navContainer.appendChild(livingRoomBtn);
    navContainer.appendChild(kitchenBtn);
    navContainer.appendChild(bathroomBtn);
    houseArea.appendChild(navContainer);
    
    // spawn Choccy next to the computer if unlocked
    if (choccyUnlocked) {
        const choc = chomiks.find(c => c.id === 'choccy_chomilk');
        if (choc) renderChomikInHouse(choc, houseArea);
    }
}

function renderLivingRoom() {
    const houseArea = document.getElementById('House');
    houseArea.classList.add('living-room-active');
    houseArea.classList.remove('kitchen-active', 'bathroom-active');
    houseArea.innerHTML = '';

    const chomiksInLivingRoom = chomiks.filter(c => c.id === 'couchmik' || c.id === 'grape_juicemik');

    // Render Couchmik first so Grape Juicemik is on top
    const couchmik = chomiksInLivingRoom.find(c => c.id === 'couchmik');
    if (couchmik) {
        renderChomikInHouse(couchmik, houseArea);
    }
    const grapeJuicemik = chomiksInLivingRoom.find(c => c.id === 'grape_juicemik');
    if (grapeJuicemik) {
        renderChomikInHouse(grapeJuicemik, houseArea);
    }
    
    const computerRoomBtn = document.createElement('button');
    computerRoomBtn.textContent = 'Go back to the computer room';
    computerRoomBtn.classList.add('house-nav-btn');
    computerRoomBtn.addEventListener('click', renderHouse);
    houseArea.appendChild(computerRoomBtn);
}

function renderChomikInHouse(chomikData, parentElement) {
    if (!chomikData) return;
    const chomikEl = document.createElement('div');
    chomikEl.classList.add('chomik');
    chomikEl.style.top = chomikData.position.top;
    chomikEl.style.left = chomikData.position.left;
    chomikEl.style.transform = 'translate(-50%, -50%)';

    const imgEl = document.createElement('img');
    imgEl.src = chomikData.image;
    imgEl.alt = chomikData.name;
    imgEl.dataset.id = chomikData.id;

    if (chomikData.id === 'couchmik') {
        imgEl.style.width = '250px';
    } else if (chomikData.id === 'grape_juicemik') {
        imgEl.style.width = '80px';
    }

    imgEl.style.height = 'auto';

    chomikEl.appendChild(imgEl);
    chomikEl.addEventListener('click', () => handleChomikClick(chomikData));
    parentElement.appendChild(chomikEl);
}

function renderKitchen() {
    const houseArea = document.getElementById('House');
    houseArea.classList.add('kitchen-active');
    houseArea.classList.remove('living-room-active', 'bathroom-active');
    houseArea.innerHTML = '';

    const chomiksInKitchen = chomiks.filter(c => c.id === 'chomchips' || c.id === 'devious_applemik');

    chomiksInKitchen.forEach(chomikData => {
        if (chomikData) {
            const chomikEl = document.createElement('div');
            chomikEl.classList.add('chomik');
            chomikEl.style.top = chomikData.position.top;
            chomikEl.style.left = chomikData.position.left;
            chomikEl.style.transform = 'translate(-50%, -50%)';

            const imgEl = document.createElement('img');
            imgEl.src = chomikData.image;
            imgEl.alt = chomikData.name;
            imgEl.dataset.id = chomikData.id;
            imgEl.style.width = chomikData.id === 'chomchips' ? '200px' : '150px';
            imgEl.style.height = 'auto';

            chomikEl.appendChild(imgEl);
            chomikEl.addEventListener('click', () => handleChomikClick(chomikData));
            houseArea.appendChild(chomikEl);
        }
    });
    
    const computerRoomBtn = document.createElement('button');
    computerRoomBtn.textContent = 'Go back to the computer room';
    computerRoomBtn.classList.add('house-nav-btn');
    computerRoomBtn.addEventListener('click', renderHouse);
    houseArea.appendChild(computerRoomBtn);
}

function renderBathroom() {
    const houseArea = document.getElementById('House');
    houseArea.classList.add('bathroom-active');
    houseArea.classList.remove('living-room-active', 'kitchen-active');
    houseArea.innerHTML = '';

    const chomikToRender = youJoinedQuest.stage < 5 
        ? chomiks.find(c => c.id === 'dental_cream_chomik')
        : chomiks.find(c => c.id === 'you_joined_chomik');

    if (chomikToRender) {
        const chomikEl = document.createElement('div');
        chomikEl.classList.add('chomik');
        chomikEl.style.top = chomikToRender.position?.top || '50%';
        chomikEl.style.left = chomikToRender.position?.left || '50%';
        chomikEl.style.transform = 'translate(-50%, -50%)';

        const imgEl = document.createElement('img');
        imgEl.src = chomikToRender.image;
        imgEl.alt = chomikToRender.name;
        imgEl.dataset.id = chomikToRender.id;
        imgEl.style.width = '200px';
        imgEl.style.height = 'auto';

        chomikEl.appendChild(imgEl);
        chomikEl.addEventListener('click', () => handleChomikClick(chomikToRender));
        houseArea.appendChild(chomikEl);
    }

    // Add the ice bucket in the bathroom
    const iceBucketContainer = document.createElement('div');
    iceBucketContainer.classList.add('chomik');
    iceBucketContainer.style.top = '70%';
    iceBucketContainer.style.left = '30%';
    iceBucketContainer.style.transform = 'translate(-50%, -50%)';

    const iceBucketImg = document.createElement('img');
    iceBucketImg.src = '/Icebucket.png';
    iceBucketImg.alt = 'Ice bucket';
    iceBucketImg.style.width = '150px';
    iceBucketImg.style.height = 'auto';

    iceBucketContainer.appendChild(iceBucketImg);
    iceBucketContainer.addEventListener('click', () => {
        // Play water splash sound
        try {
            const splash = new Audio('/Water_Splash_Old.ogg');
            splash.play().catch(() => {});
        } catch (e) {
            console.warn('Failed to play splash sound:', e);
        }

        const iceChomik = chomiks.find(c => c.id === 'ice_bucket_chomik');
        if (iceChomik && !foundChomiks.has(iceChomik.id)) {
            handleChomikClick(iceChomik);
            // Re-render chomiks so Normal Chomik is visually replaced in Spawn
            renderChomiks();
        } else {
            showNotification('Already Found!');
        }
    });
    houseArea.appendChild(iceBucketContainer);
    
    const computerRoomBtn = document.createElement('button');
    computerRoomBtn.textContent = 'Go back to the computer room';
    computerRoomBtn.classList.add('house-nav-btn');
    computerRoomBtn.addEventListener('click', renderHouse);
    houseArea.appendChild(computerRoomBtn);
}

function renderDesert() {
    const desertArea = document.getElementById('Desert');
    desertArea.innerHTML = ''; // Clear previous content

    const posterEl = document.createElement('div');
    posterEl.id = 'desert-poster';
    posterEl.innerHTML = `
            <h3>${desertPosterFlipped ? '???' : 'Found Poster!'}</h3>
            <p>${desertPosterFlipped ? 'https://www.roblox.com/users/10060752959/profile' : 'Go listen to our music at GreenDay.chom!'}</p>
        `;
    desertArea.appendChild(posterEl);

    // NEW: explicitly render Pink Chomik in the desert
    const pinkChomik = chomiks.find(c => c.id === 'pink_chomik');
    if (pinkChomik) {
        const chomikEl = document.createElement('div');
        chomikEl.classList.add('chomik');
        chomikEl.style.top = pinkChomik.position.top;
        chomikEl.style.left = pinkChomik.position.left;
        chomikEl.style.transform = 'translate(-50%, -50%)';

        const imgEl = document.createElement('img');
        imgEl.src = pinkChomik.image;
        imgEl.alt = pinkChomik.name;
        imgEl.dataset.id = pinkChomik.id;

        chomikEl.appendChild(imgEl);
        chomikEl.addEventListener('click', () => handleChomikClick(pinkChomik));
        desertArea.appendChild(chomikEl);
    }

    // If poster not yet flipped, start 10s timer to show flip button
    if (!desertPosterFlipped) {
        if (desertWaitTimer) {
            clearTimeout(desertWaitTimer);
        }
        desertWaitTimer = setTimeout(() => {
            const existingBtn = document.getElementById('flip-poster-btn');
            const posterNow = document.getElementById('desert-poster');
            if (posterNow && !existingBtn && !desertPosterFlipped) {
                const flipBtn = document.createElement('button');
                flipBtn.id = 'flip-poster-btn';
                flipBtn.textContent = 'Flip poster backwards';
                flipBtn.style.marginTop = '10px';
                // Make it clearly visible and purple
                flipBtn.style.backgroundColor = '#8000ff';
                flipBtn.style.color = '#ffffff';
                flipBtn.style.border = 'none';
                flipBtn.style.padding = '8px 12px';
                flipBtn.style.borderRadius = '4px';
                flipBtn.style.cursor = 'pointer';

                flipBtn.addEventListener('click', () => {
                    desertPosterFlipped = true;
                    saveProgress();
                    // Update poster text
                    posterNow.innerHTML = `
                            <h3>???</h3>
                            <p>https://www.roblox.com/users/10060752959/profile</p>
                        `;
                });
                posterNow.appendChild(flipBtn);
            }
        }, 10000);
    }
}

function renderTrash() {
    const trashArea = document.getElementById('Trash');
    trashArea.innerHTML = '<h2>Trash Area</h2>';

    if (youJoinedQuest.stage === 2) {
        renderYouJoinedTrashPuzzle(); // no early return, we still append choccy trigger
    } else if (trashButtonsClicked.size >= 10) {
        trashArea.innerHTML += '<p>The realm has collapsed. A new path has opened.</p>';
    } else {
        trashArea.innerHTML += '<p>Click the 10 miscolored buttons.</p>';
        const buttonContainer = document.createElement('div');
        buttonContainer.id = 'trash-button-container';
        
        // Create 50 buttons, 10 of which are miscolored
        const totalButtons = 50;
        const wrongButtons = 10;
        const correctColor = '#888';
        const wrongColor = '#888788'; // Slightly different color

        const buttonIndices = Array.from({length: totalButtons}, (_, i) => i);
        // Shuffle to randomize positions
        for (let i = buttonIndices.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [buttonIndices[i], buttonIndices[j]] = [buttonIndices[j], buttonIndices[i]];
        }

        for (let i = 0; i < totalButtons; i++) {
            const btn = document.createElement('button');
            btn.classList.add('trash-button');
            const index = buttonIndices[i];
            
            if (index < wrongButtons) {
                btn.style.backgroundColor = wrongColor;
                btn.dataset.type = 'wrong';
                btn.dataset.id = `wrong-${index}`;
                if (trashButtonsClicked.has(btn.dataset.id)) {
                     btn.style.backgroundColor = 'lime';
                     btn.disabled = true;
                }
            } else {
                btn.style.backgroundColor = correctColor;
                btn.dataset.type = 'correct';
            }
            
            btn.addEventListener('click', () => {
                if (btn.dataset.type === 'wrong' && !btn.disabled) {
                    trashButtonsClicked.add(btn.dataset.id);
                    btn.style.backgroundColor = 'lime';
                    btn.disabled = true;
                    showNotification(`Found miscolored button! ${trashButtonsClicked.size}/10`);
                    saveProgress();

                    if (trashButtonsClicked.size >= 10) {
                        ssybaRealmUnlocked = true;
                        showNotification('The realm collapses! A new area is available.');
                        // Add Ssyba Tsyhtema to nav if it doesn't exist
                        if (!document.getElementById('ssyba tsyhtema-btn')) {
                            const ssybaBtn = document.createElement('button');
                            ssybaBtn.id = 'ssyba tsyhtema-btn';
                            ssybaBtn.className = 'area-btn';
                            ssybaBtn.textContent = 'Ssyba Tsyhtema';
                            ssybaBtn.addEventListener('click', () => switchArea('Ssyba Tsyhtema'));
                            areaButtonsContainer.appendChild(ssybaBtn);
                        }
                        saveProgress();
                        renderTrash(); // Re-render to show completion message
                    }
                }
            });
            buttonContainer.appendChild(btn);
        }
        trashArea.appendChild(buttonContainer);
    }
    appendChoccyButton(trashArea);
}

function renderYouJoinedTrashPuzzle() {
    const trashArea = document.getElementById('Trash');
    trashArea.innerHTML = '<h2>A Test of Patience</h2>';
    trashArea.innerHTML += '<p>One of these 100 buttons is correct. Choose wisely.</p>';

    if (youJoinedQuest.stage >= 3) {
        trashArea.innerHTML += '<p>You have passed the test. A new button has appeared in the Forest.</p>';
        return;
    }
    
    const buttonContainer = document.createElement('div');
    buttonContainer.id = 'trash-button-container';

    if (youJoinedQuest.correctTrashIndex === -1) {
        youJoinedQuest.correctTrashIndex = Math.floor(Math.random() * 100);
        saveProgress();
    }

    for (let i = 0; i < 100; i++) {
        const btn = document.createElement('button');
        btn.classList.add('trash-button');
        btn.style.backgroundColor = '#888';
        btn.dataset.index = i;

        btn.addEventListener('click', () => {
            if (parseInt(btn.dataset.index) === youJoinedQuest.correctTrashIndex) {
                youJoinedQuest.stage = 3;
                saveProgress();
                showNotification('Correct. A new button has appeared in the Forest.');
                renderYouJoinedTrashPuzzle(); // Rerender to show completion
            } else {
                showNotification('Wrong.');
            }
        });
        buttonContainer.appendChild(btn);
    }
    trashArea.appendChild(buttonContainer);
    appendChoccyButton(trashArea);
}

function renderSsybaTsyhtema() {
    const area = document.getElementById('Ssyba Tsyhtema');
    area.innerHTML = `
        <h2 class="area-title">Ssyba Tsyhtema Realm</h2>
        <p>${monitorChomikQuestActive ? 'It feels... different. The suffering must be repeated.' : 'Welcome to suffering. Solve the 11 puzzles. Use the computer.'}</p>
        <p>Puzzles Solved: ${ssybaPuzzlesSolved.size} / ${Object.keys(ssybaPuzzleCodes).length}</p>
        <div id="puzzle-container">
            ${renderPuzzle('idk', 'Idk Puzzle', 'Just insert "/e idk" in the computer and thats it for this puzzle.')}
            ${renderPuzzle('insane', 'Insane Puzzle', 'Around the area there are 5 labels with the order and the number on them. The numbers are: #1 96, #2 33, #3 15, #4 92, #5 34.')}
            ${renderPuzzle('complex', 'Complex Puzzle', 'There are 3 objects with a label on them: Toilet, Bookshelf, Sunflower. The uppercase letters need to be in alphabetical order.')}
            ${renderPuzzle('extreme', 'Extreme Puzzle', 'Push the fridge until you can see a label with the code on it. <br/> <button class="puzzle-btn" data-code="youcandoit">Push Fridge</button>')}
            ${renderPuzzle('terrifying', 'Terrifying Puzzle', 'In the platform is a 0.1x0.1 hole. Fit your camera to click a button under the platform. <br/><div class="platform"><div class="hole" data-code="123456789"></div></div>')}
            ${renderPuzzle('horrifying', 'Horrifying Puzzle', 'Theres a harder per stage obby that you can\'t beat but you can use your camera on the last stage to see the code: YouUsedYourCameraDidntYou')}
            ${renderPuzzle('obama', 'Obama Puzzle', 'Written on the sign is "What\'s Obama\'s full name?".' )}
            ${renderPuzzle('ultimate', 'Ultimate Puzzle', 'Complete the VERY VERY VERY VERY long obby. The code is at the end: haveskills')}
            ${renderPuzzle('terriremebama', 'Terriremebama Puzzle', 'Collect all of the fake chomiks on the grass. <br/> <button class="puzzle-btn" data-code="NowTouchGrass">Collect Fakes</button>')}
            ${renderPuzzle('impossible', 'Impossible Puzzle', 'Check Black Hole Chomik\'s Hint. The code is ThereIsSomethingHiddenAmongTheDirectory')}
            ${renderPuzzle('strenuous', 'Strenuous Puzzle', 'On the platform there will be a string of binary: 01010111... <br/> <button class="puzzle-btn" data-code="Timewaster">Look under platform</button>')}
        </div>
    `;

    area.querySelectorAll('.puzzle-btn').forEach(btn => {
        btn.onclick = () => showNotification(`The code is: ${btn.dataset.code}`);
    });
    area.querySelectorAll('.hole').forEach(hole => {
        hole.onclick = () => showNotification(`The code is: ${hole.dataset.code}`);
    });
}

function renderPuzzle(id, title, description) {
    const isSolved = ssybaPuzzlesSolved.has(id);
    return `
        <div class="puzzle ${isSolved ? 'solved' : ''}">
            <h3>${title} ${isSolved ? '✓' : ''}</h3>
            ${isSolved ? '<p>Solved!</p>' : `<p>${description}</p>`}
        </div>
    `;
}

function renderForest() {
    const forestArea = document.getElementById('Forest');
    forestArea.innerHTML = ''; // Clear previous content

    const trees = [
        { src: '/tree.png', style: { top: '45%', left: '5%', width: '120px' } },
        { src: '/tree.png', style: { top: '10%', left: '25%', width: '160px' } }, // Chomik tree
        { src: '/tree.png', style: { top: '5%', left: '75%', width: '130px' } }
    ];

    trees.forEach(treeData => {
        const treeEl = document.createElement('img');
        treeEl.src = treeData.src;
        treeEl.classList.add('tree');
        Object.assign(treeEl.style, treeData.style);
        forestArea.appendChild(treeEl);
    });

    // Add Wise Mystical Chomik as a tree
    const wiseChomikData = chomiks.find(c => c.id === 'wise_mystical_chomik');
    if (wiseChomikData) {
        const chomikEl = document.createElement('div');
        chomikEl.classList.add('chomik'); // This adds position: absolute, cursor, transition
        Object.assign(chomikEl.style, { top: '50%', left: '65%' }); // Position the div

        const imgEl = document.createElement('img');
        imgEl.src = wiseChomikData.image;
        imgEl.alt = wiseChomikData.name;
        imgEl.dataset.id = wiseChomikData.id;
        // Make it look like a tree
        imgEl.style.width = '150px';
        imgEl.style.height = 'auto';
        imgEl.style.webkitUserDrag = 'none';
        imgEl.style.userSelect = 'none';
        
        chomikEl.appendChild(imgEl);
        chomikEl.addEventListener('click', () => handleChomikClick(wiseChomikData));
        forestArea.appendChild(chomikEl);
    }

    // Render 100 Chomiks Vs 1 Chorilla in the middle
    const chorillaData = chomiks.find(c => c.id === 'chorilla_battle');
    if (chorillaData) {
        const el = document.createElement('div');
        el.classList.add('chomik');
        Object.assign(el.style, { top: '50%', left: '50%', transform: 'translate(-50%, -50%)' });
        const img = document.createElement('img'); img.src = chorillaData.image; img.alt = chorillaData.name; img.dataset.id = chorillaData.id; img.style.width = '120px';
        el.appendChild(img); el.addEventListener('click', () => handleChomikClick(chorillaData));
        forestArea.appendChild(el);
    }

    // You Joined Quest Buttons
    if (youJoinedQuest.stage === 3) {
        const forestBtn1 = document.createElement('button');
        forestBtn1.textContent = "???";
        forestBtn1.className = 'quest-btn';
        forestBtn1.style.position = 'absolute';
        forestBtn1.style.top = '80%';
        forestBtn1.style.left = '50%';
        forestBtn1.style.transform = 'translateX(-50%)';
        forestBtn1.onclick = () => {
            youJoinedQuest.stage = 4;
            youJoinedQuest.correctForestButton = Math.floor(Math.random() * 2);
            saveProgress();
            renderForest();
        };
        forestArea.appendChild(forestBtn1);
    } else if (youJoinedQuest.stage === 4) {
        const container = document.createElement('div');
        container.style.position = 'absolute';
        container.style.top = '80%';
        container.style.left = '50%';
        container.style.transform = 'translateX(-50%)';
        container.style.display = 'flex';
        container.style.gap = '20px';

        const forestBtnLeft = document.createElement('button');
        forestBtnLeft.textContent = "Choose";
        forestBtnLeft.className = 'quest-btn';
        forestBtnLeft.onclick = () => handleForestChoice(0);
        
        const forestBtnRight = document.createElement('button');
        forestBtnRight.textContent = "Choose";
        forestBtnRight.className = 'quest-btn';
        forestBtnRight.onclick = () => handleForestChoice(1);
        
        container.appendChild(forestBtnLeft);
        container.appendChild(forestBtnRight);
        forestArea.appendChild(container);
    }
}

function handleForestChoice(choice) {
    if (choice === youJoinedQuest.correctForestButton) {
        youJoinedQuest.stage = 5;
        saveProgress();
        showNotification('You chose... wisely. Something has changed in the House.');
        renderForest(); // Re-render to remove buttons
    } else {
        showNotification('You chose... poorly. The cycle of suffering begins anew.');
        // Reset the quest
        youJoinedQuest = {
            stage: 1,
            jumpClicks: 0,
            correctTrashIndex: -1,
            correctForestButton: -1
        };
        saveProgress();
        renderForest(); // Re-render to remove buttons
        switchArea('OBBY OBBY OBBY OBBY OBBY OBBY OBBY OBBY OBBY OBBY OBBY OBBY OBBY OBBY OBBY OBBY');
    }
}

// New: School area rendering for Hey Emo Chomik quest
function renderSchool() {
    const schoolArea = document.getElementById('School');
    if (!schoolArea) return;

    schoolArea.innerHTML = '';

    const title = document.createElement('h2');
    title.className = 'area-title';
    title.textContent = 'School';
    schoolArea.appendChild(title);

    // Main board question for Shutdown Chomik
    const mathQuestion = document.createElement('p');
    mathQuestion.textContent = 'What is the square root of 67 multiplied by 2?';
    schoolArea.appendChild(mathQuestion);

    // Extra content for the Hey Emo Chomik quest
    if (!schoolQuestionActive) {
        const p = document.createElement('p');
        p.className = 'placeholder';
        p.textContent = 'Nothing here yet...';
        schoolArea.appendChild(p);
        return;
    }

    // Question text visible once the Hey Emo Chomik quest is active
    const question = document.createElement('p');
    question.textContent = `Whats the first word that was said in this vid? https://www.youtube.com/watch?v=Bmq5Wh5pbTE`;
    schoolArea.appendChild(question);

    // Reset button so players can recover if the quest glitches
    const resetBtn = document.createElement('button');
    resetBtn.id = 'emo-reset-btn';
    resetBtn.textContent = 'Reset Hey Emo Chomik puzzles';
    resetBtn.className = 'quest-btn';
    resetBtn.style.marginTop = '20px';
    resetBtn.onclick = () => {
        if (confirm('Are you sure you want to reset the Hey Emo Chomik puzzles?')) {
            resetEmoQuestProgress();
        }
    };
    schoolArea.appendChild(resetBtn);
}

function renderRetro() {
    const retroArea = document.getElementById('Retro');
    retroArea.innerHTML = ''; // Clear previous content

    const gatewayButton = document.createElement('button');
    gatewayButton.id = 'gateway-button';
    gatewayButton.textContent = ''; // No visible text
    gatewayButton.title = 'A strange energy emanates from this spot.';
    gatewayButton.addEventListener('click', () => switchArea('The Gateway'));
    retroArea.appendChild(gatewayButton);

    // New: render Pursuer Chomik in Retro once unlocked
    const pursuerData = chomiks.find(c => c.id === 'pursuer_chomik');
    if (pursuerData && (pursuerUnlocked || foundChomiks.has('pursuer_chomik'))) {
        const chomikEl = document.createElement('div');
        chomikEl.classList.add('chomik');
        chomikEl.style.top = pursuerData.position.top;
        chomikEl.style.left = pursuerData.position.left;
        chomikEl.style.transform = 'translate(-50%, -50%)';

        const imgEl = document.createElement('img');
        imgEl.src = pursuerData.image;
        imgEl.alt = pursuerData.name;
        imgEl.dataset.id = pursuerData.id;

        // Make him a bit larger and more menacing
        imgEl.style.width = '160px';
        imgEl.style.height = 'auto';

        chomikEl.appendChild(imgEl);
        chomikEl.addEventListener('click', () => handleChomikClick(pursuerData));
        retroArea.appendChild(chomikEl);
    }
}

function renderTheGateway() {
    const gatewayArea = document.getElementById('The Gateway');
    gatewayArea.innerHTML = ''; // Keep it empty for a black screen vibe
    
    // Create audio element if it doesn't exist
    if (!morseAudio) {
        morseAudio = new Audio('/morse.wav');
        morseAudio.loop = true;
    }
    gatewayArea.appendChild(morseAudio); // Add to DOM to be safe
}

function renderSecret() {
    const secretArea = document.getElementById('Secret');
    secretArea.innerHTML = '';
    const door = document.createElement('div');
    door.id = 'distortion-door';
    door.innerHTML = '<h3>Enter The Blackscale Distortion</h3>';
    door.addEventListener('click', () => switchArea('The Blackscale Distortion'));
    secretArea.appendChild(door);
}

function renderBlackscaleDistortion() {
    const area = document.getElementById('The Blackscale Distortion');
    area.innerHTML = '';
    const ladder = document.createElement('div');
    ladder.id = 'distortion-ladder';
    ladder.innerHTML = '<h3>Climb the ladder</h3>';
    ladder.addEventListener('click', () => switchArea('Secret 2'));
    area.appendChild(ladder);

    if (obamaQuestState === 'audio_played' || obamaQuestState === 'morse_seen') {
        const toggleBtn = document.createElement('button');
        toggleBtn.id = 'toggle-message-btn';
        toggleBtn.className = 'distortion-toggle-btn';
        toggleBtn.textContent = forceOldSecret2Message ? 'Return to the present' : 'Rewind time';
        
        toggleBtn.addEventListener('click', () => {
            forceOldSecret2Message = !forceOldSecret2Message;
            saveProgress();
            toggleBtn.textContent = forceOldSecret2Message ? 'Return to the present' : 'Rewind time';
            showNotification(`The monitor will now show ${forceOldSecret2Message ? 'the original message' : 'the strange new message'}.`);
            // Re-render the secret area immediately if it's the current area to reflect changes without switching.
            // This is handled by switchArea, but if we are already in Secret 2 and the toggle is clicked from another area (not possible with current UI)
            // this would be needed. The current flow is: click toggle in distortion -> go to secret 2.
            // The render is called upon switching area, so it's correct.
        });
        area.appendChild(toggleBtn);
    }
}

function renderObbyArea() {
    const area = document.getElementById('OBBY OBBY OBBY OBBY OBBY OBBY OBBY OBBY OBBY OBBY OBBY OBBY OBBY OBBY OBBY OBBY');
    if (!area) return;

    if (youJoinedQuest.stage >= 2) {
        area.innerHTML = `
            <h2>The Ordeal is Over</h2>
            <p>You have jumped ${youJoinedQuest.jumpClicks} times. The path forward lies in the Trash.</p>
        `;
        return;
    }

    area.innerHTML = `
        <h2>An Unending Obby</h2>
        <p>Jumps: ${youJoinedQuest.jumpClicks} / 12345</p>
        <button id="jump-btn">Jump</button>
    `;
    document.getElementById('jump-btn').addEventListener('click', () => {
        if (youJoinedQuest.jumpClicks < 12345) {
            youJoinedQuest.jumpClicks++;
            area.querySelector('p').textContent = `Jumps: ${youJoinedQuest.jumpClicks} / 12345`;
            if (youJoinedQuest.jumpClicks % 100 === 0) {
                 saveProgress(); // Save periodically
            }
        }
        if (youJoinedQuest.jumpClicks >= 12345) {
            youJoinedQuest.stage = 2;
            youJoinedQuest.correctTrashIndex = Math.floor(Math.random() * 100);
            saveProgress();
            showNotification('You feel a shift in the Trash Area.');
            renderObbyArea(); // Re-render to show completion.
        }
    });
}

function renderSecret2() {
    const area = document.getElementById('Secret 2');
    let content = `
        <div id="secret2-monitor">
            <h3>System Output</h3>
    `;

    const showNewMessage = (obamaQuestState === 'audio_played' || obamaQuestState === 'morse_seen') && !forceOldSecret2Message;

    if (showNewMessage) {
        content += `
            <p>A new message flickers...</p>
            <p style="font-size: 0.9em;">-. ...- / .- ...- / .- --- .--.. --.. / ... .--. ..- .-. ---... / --- .- .- .-- --.. ---... -..-. -..-. ..-. ...- -... .- -... .-.-.- .. .-.. -..-. -.- ..--- -.- .- --.. . -.-- --. -.-- ----- ..-. ..--.. --.. .--. -...- ... ...-- -.. .--. ----- -.. .--- ... ..--- -....- .. -.- -.-- ..--- .-. -. --..-- / .... ..- -.- / .- --- .-.. ..- / .-.. ..- .- .-.. -.-- / .- --- .-.. / -.. ...- -.-- -.- / .- --- .... .- / -.. .... --.. / --.. .... .--. -.- / .--. ..- / ----- ---... ..--- ..... / .--. ..- / .- --- .-.. / .--- ...- - .-- -... .- .-.. -.-- .-.-.-</p>
        `;
        if (obamaQuestState === 'audio_played') {
            obamaQuestState = 'morse_seen';
            saveProgress();
        }
    } else {
        content += `
            <p>Zeds and Doozs...</p>
            <p>01101111 01101110 01101100 01111001 01100111 01101111 01100100 01110011 01101110 01101001 01101110 01100101 01110100 01111001</p>
        `;
    }

    content += `</div>`;
    area.innerHTML = content;
    // When rewinding, Secret 2 area needs to re-render to show the change immediately.
    // This is handled by switchArea, but if we are already in Secret 2 and the toggle is clicked from another area (not possible with current UI)
    // this would be needed. The current flow is: click toggle in distortion -> go to secret 2.
    // The render is called upon switching area, so it's correct.
}

function startSimonGame() {
    document.getElementById('start-simon-btn').style.display = 'none';
    currentSimonRound = 1;
    simonSequence = [];
    playerSequence = [];
    isPlayerTurn = false;
    isSimonPlaying = false;
    document.getElementById('round-counter').textContent = currentSimonRound;
    document.getElementById('simon-message').textContent = 'Memorize the sequence.';
    generateSimonSequence();
    playSimonSequence();
}

function generateSimonSequence() {
    simonSequence.push(Math.floor(Math.random() * 25));
}

async function playSimonSequence() {
    isSimonPlaying = true;
    isPlayerTurn = false; // Player can't click while sequence is playing
    document.getElementById('simon-message').textContent = 'Memorize the sequence.';
    
    // Add a small delay before starting to make it feel less abrupt
    await new Promise(res => setTimeout(res, 500)); 

    const squares = document.querySelectorAll('.simon-square');
    for (const index of simonSequence) {
        const square = squares[index];
        if (square) { // Check if square exists
            square.classList.add('lit');
            await new Promise(res => setTimeout(res, 400));
            square.classList.remove('lit');
            await new Promise(res => setTimeout(res, 200));
        }
    }
    isSimonPlaying = false;
    isPlayerTurn = true;
    playerSequence = [];
    document.getElementById('simon-message').textContent = 'Your turn.';
}

function handleSimonSquareClick(e) {
    if (!isPlayerTurn || isSimonPlaying) return;

    const clickedIndex = parseInt(e.target.dataset.index);
    playerSequence.push(clickedIndex);
    
    // Light up the clicked square briefly
    e.target.classList.add('lit');
    setTimeout(() => e.target.classList.remove('lit'), 200);

    const currentStep = playerSequence.length - 1;

    // Check if the click was correct
    if (playerSequence[currentStep] !== simonSequence[currentStep]) {
        document.getElementById('simon-message').textContent = 'Mistake! The trial resets.';
        isPlayerTurn = false;
        // Don't show the start button immediately, give feedback time.
        setTimeout(() => {
             document.getElementById('start-simon-btn').style.display = 'block';
        }, 1000);
        return;
    }

    // Check if the round is complete
    if (playerSequence.length === simonSequence.length) {
        isPlayerTurn = false;
        if (currentSimonRound === 25) {
            // Game won
            document.getElementById('simon-message').textContent = 'Congratulations.';
            angelicQuestCompleted = true;
            saveProgress();
            showNotification('The fabric of reality shifts in the Spawn...');
            // No need to restart, just show completion.
        } else {
            // Next round
            currentSimonRound++;
            document.getElementById('round-counter').textContent = currentSimonRound;
            document.getElementById('simon-message').textContent = 'Correct! Next sequence...';
            setTimeout(() => {
                generateSimonSequence();
                playSimonSequence();
            }, 1000);
        }
    }
}

function renderChomiks() {
    gameAreas.forEach(area => {
        // Clear non-special areas, or areas that should be dynamically rendered
        if (area.id !== 'Forest' && area.id !== 'House' && area.id !== 'Desert' && area.id !== 'Trash') {
            area.innerHTML = ''; 
        }
    });

    // Add titles/placeholders back to empty areas
    const desertArea = document.getElementById('Desert');
    if (!chomiks.some(c => c.area === 'Desert')) {
         desertArea.innerHTML = '<h2>Desert</h2><p>Nothing here yet...</p>';
    }
    
    // Render areas with special setups
    renderHouse();
    renderDesert();
    renderTrash();
    renderForest();
    renderSchool();
    renderRetro();
    renderTheGateway();
    if(ssybaRealmUnlocked) {
        renderSsybaTsyhtema();
    }
    if (foundChomiks.has('actual_chohio')) {
        renderSecret();
        renderBlackscaleDistortion();
        renderSecret2();
    }
    if (youJoinedQuest.stage >= 1) {
        renderObbyArea();
    }

    chomiks.forEach(chomik => {
        // Skip interactive, special, sub-area, and let ice bucket be handled separately
        if (
            chomik.type === 'interactive' ||
            chomik.type === 'special' || // special are handled by their own logic
            chomik.type === 'sub_area' ||
            chomik.id === 'ice_bucket_chomik'
        ) {
            return;
        }

        const areaEl = document.getElementById(chomik.area);
        if (areaEl) {
             if(areaEl.id === 'Spawn' && areaEl.innerHTML !== '') areaEl.innerHTML = '';
            
            // Logic for swapping Normal Chomik with Angelic Chomik
            if (chomik.id === 'normal_chomik' && (angelicQuestCompleted || foundChomiks.has('ice_bucket_chomik'))) {
                return; // Don't render normal chomik if quest is done or ice bucket chomik is found
            }

            const chomikEl = document.createElement('div');
            chomikEl.classList.add('chomik');
            chomikEl.style.top = chomik.position.top;
            chomikEl.style.left = chomik.position.left;
            
            const imgEl = document.createElement('img');
            imgEl.src = chomik.image;
            imgEl.alt = chomik.name;
            imgEl.dataset.id = chomik.id;
            
            chomikEl.appendChild(imgEl);

            if (chomik.id === 'normal_chomik') {
                chomikEl.addEventListener('click', () => handleNormalChomikClick(chomik));
            } else {
                chomikEl.addEventListener('click', () => handleChomikClick(chomik));
            }
            
            areaEl.appendChild(chomikEl);
        }
    });

    // After generic rendering, draw Ice Bucket Chomik in Spawn only if it has been found
    if (foundChomiks.has('ice_bucket_chomik')) {
        const iceChomik = chomiks.find(c => c.id === 'ice_bucket_chomik');
        if (iceChomik) {
            const areaEl = document.getElementById(iceChomik.area);
            if (areaEl) {
                // Ensure Spawn doesn't keep an old Normal Chomik instance around
                if (areaEl.id === 'Spawn' && areaEl.innerHTML !== '') {
                    areaEl.innerHTML = '';
                }

                const chomikEl = document.createElement('div');
                chomikEl.classList.add('chomik');
                chomikEl.style.top = iceChomik.position.top;
                chomikEl.style.left = iceChomik.position.left;

                const imgEl = document.createElement('img');
                imgEl.src = iceChomik.image;
                imgEl.alt = iceChomik.name;
                imgEl.dataset.id = iceChomik.id;

                chomikEl.appendChild(imgEl);
                chomikEl.addEventListener('click', () => handleChomikClick(iceChomik));
                areaEl.appendChild(chomikEl);
            }
        }
    }

    // Render Angelic Chomik if quest is completed
    if (angelicQuestCompleted) {
        const angelicChomik = chomiks.find(c => c.id === 'angelic_overgrowth_chomik');
        if (angelicChomik) {
            const areaEl = document.getElementById(angelicChomik.area);
            const chomikEl = document.createElement('div');
            chomikEl.classList.add('chomik');
            chomikEl.style.top = angelicChomik.position.top;
            chomikEl.style.left = angelicChomik.position.left;
            
            const imgEl = document.createElement('img');
            imgEl.src = angelicChomik.image;
            imgEl.alt = angelicChomik.name;
            imgEl.dataset.id = angelicChomik.id;
            
            chomikEl.appendChild(imgEl);
            chomikEl.addEventListener('click', () => handleChomikClick(angelicChomik));
            areaEl.appendChild(chomikEl);
        }
    }
}

function getDifficultyColor(difficulty) {
    const colors = {
        'Effortless': 'purple',
        'Easy': 'green',
        'Medium': 'orange',
        'Hard': 'red',
        'Harder': '#ff4500', // Orangered
        'Kinda easy': '#3498db',
        'Maybe easy': '#1abc9c',
        'Mild': '#8e44ad', // Added for Grape Juicemik
        'Remorseless': 'black',
        'Unreal': 'cyan',
        'Intense': '#FF1493', // DeepPink
        'Obama': '#663399', // rebeccapurple
        'Paradoxically Impossible': '#ff00ff', // Placeholder color
        'Joke': '#f1c40f',
        'TROLLED': '#000000'
    };
    return colors[difficulty] || 'gray';
}

function updateDex() {
    dexListEl.innerHTML = '';

    const dexCounterEl = document.getElementById('dex-counter');
    if (dexCounterEl) {
        // Calculate how many special chomiks the current user owns
        let specialOwnedCount = 0;
        if (currentUsername) {
            try {
                const grants = loadSpecialChomikGrants();
                const usernameLc = currentUsername.toLowerCase();
                const ownedIds = new Set();
                grants.forEach(g => {
                    if (g.to && g.chomikId && g.to.toLowerCase() === usernameLc) {
                        ownedIds.add(g.chomikId);
                    }
                });
                specialOwnedCount = ownedIds.size;
            } catch (e) {
                console.error('Failed to compute special chomiks owned:', e);
            }
        }

        // Use the full chomik count for display so it matches the list
        const totalCount = NON_QUEST_CHOMIKS_COUNT;
        const foundCountForDisplay = foundChomiks.size;

        dexCounterEl.innerHTML = `Found: ${foundCountForDisplay} / ${totalCount}<br>Special chomiks owned: ${specialOwnedCount}`;
    }

    // Decide which list we are showing
    const isSpecialMode = specialDexMode;
    let baseList = isSpecialMode
        ? SPECIAL_CHOMIKS.map(s => ({
              // adapt to chomik-like shape so the rest of the code can use it
              id: s.id,
              name: s.name,
              description: s.description || 'Special Chomik',
              hint: s.hint || '',
              image: s.image,
              difficulty: 'Special',
              area: 'Nowhere'
          }))
        : chomiks;

    // Apply 50% visibility for Our Precious "Special" Chomik :)
    if (isSpecialMode && !specialPreciousVisible) {
        baseList = baseList.filter(ch => ch.id !== 'our_precious_special_chomik');
    }

    // Read current filter/search values
    const sortMode = dexSortSelect ? dexSortSelect.value : 'none';
    const searchMode = dexSearchModeSelect ? dexSearchModeSelect.value : 'name';
    const queryRaw = dexSearchInput ? dexSearchInput.value : '';
    const query = queryRaw.trim().toLowerCase();

    // Filter by search mode
    let filtered = baseList.filter(chomik => {
        if (!query) return true;
        const nameText = (chomik.name || '').toLowerCase();
        const descText = (chomik.description || '').toLowerCase();
        const hintText = (chomik.hint || '').toLowerCase();

        if (searchMode === 'description') {
            return descText.includes(query);
        } else if (searchMode === 'hint') {
            return hintText.includes(query);
        }
        // default: name
        return nameText.includes(query);
    });

    // Sort by difficulty if needed
    if (sortMode === 'easiest' || sortMode === 'hardest') {
        const direction = sortMode === 'easiest' ? 1 : -1;
        filtered.sort((a, b) => {
            const rankA = difficultyRank[a.difficulty] ?? 999;
            const rankB = difficultyRank[b.difficulty] ?? 999;
            if (rankA === rankB) {
                // Tie-breaker: alphabetical by name
                return a.name.localeCompare(b.name) * direction;
            }
            return (rankA - rankB) * direction;
        });
    }

    // Render filtered & sorted list
    filtered.forEach(chomik => {
        const isFound = isSpecialMode ? true : foundChomiks.has(chomik.id);
        const item = document.createElement('div');
        item.classList.add('dex-item');
        item.classList.toggle('found', isFound);
        item.classList.toggle('not-found', !isFound);
        item.dataset.id = chomik.id;

        const img = document.createElement('img');
        img.src = chomik.image;
        item.appendChild(img);
        
        const name = document.createElement('span');
        name.textContent = isFound ? chomik.name : '???';
        item.appendChild(name);

        // Add difficulty indicator
        const difficultyDot = document.createElement('span');
        difficultyDot.className = 'difficulty-dot';
        difficultyDot.setAttribute('data-difficulty', chomik.difficulty);
        if (chomik.difficulty !== 'Paradoxically Impossible') {
            difficultyDot.style.backgroundColor = getDifficultyColor(chomik.difficulty);
        }
        difficultyDot.title = chomik.difficulty;
        item.appendChild(difficultyDot);

        item.addEventListener('click', () => {
            if (!isSpecialMode && chomik.id === 'na_chomik' && !foundChomiks.has('na_chomik')) {
                naChomikClicks++;
                if (naChomikClicks >= 3) {
                    const realNa = chomiks.find(c => c.id === 'na_chomik');
                    if (realNa) handleChomikClick(realNa);
                    naChomikClicks = 0; // reset
                } else {
                    showNotification(`Clicked ${naChomikClicks} time(s)...`);
                }
            }

            // Grant Our Precious "Special" Chomik :) when clicked in special mode if visible
            if (isSpecialMode && chomik.id === 'our_precious_special_chomik') {
                const realChomik = chomiks.find(c => c.id === 'our_precious_special_chomik');
                if (realChomik && !foundChomiks.has(realChomik.id)) {
                    handleChomikClick(realChomik);
                }
            }

            showDexDetails(chomik.id);
        });
        dexListEl.appendChild(item);
    });

    // Auto-select details panel
    if (filtered.length > 0) {
        const currentDetailId = dexDetailsEl.querySelector('#dex-detail-name')?.dataset?.id;
        if (!currentDetailId || !filtered.some(c => c.id === currentDetailId)) {
            showDexDetails(filtered[0].id);
        }
    } else {
        dexDetailsEl.innerHTML = '<p>No Chomiks match your search.</p>';
    }

    // If in special mode and user is Avaxus, overlay admin panel into details
    if (isSpecialMode && currentUsername === 'avaxus') {
        openSpecialChomiksPanel();
    }
}

function showDexDetails(chomikId) {
    // Try normal chomiks first
    let chomik = chomiks.find(c => c.id === chomikId);
    let isSpecialListChomik = false;

    // If not found, try special list
    if (!chomik) {
        const special = SPECIAL_CHOMIKS.find(c => c.id === chomikId);
        if (special) {
            isSpecialListChomik = true;
            chomik = {
                id: special.id,
                name: special.name,
                description: special.description || 'Special Chomik',
                hint: special.hint || '',
                image: special.image,
                difficulty: 'Special'
            };
        }
    }

    if (!chomik) return;
    
    const isFound = isSpecialListChomik ? true : foundChomiks.has(chomik.id);

    // Adjust Easy Chomik hint dynamically when shifted
    let displayHint = chomik.hint;
    if (chomik.id === 'easy_chomik' && easyHintShifted) {
        displayHint = 'What does Xi Jinping look like?';
    }

    let detailsHTML = `
        <img src="${chomik.image}" alt="${isFound ? chomik.name : 'Unknown Chomik'}" style="${!isFound ? 'filter: brightness(0);' : ''}" id="dex-detail-img">
        <h3 id="dex-detail-name" data-id="${chomik.id}">${isFound ? chomik.name : '???'}</h3>
    `;
    
    let difficultyHTML;
    if (chomik.difficulty === 'Paradoxically Impossible') {
        difficultyHTML = `<span class="difficulty-tag" data-difficulty="${chomik.difficulty}"></span>`;
    } else if (chomik.difficulty === 'TROLLED') {
        difficultyHTML = `<span class="difficulty-tag" data-difficulty="TROLLED"><img src="/TROLLED.png" alt="TROLLED" style="height:16px;vertical-align:middle;margin-right:4px;">TROLLED</span>`;
    } else {
        difficultyHTML = `<span class="difficulty-tag" data-difficulty="${chomik.difficulty}" style="background-color: ${getDifficultyColor(chomik.difficulty)}">${chomik.difficulty}</span>`;
    }

    if (isFound) {
        detailsHTML += `
            <p><strong>Description:</strong> ${chomik.description}</p>
            <p><strong>Hint:</strong> ${displayHint}</p>
            <p><strong>Difficulty:</strong> ${difficultyHTML}</p>
        `;
    } else {
        detailsHTML += `
            <p><strong>Description:</strong> Find this Chomik to see its description.</p>
            <p><strong>Hint:</strong> ${displayHint}</p>
            <p><strong>Difficulty:</strong> ${difficultyHTML}</p>
        `;
    }
    
    dexDetailsEl.innerHTML = detailsHTML;

    // Secret chomik logic (only apply for real normal_chomik)
    const detailNameEl = document.getElementById('dex-detail-name');
    if (detailNameEl && chomikId === 'normal_chomik' && !isSpecialListChomik && isFound) {
        detailNameEl.classList.add('clickable-secret');
        detailNameEl.title = '...';
        detailNameEl.addEventListener('click', () => {
            const dndChomik = chomiks.find(c => c.id === 'do_not_disturb_chomik');
            if (dndChomik && !foundChomiks.has(dndChomik.id)) {
                handleChomikClick(dndChomik);
            }
        });
    }

    const difficultyTagEl = dexDetailsEl.querySelector('.difficulty-tag');
    if (difficultyTagEl) {
        difficultyTagEl.addEventListener('click', () => {
            const difficulty = difficultyTagEl.dataset.difficulty;
            if (difficulty === 'Easy') {
                const easyChomik = chomiks.find(c => c.id === 'easy_chomik');
                if (easyChomik && !foundChomiks.has(easyChomik.id)) {
                    handleChomikClick(easyChomik);
                }
            }
        });
    }
}

function checkAllAreasVisited() {
    if (foundChomiks.has('chomik_of_dimensions')) return;

    const availableAreas = new Set(['Spawn', 'Desert', 'Forest', 'House', 'Retro', 'Trash', 'School']);
    if (ssybaRealmUnlocked) {
        availableAreas.add('Ssyba Tsyhtema');
    }
    // The Gateway is available implicitly via Retro
    availableAreas.add('The Gateway');
    if (foundChomiks.has('actual_chohio')) {
        availableAreas.add('Secret');
        availableAreas.add('The Blackscale Distortion');
        availableAreas.add('Secret 2');
    }
    if (youJoinedQuest.stage >= 1) {
        availableAreas.add('OBBY OBBY OBBY OBBY OBBY OBBY OBBY OBBY OBBY OBBY OBBY OBBY OBBY OBBY OBBY OBBY');
    }

    // Check if every currently available area has been visited.
    let allCurrentlyAvailableVisited = true;
    for (const area of availableAreas) {
        if (!visitedAreas.has(area)) {
            allCurrentlyAvailableVisited = false;
            break;
        }
    }

    if (allCurrentlyAvailableVisited && availableAreas.size === ALL_AREAS.size) {
        const chomik = chomiks.find(c => c.id === 'chomik_of_dimensions');
        if (chomik && !foundChomiks.has(chomik.id)) {
            handleChomikClick(chomik);
        }
    }
}

function switchArea(targetAreaId) {
    currentAreaId = targetAreaId;

    if (eateotTimer) {
        clearTimeout(eateotTimer);
        eateotTimer = null;
    }
    if (blackscaleDistortionTimer) {
        clearTimeout(blackscaleDistortionTimer);
        blackscaleDistortionTimer = null;
    }
    if (desertWaitTimer) {
        clearTimeout(desertWaitTimer);
        desertWaitTimer = null;
    }
    
    // Add to visited areas and check for Dimensions Chomik
    if (!visitedAreas.has(targetAreaId)) {
        visitedAreas.add(targetAreaId);
        saveProgress();
        checkAllAreasVisited();
    }
    
    // Stop morse audio when leaving The Gateway
    if (morseAudio && !morseAudio.paused) {
        morseAudio.pause();
        morseAudio.currentTime = 0;
    }
    
    gameAreas.forEach(area => {
        area.classList.toggle('active', area.id === targetAreaId);
    });
    areaButtons.forEach(button => {
        const btnAreaId = button.id.replace('-btn','');
        const targetLowerId = targetAreaId.replace(/\s/g, '').toLowerCase();
        button.classList.toggle('active', btnAreaId === targetLowerId);
    });

    // Re-render desert whenever you enter it so the 10s timer/button works reliably
    if (targetAreaId === 'Desert') {
        renderDesert();
    }

    if (targetAreaId === 'Spawn' && !foundChomiks.has('eateot_chomik')) {
        eateotTimer = setTimeout(() => {
            const chomik = chomiks.find(c => c.id === 'eateot_chomik');
            if (chomik && !foundChomiks.has(chomik.id)) {
                 handleChomikClick(chomik);
            }
        }, 20 * 60 * 1000); // 20 minutes
    }

    if (targetAreaId === 'Ssyba Tsyhtema' && !ssybaRealmUnlocked) {
        showNotification('This area is locked.');
        switchArea('Spawn'); // Go back to spawn if locked
        return;
    }

    if (targetAreaId === 'The Blackscale Distortion' && obamaQuestState === 'inactive' && !foundChomiks.has('obama_chomik')) {
        blackscaleDistortionTimer = setTimeout(() => {
            showNotification('A strange sound echoes...');
            const obamaAudio = new Audio('/Malbear_jingle.mp3.mpeg.mp3');
            obamaAudio.play().catch(e => console.error("Audio play failed:", e));
            obamaQuestState = 'audio_played';
            saveProgress();
        }, 40 * 1000); // 40 seconds
    }

    if (targetAreaId === 'The Gateway') {
        if (morseAudio) {
            morseAudio.play().catch(e => console.error("Audio play failed:", e));
        }
    }
}

// --- Changelog Modal ---
function renderChangelog() {
    changelogContentEl.innerHTML = '';
    changelogData.forEach(entry => {
        const entryEl = document.createElement('div');
        entryEl.classList.add('changelog-entry');
        
        const versionEl = document.createElement('h3');
        versionEl.textContent = entry.version;
        entryEl.appendChild(versionEl);
        
        const listEl = document.createElement('ul');
        entry.changes.forEach(change => {
            const itemEl = document.createElement('li');
            itemEl.textContent = change;
            listEl.appendChild(itemEl);
        });
        entryEl.appendChild(listEl);
        
        changelogContentEl.appendChild(entryEl);
    });
}

// --- Computer Modal Logic ---

function openComputer() {
    if (eateotTimer) {
        clearTimeout(eateotTimer);
        eateotTimer = null;
    }
    computerModal.style.display = 'block';
    showComputerPrompt();
}

function closeComputer() {
    computerModal.style.display = 'none';
    computerViewEl.innerHTML = '';
}

function showComputerPrompt(errorMsg = '') {
    computerViewEl.innerHTML = `
        <div id="computer-prompt">
            <label for="website-input">C:\&gt;</label>
            <p>Type a website you want to go to!</p>
            <input type="text" id="website-input" autofocus />
            <button id="go-btn">Go</button>
            ${errorMsg ? `<p class="error">${errorMsg}</p>` : ''}
        </div>
    `;
    const goBtn = document.getElementById('go-btn');
    const input = document.getElementById('website-input');
    
    goBtn.addEventListener('click', navigate);
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            navigate();
        }
    });
}

function navigate() {
    const input = document.getElementById('website-input');
    const siteRaw = input.value.trim();
    const site = siteRaw.toLowerCase();
    
    if (site.startsWith('/e ')) {
        handlePuzzleCommand(site);
        return;
    }

    const adobeSoftwareList = ['adobe photoshop', 'adobe illustrator', 'adobe premiere pro', 'adobe acrobat pro', 'adobe express'];
    if (adobeSoftwareList.includes(site)) {
        handleAdobeSoftwareSearch(site);
        return;
    }

    // Handle "Free <anything>" for Chomputer Virus
    const freeMatch = site.match(/^free\s+(.+)$/i);
    if (freeMatch) {
        const virusChomik = chomiks.find(c => c.id === 'chomputer_virus');
        if (virusChomik) {
            if (!foundChomiks.has(virusChomik.id)) {
                handleChomikClick(virusChomik);
                showComputerPrompt('Free download complete. Totally no virus. :)');
            } else {
                showComputerPrompt('You already installed this totally safe free software.');
            }
        } else {
            showComputerPrompt('An unknown error occurred.');
        }
        return;
    }

    // New: Shutdown Chomik code (must have visited School first)
    const shutdownCodes = ['16,3707055', '16.3707055'];
    if (shutdownCodes.includes(siteRaw)) {
        const shutdownChomik = chomiks.find(c => c.id === 'shutdown_chomik');
        if (!visitedAreas.has('School')) {
            showComputerPrompt('Access denied. You should probably go to school first.');
            return;
        }
        if (shutdownChomik && !foundChomiks.has(shutdownChomik.id)) {
            handleChomikClick(shutdownChomik);
            showComputerPrompt('System shutting down... reward granted.');
        } else {
            showComputerPrompt('Shutdown already completed.');
        }
        return;
    }

    // New Hey Emo Chomik quest commands
    if (site === 'intense') {
        if (!desertPosterFlipped) {
            showComputerPrompt('Access denied.');
            return;
        }
        if (!schoolQuestionActive) {
            schoolQuestionActive = true;
            saveProgress();
            showComputerPrompt('Access granted.');
            renderSchool();
        } else {
            showComputerPrompt('Access already granted.');
        }
        return;
    }

    if (site === 'some') {
        if (!schoolQuestionActive || !schoolQuestionSeen) {
            showComputerPrompt('Access denied.');
            return;
        }
        if (!easyHintShifted) {
            // Show intermediate text then update
            computerViewEl.innerHTML = `
                <div id="computer-prompt">
                    <label for="website-input">C:\&gt;</label>
                    <p>Granting access to higher power...</p>
                </div>
            `;
            setTimeout(() => {
                easyHintShifted = true;
                saveProgress();
                computerViewEl.innerHTML = `
                    <div id="computer-prompt">
                        <label for="website-input">C:\&gt;</label>
                        <p>Granted.</p>
                    </div>
                `;
                // After change, allow user to continue by reopening prompt
                setTimeout(() => {
                    showComputerPrompt();
                    updateDex();
                }, 800);
            }, 2000);
        } else {
            showComputerPrompt('You already have higher power.');
        }
        return;
    }

    if (site === 'winnie the pooh') {
        if (!easyHintShifted) {
            showComputerPrompt('Access denied.');
            return;
        }
        if (!emoQuestCompleted) {
            computerViewEl.innerHTML = `
                <div id="computer-prompt">
                    <label for="website-input">C:\&gt;</label>
                    <p>Granting complete access...</p>
                </div>
            `;
            setTimeout(() => {
                const emoChomik = chomiks.find(c => c.id === 'hey_emo_chomik');
                if (emoChomik && !foundChomiks.has(emoChomik.id)) {
                    handleChomikClick(emoChomik);
                }
                emoQuestCompleted = true;
                saveProgress();
                computerViewEl.innerHTML = `
                    <div id="computer-prompt">
                        <label for="website-input">C:\&gt;</label>
                        <p>Request successfully completed</p>
                    </div>
                `;
                setTimeout(() => {
                    showComputerPrompt();
                }, 800);
            }, 3000);
        } else {
            showComputerPrompt('Access already granted.');
        }
        return;
    }

    if (site === 'chess.chom') {
        showChessChom();
    } else if (site === 'greenday.chom') {
        showGreenDayChom();
    } else if (site === 'skibidiiamohiololreal') { // New site
        showSkibidiSite();
    } else if (site === 'existence') {
        if (obamaQuestState === 'morse_seen') {
            const obamaChomik = chomiks.find(c => c.id === 'obama_chomik');
            if (obamaChomik && !foundChomiks.has(obamaChomik.id)) {
                handleChomikClick(obamaChomik);
                showComputerPrompt('He has arrived.');
            } else {
                showComputerPrompt('He is already here.');
            }
        } else {
            showComputerPrompt('Your existence is meaningless for now.');
        }
    } else if (site === 'angeliccode999plzineedtostretchthecodeasmuchasican') {
        if (angelicQuestCompleted) {
            showComputerPrompt('The code has already been accepted.');
        } else {
            angelicQuestCompleted = true;
            saveProgress();
            showComputerPrompt('Code accepted. A shift in reality is felt in the Spawn...');
            renderChomiks(); // Update spawn area immediately
        }
    }
    else if (site === 'nc576c242n8o3') {
        const secretChom = chomiks.find(c => c.id === 'nc576c242n8o3_chomik');
        if (secretChom && !foundChomiks.has(secretChom.id)) {
            handleChomikClick(secretChom);
            showComputerPrompt('Access granted.');
        } else {
            showComputerPrompt('Code already used.');
        }
    }
    else if (site === 'onlygodsninety') {
        if (foundChomiks.has('actual_chohio') && !monitorChomikQuestActive && !foundChomiks.has('monitor_chomik')) {
            monitorChomikQuestActive = true;
            ssybaPuzzlesSolved.clear();
            saveProgress();
            renderSsybaTsyhtema();
            showComputerPrompt('The Ssyba Tsyhtema realm feels... different. The puzzles have reset.');
        } else if (foundChomiks.has('monitor_chomik')) {
             showComputerPrompt('The distortion has settled.');
        } 
        else {
            showComputerPrompt('The code is meaningless for now.');
        }
    }
    else {
        const rand = Math.random();
        if (rand < 0.2 && !foundChomiks.has('malfunctioned_chomik')) {
            showMalfunctionedError();
        } else if (!foundChomiks.has('missing_texture_chomik')) {
            showMissingTextureError();
        } else if (!foundChomiks.has('malfunctioned_chomik')) {
            // If missing texture is found, guarantee the other one
            showMalfunctionedError();
        }
        else {
            showComputerPrompt('Website not found. Error 404.');
        }
    }
}

function handlePuzzleCommand(command) {
    for (const [puzzleId, code] of Object.entries(ssybaPuzzleCodes)) {
        if (command === code.toLowerCase()) {
            if (ssybaPuzzlesSolved.has(puzzleId)) {
                showComputerPrompt(`You already solved the ${puzzleId} puzzle.`);
                return;
            }

            ssybaPuzzlesSolved.add(puzzleId);
            showComputerPrompt(`Correct! Puzzle "${puzzleId}" solved. Congrats, now go back to suffering.`);
            saveProgress();
            renderSsybaTsyhtema();

            if (ssybaPuzzlesSolved.size === Object.keys(ssybaPuzzleCodes).length) {
                 if (monitorChomikQuestActive) {
                    const monitorChomik = chomiks.find(c => c.id === 'monitor_chomik');
                    if (monitorChomik) {
                        handleChomikClick(monitorChomik);
                        showComputerPrompt("The distortion subsides. Your reward is... unsettling.");
                        monitorChomikQuestActive = false; // End quest
                        saveProgress();
                    }
                } else {
                    const chohio = chomiks.find(c => c.id === 'actual_chohio');
                    if (chohio && !foundChomiks.has('actual_chohio')) {
                        handleChomikClick(chohio);
                        showComputerPrompt("You have suffered enough. A final reward has been granted.");
                        // Add secret area button
                        addSecretAreaButton();
                    }
                }
            }
            return;
        }
    }
    showComputerPrompt('Incorrect puzzle command.');
}

function handleAdobeSoftwareSearch(software) {
    const adobeSoftwareList = ['adobe photoshop', 'adobe illustrator', 'adobe premiere pro', 'adobe acrobat pro', 'adobe express'];
    const chomik = chomiks.find(c => c.id === 'adobe_flash_chomik');

    if (foundChomiks.has(chomik.id)) {
        showComputerPrompt(`You already have all the software and found ${chomik.name}.`);
        return;
    }

    if (adobeSoftwaresFound.has(software)) {
        showComputerPrompt(`You already "downloaded" ${software}. Found ${adobeSoftwaresFound.size}/${adobeSoftwareList.length}.`);
        return;
    }
    
    adobeSoftwaresFound.add(software);
    saveProgress();
    
    if (adobeSoftwaresFound.size === adobeSoftwareList.length) {
        if (chomik) {
            handleChomikClick(chomik);
            showComputerPrompt(`All Adobe software collected! You found the ${chomik.name}!`);
        }
    } else {
        showComputerPrompt(`"${software}" downloaded successfully. Found ${adobeSoftwaresFound.size}/${adobeSoftwareList.length}.`);
    }
}

function showGreenDayChom() {
    const chomik = chomiks.find(c => c.id === 'american_idiotik');
    computerViewEl.innerHTML = `
        <div id="green-day-site">
            <h1>GREEN DAY DOT CHOM</h1>
            <img src="/Green_Day.png" alt="Green Day American Idiotik" id="green-day-logo">
        </div>
    `;
    document.getElementById('green-day-logo').addEventListener('click', () => handleChomikClick(chomik));
}

function showMissingTextureError() {
    const chomik = chomiks.find(c => c.id === 'missing_texture_chomik');
    computerViewEl.innerHTML = `
        <div id="error-site">
            <h1>SYSTEM ERROR</h1>
            <p>Texture not found. Please install Counter-Strike: Source.</p>
            <img src="${chomik.image}" alt="${chomik.name}" id="error-image">
        </div>
    `;
    document.getElementById('error-image').addEventListener('click', () => handleChomikClick(chomik));
}

function showMalfunctionedError() {
    const chomik = chomiks.find(c => c.id === 'malfunctioned_chomik');
    computerViewEl.innerHTML = `
        <div id="error-site">
            <h1>CRITICAL_PROCESS_DIED</h1>
            <p>Your PC ran into a problem and needs to restart.</p>
            <img src="${chomik.image}" alt="${chomik.name}" id="error-image">
        </div>
    `;
    document.getElementById('error-image').addEventListener('click', () => handleChomikClick(chomik));
}

function showChessChom() {
    const chomik = chomiks.find(c => c.id === 'chess_chom');
    computerViewEl.innerHTML = `
        <div id="chess-chom-site">
            <img src="/Chess.chom.png" alt="Chess.chom Logo" id="chess-chom-logo">
            <h1>Welcome to Chess.chom</h1>
            <div class="chessboard">
                ${Array(64).fill(0).map((_, i) => {
                    const isDark = (Math.floor(i / 8) + i) % 2 === 0;
                    return `<div class="${isDark ? 'dark' : 'light'}"></div>`;
                }).join('')}
            </div>
        </div>
    `;
    document.getElementById('chess-chom-logo').addEventListener('click', () => handleChomikClick(chomik));
}

function showSkibidiSite() {
    const chomik = chomiks.find(c => c.id === 'dark_reader_chomik');
    computerViewEl.innerHTML = `
        <div id="skibidi-site">
            <p>Welcome to the Dark Web (of Chomiks)!</p>
            <img src="/WanderingSewers.png" alt="Dark Reader Chomik" id="dark-reader-chomik-img">
            <p>Don't wander too far...</p>
        </div>
    `;
    document.getElementById('dark-reader-chomik-img').addEventListener('click', () => handleChomikClick(chomik));
}

function addSecretAreaButton() {
    if (document.getElementById('secret-btn')) return;
    const secretBtn = document.createElement('button');
    secretBtn.id = 'secret-btn';
    secretBtn.className = 'area-btn';
    secretBtn.textContent = 'Secret';
    secretBtn.addEventListener('click', () => switchArea('Secret'));
    areaButtonsContainer.appendChild(secretBtn);
}

function addObbyAreaButton() {
    const areaName = 'OBBY OBBY OBBY OBBY OBBY OBBY OBBY OBBY OBBY OBBY OBBY OBBY OBBY OBBY OBBY OBBY';
    const btnId = areaName.replace(/\s/g, '').toLowerCase() + '-btn';
    if (document.getElementById(btnId)) return;
    const obbyBtn = document.createElement('button');
    obbyBtn.id = btnId;
    obbyBtn.className = 'area-btn';
    obbyBtn.textContent = 'OBBY OBBY...';
    obbyBtn.title = areaName;
    obbyBtn.addEventListener('click', () => switchArea(areaName));
    areaButtonsContainer.appendChild(obbyBtn);
}

// Add Forest button event listener
document.getElementById('forest-btn').addEventListener('click', (e) => {
    const areaId = e.target.id.replace('-btn','');
    let capitalizedAreaId = areaId.charAt(0).toUpperCase() + areaId.slice(1);
    if (areaId.startsWith('OBBY')) {
        capitalizedAreaId = button.title;
    }
    switchArea(capitalizedAreaId);

    // Track that the School question has been seen after it is active
    if (capitalizedAreaId === 'School' && schoolQuestionActive) {
        schoolQuestionSeen = true;
        saveProgress();
    }
});

// Event Listeners
areasToggleBtn.addEventListener('click', () => {
    areaButtonsContainer.classList.toggle('hidden');
});

dexBtn.onclick = () => {
    if (eateotTimer) {
        clearTimeout(eateotTimer);
        eateotTimer = null;
    }
    dexModal.style.display = 'block';
    // Reset search when opening, but keep sort/filter selections
    if (dexSearchInput) {
        dexSearchInput.value = '';
    }
    updateDex();
};

changelogBtn.onclick = () => {
    if (eateotTimer) {
        clearTimeout(eateotTimer);
        eateotTimer = null;
    }
    renderChangelog();
    changelogModal.style.display = 'block';
};

closeButtons.forEach(button => {
    button.onclick = (event) => {
        // Find the closest parent modal and hide it
        const modal = event.target.closest('.modal');
        if (modal) {
            modal.style.display = 'none';
            if (modal.id === 'computer-modal') {
                closeComputer();
            }
        }
    };
});

computerCloseBtn.onclick = closeComputer;

window.onclick = (event) => {
    if (event.target == dexModal) {
        dexModal.style.display = 'none';
    }
    if (event.target == computerModal) {
        closeComputer();
    }
    if (event.target == changelogModal) {
        changelogModal.style.display = 'none';
    }
};

areaButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const areaId = button.id.replace('-btn','');
        let capitalizedAreaId = areaId.charAt(0).toUpperCase() + areaId.slice(1).replace(' ', ' ');
        if (button.title === 'OBBY OBBY OBBY OBBY OBBY OBBY OBBY OBBY OBBY OBBY OBBY OBBY OBBY OBBY OBBY OBBY') {
            capitalizedAreaId = button.title;
        }
        switchArea(capitalizedAreaId);

        // Track that the School question has been seen after it is active
        if (capitalizedAreaId === 'School' && schoolQuestionActive) {
            schoolQuestionSeen = true;
            saveProgress();
        }
    });
});

// Dex search & filter event listeners
if (dexSortSelect) {
    dexSortSelect.addEventListener('change', () => {
        updateDex();
    });
}

if (dexSearchModeSelect) {
    dexSearchModeSelect.addEventListener('change', () => {
        updateDex();
    });
}

if (dexSearchInput) {
    dexSearchInput.addEventListener('input', () => {
        updateDex();
    });
}

// Toggle special chomiks view; Avaxus will also see the grant GUI
if (dexSpecialBtn) {
    dexSpecialBtn.addEventListener('click', () => {
        specialDexMode = !specialDexMode;
        if (specialDexMode) {
            // 50% chance to show Our Precious "Special" Chomik :)
            specialPreciousVisible = Math.random() < 0.5;
        } else {
            specialPreciousVisible = false;
        }
        dexSpecialBtn.textContent = specialDexMode ? 'Back to ChomikDex' : 'Show special chomiks';
        updateDex();
    });
}

function init() {
    loadProgress();

    // Global key listener for Pursuer Chomik (MEAT in Retro)
    window.addEventListener('keydown', handleGlobalKeydown);

    // Fetch current user for Avaxus admin detection
    (async () => {
        try {
            const user = window.websim && (await window.websim.getUser());
            currentUsername = user?.username?.toLowerCase() || null;
        } catch (e) {
            console.warn('Could not fetch current user:', e);
        }
    })();

    if (ssybaRealmUnlocked && !document.getElementById('ssyba tsyhtema-btn')) {
        const ssybaBtn = document.createElement('button');
        ssybaBtn.id = 'ssyba tsyhtema-btn';
        ssybaBtn.className = 'area-btn';
        ssybaBtn.textContent = 'Ssyba Tsyhtema';
        ssybaBtn.addEventListener('click', () => switchArea('Ssyba Tsyhtema'));
        areaButtonsContainer.appendChild(ssybaBtn);
    }
    
    if (foundChomiks.has('actual_chohio')) {
        addSecretAreaButton();
    }
    if (youJoinedQuest.stage >= 1) {
        addObbyAreaButton();
    }

    renderChomiks();
    switchArea('Spawn'); // Start at spawn

    // New: set up background music
    try {
        bgMusic = new Audio('/ytmp3free.cc_find-the-chomiks-ost-083-goofy-youtubemp3free.org.mp3');
        bgMusic.loop = true;
        bgMusic.muted = bgMusicMuted;
        bgMusic.volume = 0.6;
        bgMusic.play().catch(() => {
            // Autoplay might be blocked; user can still start it via the toggle button
        });
    } catch (e) {
        console.warn('Failed to initialize background music:', e);
    }

    // New: initialize music toggle button text and behavior
    if (musicToggleBtn) {
        musicToggleBtn.textContent = bgMusicMuted ? 'Unmute Music' : 'Mute Music';
        musicToggleBtn.onclick = () => {
            if (!bgMusic) return;
            bgMusicMuted = !bgMusicMuted;
            bgMusic.muted = bgMusicMuted;
            musicToggleBtn.textContent = bgMusicMuted ? 'Unmute Music' : 'Mute Music';
            saveProgress();
            // If user unmutes and audio was never started due to autoplay, try to play
            if (!bgMusicMuted) {
                bgMusic.play().catch(() => {});
            }
        };
    }
}

init();

// New: global key handler for special sequences like Pursuer Chomik
const MEAT_SEQUENCE = ['M', 'E', 'A', 'T'];
let meatProgress = 0;

function handleGlobalKeydown(e) {
    // Only track when in Retro area and Pursuer not yet unlocked
    if (currentAreaId !== 'Retro' || pursuerUnlocked) return;
    const key = e.key.toUpperCase();

    if (key === MEAT_SEQUENCE[meatProgress]) {
        meatProgress++;
        if (meatProgress === MEAT_SEQUENCE.length) {
            pursuerUnlocked = true;
            meatProgress = 0;
            saveProgress();
            showNotification('You feel something watching you...');
            renderRetro();
        }
    } else {
        // If this key could be the start of the sequence, set progress to 1, else reset
        meatProgress = key === MEAT_SEQUENCE[0] ? 1 : 0;
    }
}

// Append choccy button helper (existing function unchanged)
function appendChoccyButton(parent) {
    const spacer = document.createElement('div');
    spacer.style.height = '800px';
    const btn = document.createElement('button');
    btn.id = 'choccy-btn';
    btn.textContent = '??';
    btn.style.cssText = 'display:block;margin:30px auto;background:#6b4f2a;color:#fff;border:2px solid #3e2a13;padding:12px 18px;border-radius:6px;cursor:pointer;';
    btn.title = 'A suspicious brown button...';
    btn.onclick = () => {
        if (choccyUnlocked) { showNotification('Nothing happens.'); return; }
        choccyUnlocked = true; saveProgress();
        showNotification('You hear something appear near the computer...');
        renderHouse(); switchArea('House');
    };
    parent.appendChild(spacer);
    parent.appendChild(btn);
}

// ===== Special Chomiks admin helpers (Avaxus only in specialDexMode) =====

function openSpecialChomiksPanel() {
    // Simple admin-style GUI injected into dex-details
    let optionsHtml = '';
    SPECIAL_CHOMIKS.forEach(ch => {
        optionsHtml += `
            <option value="${ch.id}">
                ${ch.name}
            </option>
        `;
    });

    dexDetailsEl.innerHTML = `
        <div id="special-chomiks-panel">
            <h3>Special Chomiks (Admin)</h3>
            <p style="font-size:0.9em;color:#666;">
                These chomiks are not obtainable in-game and are manually granted.
            </p>
            <div style="margin-top:10px;display:flex;flex-direction:column;gap:8px;max-width:320px;">
                <label style="font-size:0.9em;">
                    Target Websim username:
                    <input type="text" id="special-chomik-username" style="width:100%;padding:4px 6px;border-radius:4px;border:1px solid:#ccc;margin-top:3px;">
                </label>
                <label style="font-size:0.9em;">
                    Special chomik:
                    <select id="special-chomik-select" style="width:100%;padding:4px 6px;border-radius:4px;border:1px solid:#ccc;margin-top:3px;">
                        ${optionsHtml}
                    </select>
                </label>
                <button id="special-chomik-give-btn" style="margin-top:6px;padding:6px 10px;border-radius:4px;border:none;background:#28a745;color:#fff;cursor:pointer;font-size:0.9em;">
                    Give
                </button>
            </div>
            <div id="special-chomik-preview" style="margin-top:15px;">
                ${renderSpecialChomikPreview(SPECIAL_CHOMIKS[0])}
            </div>
            <div id="special-chomik-log" style="margin-top:15px;font-size:0.85em;color:#555;max-height:140px;overflow-y:auto;border-top:1px solid #eee;padding-top:8px;">
                ${renderSpecialChomikLog()}
            </div>
        </div>
    `;

    const selectEl = document.getElementById('special-chomik-select');
    const previewEl = document.getElementById('special-chomik-preview');
    const giveBtn = document.getElementById('special-chomik-give-btn');

    if (selectEl && previewEl) {
        selectEl.addEventListener('change', () => {
            const chosen = SPECIAL_CHOMIKS.find(c => c.id === selectEl.value);
            previewEl.innerHTML = renderSpecialChomikPreview(chosen);
        });
    }

    if (giveBtn) {
        giveBtn.addEventListener('click', async () => {
            const usernameInput = document.getElementById('special-chomik-username');
            const selectedId = selectEl?.value;
            const targetName = (usernameInput?.value || '').trim();

            if (!targetName) {
                showNotification('Please enter a target username.');
                return;
            }
            const chosen = SPECIAL_CHOMIKS.find(c => c.id === selectedId);
            if (!chosen) {
                showNotification('Please choose a special chomik.');
                return;
            }

            let giver = 'unknown';
            try {
                const currentUser = window.websim && (await window.websim.getUser());
                giver = currentUser?.username || 'unknown';
            } catch (e) {
                console.warn('Could not fetch current user for grant log.');
            }

            const grants = loadSpecialChomikGrants();
            grants.push({
                to: targetName,
                chomikId: chosen.id,
                chomikName: chosen.name,
                givenBy: giver,
                at: new Date().toISOString()
            });
            saveSpecialChomikGrants(grants);

            showNotification(`Gave "${chosen.name}" to @${targetName}.`);
            const logEl = document.getElementById('special-chomik-log');
            if (logEl) {
                logEl.innerHTML = renderSpecialChomikLog(grants);
            }
        });
    }
}

function renderSpecialChomikPreview(ch) {
    if (!ch) return '<p>No chomik selected.</p>';
    return `
        <div style="display:flex;gap:12px;align-items:flex-start;">
            <img src="${ch.image}" alt="${ch.name}" style="width:120px;height:120px;object-fit:contain;border-radius:8px;border:1px solid #ddd;background:#fafafa;">
            <div>
                <h4 style="margin:0 0 6px 0;">${ch.name}</h4>
                <p style="margin:0;font-size:0.9em;color:#555;"><strong>Hint:</strong> ${ch.hint}</p>
                <p style="margin:6px 0 0 0;font-size:0.8em;color:#888;">(Special chomik – not obtainable via gameplay)</p>
            </div>
        </div>
    `;
}

function loadSpecialChomikGrants() {
    try {
        const raw = localStorage.getItem('specialChomikGrants');
        if (!raw) return [];
        const parsed = JSON.parse(raw);
        return Array.isArray(parsed) ? parsed : [];
    } catch (e) {
        console.error('Failed to load special chomik grants:', e);
        return [];
    }
}

function saveSpecialChomikGrants(grants) {
    try {
        localStorage.setItem('specialChomikGrants', JSON.stringify(grants));
    } catch (e) {
        console.error('Failed to save special chomik grants:', e);
    }
}

function renderSpecialChomikLog(existingGrants) {
    const grants = existingGrants || loadSpecialChomikGrants();
    if (!grants.length) {
        return '<p>No special chomiks have been given out yet.</p>';
    }

    const items = grants
        .slice()
        .reverse()
        .map(g => {
            const date = new Date(g.at);
            const dateStr = isNaN(date.getTime()) ? g.at : date.toLocaleString();
            return `<div style="margin-bottom:4px;">
                <span><strong>${g.chomikName}</strong> → @${g.to}</span>
                <br><span style="font-size:0.75em;color:#777;">by @${g.givenBy} on ${dateStr}</span>
            </div>`;
        })
        .join('');

    return items;
}