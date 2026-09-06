/* ===================================
   GAMING DOCK - JAVASCRIPT
   Complete Functionality
   =================================== */

// ===================================
// DATA - GAMES
// ===================================

const games = [
    {
        id: 1,
        title: "Grand Theft Auto V",
        genre: "Action",
        category: "Open World",
        description: "Explore Los Santos in a massive open-world action adventure featuring missions, vehicles, and a cinematic story.",
        platform: "PC",
        releaseYear: "2015",
        cover: "https://via.placeholder.com/400x300?text=Grand+Theft+Auto+V",
        screenshots: [
            "https://via.placeholder.com/800x450?text=GTA+V+Screenshot+1",
            "https://via.placeholder.com/800x450?text=GTA+V+Screenshot+2",
            "https://via.placeholder.com/800x450?text=GTA+V+Screenshot+3"
        ],
        systemRequirements: {
            minimum: "OS: Windows 10, CPU: Intel Core 2 Quad, RAM: 4GB, GPU: NVIDIA 9800 GT, Storage: 72GB",
            recommended: "OS: Windows 10/11, CPU: Intel Core i5, RAM: 8GB, GPU: GTX 1060, Storage: 72GB"
        },
        downloadUrl: ""
    },

    {
        id: 2,
        title: "Need for Speed Rivals",
        genre: "Racing",
        category: "Racing",
        description: "Experience intense high-speed races and police pursuits across a dynamic open-world racing environment.",
        platform: "PC",
        releaseYear: "2013",
        cover: "https://via.placeholder.com/400x300?text=Need+for+Speed+Rivals",
        screenshots: [
            "https://via.placeholder.com/800x450?text=NFS+Rivals+Screenshot+1",
            "https://via.placeholder.com/800x450?text=NFS+Rivals+Screenshot+2",
            "https://via.placeholder.com/800x450?text=NFS+Rivals+Screenshot+3"
        ],
        systemRequirements: {
            minimum: "OS: Windows 7, CPU: Intel Core 2 Duo, RAM: 4GB, GPU: GTX 460, Storage: 30GB",
            recommended: "OS: Windows 8/10/11, CPU: Intel Core i5, RAM: 8GB, GPU: GTX 660, Storage: 30GB"
        },
        downloadUrl: ""
    },

    {
        id: 3,
        title: "Assassin's Creed III",
        genre: "Adventure",
        category: "Story Mode",
        description: "Follow an epic historical adventure through a large world filled with exploration, combat, and memorable missions.",
        platform: "PC",
        releaseYear: "2012",
        cover: "https://via.placeholder.com/400x300?text=Assassins+Creed+III",
        screenshots: [
            "https://via.placeholder.com/800x450?text=AC+III+Screenshot+1",
            "https://via.placeholder.com/800x450?text=AC+III+Screenshot+2",
            "https://via.placeholder.com/800x450?text=AC+III+Screenshot+3"
        ],
        systemRequirements: {
            minimum: "OS: Windows 7, CPU: Intel Core 2 Duo, RAM: 2GB, GPU: GTX 260, Storage: 17GB",
            recommended: "OS: Windows 10/11, CPU: Intel Core i5, RAM: 4GB, GPU: GTX 660, Storage: 17GB"
        },
        downloadUrl: ""
    },

    {
        id: 4,
        title: "Far Cry 3",
        genre: "Action",
        category: "Open World",
        description: "Survive on a dangerous tropical island while exploring the environment, completing missions, and facing enemies.",
        platform: "PC",
        releaseYear: "2012",
        cover: "https://via.placeholder.com/400x300?text=Far+Cry+3",
        screenshots: [
            "https://via.placeholder.com/800x450?text=Far+Cry+3+Screenshot+1",
            "https://via.placeholder.com/800x450?text=Far+Cry+3+Screenshot+2",
            "https://via.placeholder.com/800x450?text=Far+Cry+3+Screenshot+3"
        ],
        systemRequirements: {
            minimum: "OS: Windows 7, CPU: Intel Core 2 Duo, RAM: 4GB, GPU: GTX 8800, Storage: 15GB",
            recommended: "OS: Windows 10/11, CPU: Intel Core i5, RAM: 8GB, GPU: GTX 560, Storage: 15GB"
        },
        downloadUrl: ""
    },

    {
        id: 5,
        title: "Tomb Raider",
        genre: "Adventure",
        category: "Story Mode",
        description: "Join Lara Croft on a dangerous expedition involving exploration, survival, puzzles, and intense action.",
        platform: "PC",
        releaseYear: "2013",
        cover: "https://via.placeholder.com/400x300?text=Tomb+Raider",
        screenshots: [
            "https://via.placeholder.com/800x450?text=Tomb+Raider+Screenshot+1",
            "https://via.placeholder.com/800x450?text=Tomb+Raider+Screenshot+2",
            "https://via.placeholder.com/800x450?text=Tomb+Raider+Screenshot+3"
        ],
        systemRequirements: {
            minimum: "OS: Windows 7, CPU: Intel Core 2 Duo, RAM: 2GB, GPU: Radeon HD 2600, Storage: 12GB",
            recommended: "OS: Windows 10/11, CPU: Intel Core i5, RAM: 8GB, GPU: GTX 660, Storage: 12GB"
        },
        downloadUrl: ""
    },

    {
        id: 6,
        title: "Sleeping Dogs",
        genre: "Action",
        category: "Open World",
        description: "Explore a detailed city while taking part in an undercover crime story packed with driving, combat, and missions.",
        platform: "PC",
        releaseYear: "2012",
        cover: "https://via.placeholder.com/400x300?text=Sleeping+Dogs",
        screenshots: [
            "https://via.placeholder.com/800x450?text=Sleeping+Dogs+Screenshot+1",
            "https://via.placeholder.com/800x450?text=Sleeping+Dogs+Screenshot+2",
            "https://via.placeholder.com/800x450?text=Sleeping+Dogs+Screenshot+3"
        ],
        systemRequirements: {
            minimum: "OS: Windows 7, CPU: Core 2 Duo, RAM: 2GB, GPU: GeForce 8800 GT, Storage: 15GB",
            recommended: "OS: Windows 10/11, CPU: Intel Core i5, RAM: 4GB, GPU: GTX 560, Storage: 15GB"
        },
        downloadUrl: ""
    },

    {
        id: 7,
        title: "Mafia II",
        genre: "Action",
        category: "Story Mode",
        description: "Experience a cinematic crime story set in a detailed city with driving, combat, exploration, and memorable characters.",
        platform: "PC",
        releaseYear: "2010",
        cover: "https://via.placeholder.com/400x300?text=Mafia+II",
        screenshots: [
            "https://via.placeholder.com/800x450?text=Mafia+II+Screenshot+1",
            "https://via.placeholder.com/800x450?text=Mafia+II+Screenshot+2",
            "https://via.placeholder.com/800x450?text=Mafia+II+Screenshot+3"
        ],
        systemRequirements: {
            minimum: "OS: Windows 7, CPU: Pentium D 3GHz, RAM: 2GB, GPU: GeForce 8600, Storage: 8GB",
            recommended: "OS: Windows 10/11, CPU: Intel Core i5, RAM: 4GB, GPU: GTX 560, Storage: 8GB"
        },
        downloadUrl: ""
    },

    {
        id: 8,
        title: "Just Cause 2",
        genre: "Action",
        category: "Open World",
        description: "Explore a huge island filled with vehicles, missions, stunts, and explosive open-world gameplay.",
        platform: "PC",
        releaseYear: "2010",
        cover: "https://via.placeholder.com/400x300?text=Just+Cause+2",
        screenshots: [
            "https://via.placeholder.com/800x450?text=Just+Cause+2+Screenshot+1",
            "https://via.placeholder.com/800x450?text=Just+Cause+2+Screenshot+2",
            "https://via.placeholder.com/800x450?text=Just+Cause+2+Screenshot+3"
        ],
        systemRequirements: {
            minimum: "OS: Windows Vista/7, CPU: Dual Core 2.6GHz, RAM: 2GB, GPU: GTX 8800, Storage: 10GB",
            recommended: "OS: Windows 10/11, CPU: Intel Core i5, RAM: 4GB, GPU: GTX 560, Storage: 10GB"
        },
        downloadUrl: ""
    },

    {
        id: 9,
        title: "Euro Truck Simulator 2",
        genre: "Simulator",
        category: "Simulator",
        description: "Drive across European roads, deliver cargo, customize trucks, and build your own transport business.",
        platform: "PC",
        releaseYear: "2012",
        cover: "https://via.placeholder.com/400x300?text=Euro+Truck+Simulator+2",
        screenshots: [
            "https://via.placeholder.com/800x450?text=ETS2+Screenshot+1",
            "https://via.placeholder.com/800x450?text=ETS2+Screenshot+2",
            "https://via.placeholder.com/800x450?text=ETS2+Screenshot+3"
        ],
        systemRequirements: {
            minimum: "OS: Windows 7, CPU: Dual Core 2.4GHz, RAM: 4GB, GPU: GTX 760, Storage: 25GB",
            recommended: "OS: Windows 10/11, CPU: Quad Core, RAM: 8GB, GPU: GTX 1060, Storage: 25GB"
        },
        downloadUrl: ""
    },

    {
        id: 10,
        title: "Batman: Arkham City",
        genre: "Action",
        category: "Adventure",
        description: "Take control of Batman in a dark open environment featuring combat, investigation, exploration, and a cinematic story.",
        platform: "PC",
        releaseYear: "2011",
        cover: "https://via.placeholder.com/400x300?text=Batman+Arkham+City",
        screenshots: [
            "https://via.placeholder.com/800x450?text=Batman+Screenshot+1",
            "https://via.placeholder.com/800x450?text=Batman+Screenshot+2",
            "https://via.placeholder.com/800x450?text=Batman+Screenshot+3"
        ],
        systemRequirements: {
            minimum: "OS: Windows 7, CPU: Intel Core 2 Duo, RAM: 2GB, GPU: NVIDIA 8800 GT, Storage: 17GB",
            recommended: "OS: Windows 10/11, CPU: Intel Core i5, RAM: 8GB, GPU: GTX 660, Storage: 17GB"
        },
        downloadUrl: ""
    }
];   

// ===================================
// DATA - UPDATES
// ===================================

const updates = [
    {
      
        id: 1,
        title: "Grand Theft Auto V",
        genre: "Action",
        category: "Open World",
        description: "Explore Los Santos in a massive open-world action adventure featuring missions, vehicles, and a cinematic story.",
        platform: "PC",
        releaseYear: "2015",
        cover: "https://via.placeholder.com/400x300?text=Grand+Theft+Auto+V",
        screenshots: [
            "https://via.placeholder.com/800x450?text=GTA+V+Screenshot+1",
            "https://via.placeholder.com/800x450?text=GTA+V+Screenshot+2",
            "https://via.placeholder.com/800x450?text=GTA+V+Screenshot+3"
        ],
        systemRequirements: {
            minimum: "OS: Windows 10, CPU: Intel Core 2 Quad, RAM: 4GB, GPU: NVIDIA 9800 GT, Storage: 72GB",
            recommended: "OS: Windows 10/11, CPU: Intel Core i5, RAM: 8GB, GPU: GTX 1060, Storage: 72GB"
        },
        downloadUrl: ""
    },

    {
        id: 2,
        title: "Need for Speed Rivals",
        genre: "Racing",
        category: "Racing",
        description: "Experience intense high-speed races and police pursuits across a dynamic open-world racing environment.",
        platform: "PC",
        releaseYear: "2013",
        cover: "https://via.placeholder.com/400x300?text=Need+for+Speed+Rivals",
        screenshots: [
            "https://via.placeholder.com/800x450?text=NFS+Rivals+Screenshot+1",
            "https://via.placeholder.com/800x450?text=NFS+Rivals+Screenshot+2",
            "https://via.placeholder.com/800x450?text=NFS+Rivals+Screenshot+3"
        ],
        systemRequirements: {
            minimum: "OS: Windows 7, CPU: Intel Core 2 Duo, RAM: 4GB, GPU: GTX 460, Storage: 30GB",
            recommended: "OS: Windows 8/10/11, CPU: Intel Core i5, RAM: 8GB, GPU: GTX 660, Storage: 30GB"
        },
        downloadUrl: ""
    },

    {
        id: 3,
        title: "Assassin's Creed III",
        genre: "Adventure",
        category: "Story Mode",
        description: "Follow an epic historical adventure through a large world filled with exploration, combat, and memorable missions.",
        platform: "PC",
        releaseYear: "2012",
        cover: "https://via.placeholder.com/400x300?text=Assassins+Creed+III",
        screenshots: [
            "https://via.placeholder.com/800x450?text=AC+III+Screenshot+1",
            "https://via.placeholder.com/800x450?text=AC+III+Screenshot+2",
            "https://via.placeholder.com/800x450?text=AC+III+Screenshot+3"
        ],
        systemRequirements: {
            minimum: "OS: Windows 7, CPU: Intel Core 2 Duo, RAM: 2GB, GPU: GTX 260, Storage: 17GB",
            recommended: "OS: Windows 10/11, CPU: Intel Core i5, RAM: 4GB, GPU: GTX 660, Storage: 17GB"
        },
        downloadUrl: ""
    },

    {
        id: 4,
        title: "Far Cry 3",
        genre: "Action",
        category: "Open World",
        description: "Survive on a dangerous tropical island while exploring the environment, completing missions, and facing enemies.",
        platform: "PC",
        releaseYear: "2012",
        cover: "https://via.placeholder.com/400x300?text=Far+Cry+3",
        screenshots: [
            "https://via.placeholder.com/800x450?text=Far+Cry+3+Screenshot+1",
            "https://via.placeholder.com/800x450?text=Far+Cry+3+Screenshot+2",
            "https://via.placeholder.com/800x450?text=Far+Cry+3+Screenshot+3"
        ],
        systemRequirements: {
            minimum: "OS: Windows 7, CPU: Intel Core 2 Duo, RAM: 4GB, GPU: GTX 8800, Storage: 15GB",
            recommended: "OS: Windows 10/11, CPU: Intel Core i5, RAM: 8GB, GPU: GTX 560, Storage: 15GB"
        },
        downloadUrl: ""
    },

    {
        id: 5,
        title: "Tomb Raider",
        genre: "Adventure",
        category: "Story Mode",
        description: "Join Lara Croft on a dangerous expedition involving exploration, survival, puzzles, and intense action.",
        platform: "PC",
        releaseYear: "2013",
        cover: "https://via.placeholder.com/400x300?text=Tomb+Raider",
        screenshots: [
            "https://via.placeholder.com/800x450?text=Tomb+Raider+Screenshot+1",
            "https://via.placeholder.com/800x450?text=Tomb+Raider+Screenshot+2",
            "https://via.placeholder.com/800x450?text=Tomb+Raider+Screenshot+3"
        ],
        systemRequirements: {
            minimum: "OS: Windows 7, CPU: Intel Core 2 Duo, RAM: 2GB, GPU: Radeon HD 2600, Storage: 12GB",
            recommended: "OS: Windows 10/11, CPU: Intel Core i5, RAM: 8GB, GPU: GTX 660, Storage: 12GB"
        },
        downloadUrl: ""
    },

    {
        id: 6,
        title: "Sleeping Dogs",
        genre: "Action",
        category: "Open World",
        description: "Explore a detailed city while taking part in an undercover crime story packed with driving, combat, and missions.",
        platform: "PC",
        releaseYear: "2012",
        cover: "https://via.placeholder.com/400x300?text=Sleeping+Dogs",
        screenshots: [
            "https://via.placeholder.com/800x450?text=Sleeping+Dogs+Screenshot+1",
            "https://via.placeholder.com/800x450?text=Sleeping+Dogs+Screenshot+2",
            "https://via.placeholder.com/800x450?text=Sleeping+Dogs+Screenshot+3"
        ],
        systemRequirements: {
            minimum: "OS: Windows 7, CPU: Core 2 Duo, RAM: 2GB, GPU: GeForce 8800 GT, Storage: 15GB",
            recommended: "OS: Windows 10/11, CPU: Intel Core i5, RAM: 4GB, GPU: GTX 560, Storage: 15GB"
        },
        downloadUrl: ""
    },

    {
        id: 7,
        title: "Mafia II",
        genre: "Action",
        category: "Story Mode",
        description: "Experience a cinematic crime story set in a detailed city with driving, combat, exploration, and memorable characters.",
        platform: "PC",
        releaseYear: "2010",
        cover: "https://via.placeholder.com/400x300?text=Mafia+II",
        screenshots: [
            "https://via.placeholder.com/800x450?text=Mafia+II+Screenshot+1",
            "https://via.placeholder.com/800x450?text=Mafia+II+Screenshot+2",
            "https://via.placeholder.com/800x450?text=Mafia+II+Screenshot+3"
        ],
        systemRequirements: {
            minimum: "OS: Windows 7, CPU: Pentium D 3GHz, RAM: 2GB, GPU: GeForce 8600, Storage: 8GB",
            recommended: "OS: Windows 10/11, CPU: Intel Core i5, RAM: 4GB, GPU: GTX 560, Storage: 8GB"
        },
        downloadUrl: ""
    },

    {
        id: 8,
        title: "Just Cause 2",
        genre: "Action",
        category: "Open World",
        description: "Explore a huge island filled with vehicles, missions, stunts, and explosive open-world gameplay.",
        platform: "PC",
        releaseYear: "2010",
        cover: "https://via.placeholder.com/400x300?text=Just+Cause+2",
        screenshots: [
            "https://via.placeholder.com/800x450?text=Just+Cause+2+Screenshot+1",
            "https://via.placeholder.com/800x450?text=Just+Cause+2+Screenshot+2",
            "https://via.placeholder.com/800x450?text=Just+Cause+2+Screenshot+3"
        ],
        systemRequirements: {
            minimum: "OS: Windows Vista/7, CPU: Dual Core 2.6GHz, RAM: 2GB, GPU: GTX 8800, Storage: 10GB",
            recommended: "OS: Windows 10/11, CPU: Intel Core i5, RAM: 4GB, GPU: GTX 560, Storage: 10GB"
        },
        downloadUrl: ""
    },

    {
        id: 9,
        title: "Euro Truck Simulator 2",
        genre: "Simulator",
        category: "Simulator",
        description: "Drive across European roads, deliver cargo, customize trucks, and build your own transport business.",
        platform: "PC",
        releaseYear: "2012",
        cover: "https://via.placeholder.com/400x300?text=Euro+Truck+Simulator+2",
        screenshots: [
            "https://via.placeholder.com/800x450?text=ETS2+Screenshot+1",
            "https://via.placeholder.com/800x450?text=ETS2+Screenshot+2",
            "https://via.placeholder.com/800x450?text=ETS2+Screenshot+3"
        ],
        systemRequirements: {
            minimum: "OS: Windows 7, CPU: Dual Core 2.4GHz, RAM: 4GB, GPU: GTX 760, Storage: 25GB",
            recommended: "OS: Windows 10/11, CPU: Quad Core, RAM: 8GB, GPU: GTX 1060, Storage: 25GB"
        },
        downloadUrl: ""
    },

    {
        id: 10,
        title: "Batman: Arkham City",
        genre: "Action",
        category: "Adventure",
        description: "Take control of Batman in a dark open environment featuring combat, investigation, exploration, and a cinematic story.",
        platform: "PC",
        releaseYear: "2011",
        cover: "https://via.placeholder.com/400x300?text=Batman+Arkham+City",
        screenshots: [
            "https://via.placeholder.com/800x450?text=Batman+Screenshot+1",
            "https://via.placeholder.com/800x450?text=Batman+Screenshot+2",
            "https://via.placeholder.com/800x450?text=Batman+Screenshot+3"
        ],
        systemRequirements: {
            minimum: "OS: Windows 7, CPU: Intel Core 2 Duo, RAM: 2GB, GPU: NVIDIA 8800 GT, Storage: 17GB",
            recommended: "OS: Windows 10/11, CPU: Intel Core i5, RAM: 8GB, GPU: GTX 660, Storage: 17GB"
        },
        downloadUrl: ""
    }
];

// ===================================
// STATE MANAGEMENT
// ===================================

let currentUser = null;
let currentPage = 'home';
let filteredGames = [...games];
let selectedCategory = 'all';

// Load user from localStorage on page load
function loadUserData() {
    const userData = localStorage.getItem('gamingDockUser');
    if (userData) {
        try {
            currentUser = JSON.parse(userData);
            updateUserUI();
        } catch (e) {
            console.log('Invalid user data');
            currentUser = null;
        }
    }
}

// ===================================
// INITIALIZATION
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    loadUserData();
    renderGames();
    renderUpdates();
    setupEventListeners();
    setupCookieConsent();
    updateUserUI();
    navigateTo('home');
});

// ===================================
// EVENT LISTENERS
// ===================================

function setupEventListeners() {
    // Navigation
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const page = this.getAttribute('data-page');
            navigateTo(page);
            closeHamburger();
        });
    });

    // Hamburger Menu
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Search
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', handleSearch);
    }

    // Category Filter
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            selectedCategory = this.getAttribute('data-category');
            filterGames();
        });
    });

    // Contact Form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }
}

// ===================================
// NAVIGATION
// ===================================

function navigateTo(page) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    
    // Show selected page
    const pageElement = document.getElementById(page);
    if (pageElement) {
        pageElement.classList.add('active');
        currentPage = page;
        
        // Update nav links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-page') === page) {
                link.classList.add('active');
            }
        });

        // Special handling for certain pages
        if (page === 'profile') {
            if (!currentUser) {
                navigateTo('login');
                return;
            }
            displayProfile();
        }

        // Scroll to top
        window.scrollTo(0, 0);
    }
}

function closeHamburger() {
    document.getElementById('hamburger').classList.remove('active');
    document.getElementById('navMenu').classList.remove('active');
}

// ===================================
// GAMES RENDERING
// ===================================

function renderGames() {
    const container = document.getElementById('gamesContainer');
    if (!container) return;

    container.innerHTML = '';
    
    if (filteredGames.length === 0) {
        document.getElementById('noGamesMessage').style.display = 'block';
        return;
    }
    
    document.getElementById('noGamesMessage').style.display = 'none';

    filteredGames.forEach(game => {
        const gameCard = document.createElement('div');
        gameCard.className = 'game-card';
        gameCard.innerHTML = `
            <div class="game-card-image">
                <img src="${game.cover}" alt="${game.title}">
            </div>
            <div class="game-card-content">
                <h3 class="game-title">${game.title}</h3>
                <span class="game-genre">${game.genre}</span>
                <p class="game-description">${game.description}</p>
                <div class="game-meta">
                    <div class="game-meta-item">
                        <span>📱 ${game.platform.split(',')[0].trim()}</span>
                    </div>
                    <div class="game-meta-item">
                        <span>📅 ${game.releaseYear}</span>
                    </div>
                </div>
                <button class="game-card-button" onclick="viewGameDetails(${game.id})">VIEW DETAILS</button>
            </div>
        `;
        container.appendChild(gameCard);
    });
}

// ===================================
// GAME SEARCH & FILTER
// ===================================

function handleSearch(event) {
    const searchTerm = event.target.value.toLowerCase();
    
    filteredGames = games.filter(game => {
        const matchesSearch = game.title.toLowerCase().includes(searchTerm) ||
                            game.genre.toLowerCase().includes(searchTerm) ||
                            game.description.toLowerCase().includes(searchTerm);
        const matchesCategory = selectedCategory === 'all' || game.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });
    
    renderGames();
}

function filterGames() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    
    filteredGames = games.filter(game => {
        const matchesSearch = game.title.toLowerCase().includes(searchTerm) ||
                            game.genre.toLowerCase().includes(searchTerm) ||
                            game.description.toLowerCase().includes(searchTerm);
        const matchesCategory = selectedCategory === 'all' || game.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });
    
    renderGames();
}

function filterByCategory(category) {
    navigateTo('games');
    setTimeout(() => {
        selectedCategory = category;
        document.querySelectorAll('.category-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-category') === category) {
                btn.classList.add('active');
            }
        });
        filterGames();
    }, 100);
}

// ===================================
// GAME DETAILS MODAL
// ===================================

function viewGameDetails(gameId) {
    const game = games.find(g => g.id === gameId);
    if (!game) return;

    const modal = document.getElementById('gameDetailsModal');
    const container = document.getElementById('gameDetailsContainer');

    const downloadButtonHTML = currentUser
        ? `<button class="btn-primary btn-full" onclick="downloadGame(${game.id})">
             ${game.downloadUrl ? 'DOWNLOAD GAME' : 'DOWNLOAD GAME - Link Coming Soon'}
           </button>`
        : `<button class="btn-secondary btn-full" onclick="promptLogin()">
             LOGIN TO DOWNLOAD
           </button>`;

    container.innerHTML = `
        <div class="game-details-header">
            <div class="game-details-cover">
                <img src="${game.cover}" alt="${game.title}">
            </div>
            <div class="game-details-info">
                <h2 class="game-details-title">${game.title}</h2>
                <div class="game-details-meta">
                    <div class="game-details-meta-item">
                        <span class="game-details-meta-label">Genre</span>
                        <span class="game-details-meta-value">${game.genre}</span>
                    </div>
                    <div class="game-details-meta-item">
                        <span class="game-details-meta-label">Platform</span>
                        <span class="game-details-meta-value">${game.platform}</span>
                    </div>
                    <div class="game-details-meta-item">
                        <span class="game-details-meta-label">Released</span>
                        <span class="game-details-meta-value">${game.releaseYear}</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="game-details-description">
            <h3>About This Game</h3>
            <p>${game.description}</p>
        </div>

        <div class="game-details-requirements">
            <h3>System Requirements</h3>
            <div class="requirements-box">
                <h4>Minimum</h4>
                <p>${game.systemRequirements.minimum}</p>
            </div>
            <div class="requirements-box">
                <h4>Recommended</h4>
                <p>${game.systemRequirements.recommended}</p>
            </div>
        </div>

        <div class="game-details-download">
            <h3>Ready to Play?</h3>
            <p class="download-message ${!currentUser ? 'login-required' : game.downloadUrl ? '' : 'available-soon'}">
                ${!currentUser ? 'You must be logged in to download this game.' : game.downloadUrl ? 'Start your adventure now!' : 'Download link will be available soon.'}
            </p>
            ${downloadButtonHTML}
        </div>

        ${game.screenshots && game.screenshots.length > 0 ? `
            <div class="game-gallery">
                <h3>Screenshots</h3>
                <div class="gallery-grid">
                    ${game.screenshots.map(screenshot => `
                        <div class="gallery-item">
                            <img src="${screenshot}" alt="Screenshot">
                        </div>
                    `).join('')}
                </div>
            </div>
        ` : ''}
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeGameDetails() {
    const modal = document.getElementById('gameDetailsModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function downloadGame(gameId) {
    const game = games.find(g => g.id === gameId);
    if (!game) return;

    if (!currentUser) {
        promptLogin();
        return;
    }

    if (!game.downloadUrl) {
        alert('Download link will be available soon. Please check back later!');
        return;
    }

    window.location.href = game.downloadUrl;
}

function promptLogin() {
    alert('Please log in to download games. Redirecting to login page...');
    closeGameDetails();
    navigateTo('login');
}

// ===================================
// UPDATES RENDERING
// ===================================

function renderUpdates() {
    const container = document.getElementById('updatesContainer');
    if (!container) return;

    container.innerHTML = '';

    updates.forEach(update => {
        const updateCard = document.createElement('div');
        updateCard.className = 'update-card';
        updateCard.innerHTML = `
            <div class="update-image">
                <img src="${update.image}" alt="${update.title}">
            </div>
            <div class="update-content">
                <p class="update-date">${update.date}</p>
                <h3 class="update-title">${update.title}</h3>
                <p class="update-description">${update.description}</p>
                <button class="update-card-button" onclick="alert('${update.content}')">READ MORE</button>
            </div>
        `;
        container.appendChild(updateCard);
    });
}

// ===================================
// AUTHENTICATION
// ===================================

function handleLogin(event) {
    event.preventDefault();

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // Frontend validation only
    if (!email || !password) {
        showAuthMessage('loginMessage', 'Please fill in all fields', 'error');
        return;
    }

    if (!email.includes('@')) {
        showAuthMessage('loginMessage', 'Please enter a valid email', 'error');
        return;
    }

    // Simulate successful login (FRONTEND ONLY - NOT SECURE)
    const user = {
        email: email,
        username: email.split('@')[0],
        memberSince: new Date().toLocaleDateString()
    };

    currentUser = user;
    localStorage.setItem('gamingDockUser', JSON.stringify(user));

    showAuthMessage('loginMessage', 'Login successful! Redirecting...', 'success');
    
    setTimeout(() => {
        document.getElementById('loginForm').reset();
        updateUserUI();
        navigateTo('home');
    }, 1500);
}

function handleRegister(event) {
    event.preventDefault();

    const username = document.getElementById('registerUsername').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const confirm = document.getElementById('registerConfirm').value;

    // Frontend validation
    if (!username || !email || !password || !confirm) {
        showAuthMessage('registerMessage', 'Please fill in all fields', 'error');
        return;
    }

    if (username.length < 3) {
        showAuthMessage('registerMessage', 'Username must be at least 3 characters', 'error');
        return;
    }

    if (!email.includes('@')) {
        showAuthMessage('registerMessage', 'Please enter a valid email', 'error');
        return;
    }

    if (password.length < 6) {
        showAuthMessage('registerMessage', 'Password must be at least 6 characters', 'error');
        return;
    }

    if (password !== confirm) {
        showAuthMessage('registerMessage', 'Passwords do not match', 'error');
        return;
    }

    // Simulate successful registration
    const user = {
        email: email,
        username: username,
        memberSince: new Date().toLocaleDateString()
    };

    currentUser = user;
    localStorage.setItem('gamingDockUser', JSON.stringify(user));

    showAuthMessage('registerMessage', 'Registration successful! Redirecting to home...', 'success');
    
    setTimeout(() => {
        document.getElementById('registerForm').reset();
        updateUserUI();
        navigateTo('home');
    }, 1500);
}

function handleLogout() {
    currentUser = null;
    localStorage.removeItem('gamingDockUser');
    updateUserUI();
    navigateTo('home');
    alert('You have been logged out');
}

function showAuthMessage(elementId, message, type) {
    const messageElement = document.getElementById(elementId);
    if (messageElement) {
        messageElement.textContent = message;
        messageElement.className = `auth-message ${type}`;
    }
}

// ===================================
// USER UI UPDATES
// ===================================

function updateUserUI() {
    const profileNav = document.getElementById('profileNav');
    const loginNav = document.getElementById('loginNav');

    if (currentUser) {
        profileNav.style.display = 'block';
        loginNav.style.display = 'none';
    } else {
        profileNav.style.display = 'none';
        loginNav.style.display = 'block';
    }
}

function displayProfile() {
    if (!currentUser) {
        navigateTo('login');
        return;
    }

    document.getElementById('profileUsername').textContent = currentUser.username;
    document.getElementById('profileEmail').textContent = currentUser.email;
    document.getElementById('profileUsernameDisplay').textContent = currentUser.username;
    document.getElementById('profileEmailDisplay').textContent = currentUser.email;
    document.getElementById('profileMemberSince').textContent = currentUser.memberSince;
}

// ===================================
// CONTACT FORM
// ===================================

function handleContactForm(event) {
    event.preventDefault();

    const name = document.getElementById('contactName').value;
    const email = document.getElementById('contactEmail').value;
    const subject = document.getElementById('contactSubject').value;
    const message = document.getElementById('contactMessage').value;

    // Frontend validation
    if (!name || !email || !subject || !message) {
        showFormMessage('Please fill in all fields');
        return;
    }

    if (!email.includes('@')) {
        showFormMessage('Please enter a valid email');
        return;
    }

    if (message.length < 10) {
        showFormMessage('Message must be at least 10 characters');
        return;
    }

    // Simulate form submission
    console.log('Form Data:', { name, email, subject, message });
    
    showFormMessage('Message sent successfully! We will contact you soon.', 'success');
    
    setTimeout(() => {
        document.getElementById('contactForm').reset();
        showFormMessage('');
    }, 2000);
}

function showFormMessage(message, type = 'error') {
    // Create or update message element
    let messageElement = document.querySelector('.form-message');
    if (!messageElement) {
        messageElement = document.createElement('div');
        messageElement.className = 'form-message';
        document.getElementById('contactForm').appendChild(messageElement);
    }

    messageElement.textContent = message;
    messageElement.className = `form-message ${type}`;
}

// ===================================
// COOKIE CONSENT
// ===================================

function setupCookieConsent() {
    const cookieConsent = document.getElementById('cookieConsent');
    const cookieAccept = document.getElementById('cookieAccept');
    const cookieDecline = document.getElementById('cookieDecline');

    // Check if user has already made a choice
    const cookieChoice = localStorage.getItem('gamingDockCookieChoice');
    if (!cookieChoice) {
        cookieConsent.classList.add('active');
    }

    cookieAccept.addEventListener('click', function() {
        localStorage.setItem('gamingDockCookieChoice', 'accepted');
        cookieConsent.classList.remove('active');
    });

    cookieDecline.addEventListener('click', function() {
        localStorage.setItem('gamingDockCookieChoice', 'declined');
        cookieConsent.classList.remove('active');
    });
}

// ===================================
// MODAL CLOSING
// ===================================

document.addEventListener('click', function(event) {
    const modal = document.getElementById('gameDetailsModal');
    if (event.target === modal) {
        closeGameDetails();
    }
});
