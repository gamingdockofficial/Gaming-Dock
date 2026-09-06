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
        title: "Neon Cyber Blaze",
        genre: "Action",
        category: "Action",
        description: "Experience intense cyberpunk action in a neon-soaked future. Engage in high-speed combat with advanced weaponry and intense boss battles.",
        platform: "PC, PlayStation 5",
        releaseYear: "2024",
        cover: "https://via.placeholder.com/400x300?text=Neon+Cyber+Blaze",
        screenshots: [
            "https://via.placeholder.com/400x300?text=Screenshot+1",
            "https://via.placeholder.com/400x300?text=Screenshot+2",
            "https://via.placeholder.com/400x300?text=Screenshot+3"
        ],
        systemRequirements: {
            minimum: "OS: Windows 10, CPU: Intel i5, RAM: 8GB, GPU: GTX 1060, Storage: 50GB",
            recommended: "OS: Windows 11, CPU: Intel i9, RAM: 16GB, GPU: RTX 3080, Storage: 50GB SSD"
        },
        downloadUrl: ""
    },
    {
        id: 2,
        title: "Lost Kingdoms Adventure",
        genre: "Adventure",
        category: "Adventure",
        description: "Embark on an epic adventure across mystical kingdoms. Solve puzzles, discover secrets, and uncover the ancient mysteries of a forgotten world.",
        platform: "PC, Xbox Series X",
        releaseYear: "2024",
        cover: "https://via.placeholder.com/400x300?text=Lost+Kingdoms",
        screenshots: [
            "https://via.placeholder.com/400x300?text=Screenshot+1",
            "https://via.placeholder.com/400x300?text=Screenshot+2",
            "https://via.placeholder.com/400x300?text=Screenshot+3"
        ],
        systemRequirements: {
            minimum: "OS: Windows 10, CPU: Ryzen 5, RAM: 8GB, GPU: RX 580, Storage: 60GB",
            recommended: "OS: Windows 11, CPU: Ryzen 9, RAM: 16GB, GPU: RX 6800 XT, Storage: 60GB SSD"
        },
        downloadUrl: ""
    },
    {
        id: 3,
        title: "Thunder Racing Championship",
        genre: "Racing",
        category: "Racing",
        description: "Race at extreme speeds through breathtaking tracks. Customize vehicles, compete in multiplayer races, and become the ultimate racing champion.",
        platform: "PC, PlayStation 5, Xbox Series X",
        releaseYear: "2024",
        cover: "https://via.placeholder.com/400x300?text=Thunder+Racing",
        screenshots: [
            "https://via.placeholder.com/400x300?text=Screenshot+1",
            "https://via.placeholder.com/400x300?text=Screenshot+2",
            "https://via.placeholder.com/400x300?text=Screenshot+3"
        ],
        systemRequirements: {
            minimum: "OS: Windows 10, CPU: Intel i5, RAM: 12GB, GPU: GTX 1070, Storage: 80GB",
            recommended: "OS: Windows 11, CPU: Intel i9 K, RAM: 32GB, GPU: RTX 4080, Storage: 80GB NVMe SSD"
        },
        downloadUrl: ""
    },
    {
        id: 4,
        title: "Flight Simulator Pro",
        genre: "Simulator",
        category: "Simulator",
        description: "Experience the most realistic flight simulation. Pilot commercial and military aircraft with authentic physics and stunning world graphics.",
        platform: "PC",
        releaseYear: "2023",
        cover: "https://via.placeholder.com/400x300?text=Flight+Simulator",
        screenshots: [
            "https://via.placeholder.com/400x300?text=Screenshot+1",
            "https://via.placeholder.com/400x300?text=Screenshot+2",
            "https://via.placeholder.com/400x300?text=Screenshot+3"
        ],
        systemRequirements: {
            minimum: "OS: Windows 10, CPU: Intel i5, RAM: 16GB, GPU: GTX 1080, Storage: 150GB",
            recommended: "OS: Windows 11, CPU: Intel i9, RAM: 32GB, GPU: RTX 4090, Storage: 150GB NVMe SSD"
        },
        downloadUrl: ""
    },
    {
        id: 5,
        title: "Chronicles of Fate",
        genre: "Story",
        category: "Story Mode",
        description: "A narrative-driven adventure where your choices shape the story. Uncover deep character development and emotional storytelling across multiple endings.",
        platform: "PC, PlayStation 5, Nintendo Switch",
        releaseYear: "2024",
        cover: "https://via.placeholder.com/400x300?text=Chronicles+of+Fate",
        screenshots: [
            "https://via.placeholder.com/400x300?text=Screenshot+1",
            "https://via.placeholder.com/400x300?text=Screenshot+2",
            "https://via.placeholder.com/400x300?text=Screenshot+3"
        ],
        systemRequirements: {
            minimum: "OS: Windows 10, CPU: Intel i5, RAM: 8GB, GPU: GTX 960, Storage: 40GB",
            recommended: "OS: Windows 11, CPU: Intel i7, RAM: 16GB, GPU: RTX 2070, Storage: 40GB SSD"
        },
        downloadUrl: ""
    },
    {
        id: 6,
        title: "Infinite Horizons",
        genre: "Open World",
        category: "Open World",
        description: "Explore a vast open world filled with secrets, missions, and dynamic environments. Freedom to play your way in this expansive sandbox adventure.",
        platform: "PC, PlayStation 5, Xbox Series X",
        releaseYear: "2024",
        cover: "https://via.placeholder.com/400x300?text=Infinite+Horizons",
        screenshots: [
            "https://via.placeholder.com/400x300?text=Screenshot+1",
            "https://via.placeholder.com/400x300?text=Screenshot+2",
            "https://via.placeholder.com/400x300?text=Screenshot+3"
        ],
        systemRequirements: {
            minimum: "OS: Windows 10, CPU: Ryzen 7, RAM: 16GB, GPU: RX 5700 XT, Storage: 100GB",
            recommended: "OS: Windows 11, CPU: Ryzen 9 5950X, RAM: 32GB, GPU: RTX 3090 Ti, Storage: 100GB NVMe SSD"
        },
        downloadUrl: ""
    },
    {
        id: 7,
        title: "Squad Legends Battle",
        genre: "Multiplayer",
        category: "Multiplayer",
        description: "Team-based multiplayer action with intense competitive gameplay. Form squads, strategize, and dominate the battlefield against players worldwide.",
        platform: "PC, PlayStation 5, Xbox Series X",
        releaseYear: "2024",
        cover: "https://via.placeholder.com/400x300?text=Squad+Legends",
        screenshots: [
            "https://via.placeholder.com/400x300?text=Screenshot+1",
            "https://via.placeholder.com/400x300?text=Screenshot+2",
            "https://via.placeholder.com/400x300?text=Screenshot+3"
        ],
        systemRequirements: {
            minimum: "OS: Windows 10, CPU: Intel i7, RAM: 16GB, GPU: RTX 2080, Storage: 120GB",
            recommended: "OS: Windows 11, CPU: Intel i9 K, RAM: 32GB, GPU: RTX 4070 Ti, Storage: 120GB SSD"
        },
        downloadUrl: ""
    },
    {
        id: 8,
        title: "Mystic Dungeon Crawler",
        genre: "Adventure",
        category: "Adventure",
        description: "Delve into mysterious dungeons filled with treasures and dangers. Combat-focused adventure with roguelike elements and stunning visual design.",
        platform: "PC, Nintendo Switch",
        releaseYear: "2023",
        cover: "https://via.placeholder.com/400x300?text=Mystic+Dungeon",
        screenshots: [
            "https://via.placeholder.com/400x300?text=Screenshot+1",
            "https://via.placeholder.com/400x300?text=Screenshot+2",
            "https://via.placeholder.com/400x300?text=Screenshot+3"
        ],
        systemRequirements: {
            minimum: "OS: Windows 10, CPU: Intel i5, RAM: 8GB, GPU: GTX 1050, Storage: 35GB",
            recommended: "OS: Windows 11, CPU: Ryzen 7, RAM: 16GB, GPU: RTX 2070, Storage: 35GB SSD"
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
        title: "Neon Cyber Blaze - Major Update 2.0",
        date: "December 15, 2024",
        image: "https://via.placeholder.com/400x250?text=Update+1",
        description: "Massive content update featuring new weapons, abilities, and a challenging new campaign chapter. Plus gameplay improvements and bug fixes.",
        content: "Experience the game like never before with our biggest update yet!"
    },
    {
        id: 2,
        title: "Thunder Racing - New Track Pack Released",
        date: "December 10, 2024",
        image: "https://via.placeholder.com/400x250?text=Update+2",
        description: "5 brand new racing tracks with unique environments and challenges. New car skins and performance balancing updates included.",
        content: "Race in style with our latest track collection!"
    },
    {
        id: 3,
        title: "Squad Legends - Seasonal Pass Now Available",
        date: "December 8, 2024",
        image: "https://via.placeholder.com/400x250?text=Update+3",
        description: "Season 5 brings new operators, cosmetics, and exclusive rewards. Battle pass progression has been enhanced for better rewards.",
        content: "Join the action-packed season 5 today!"
    },
    {
        id: 4,
        title: "Lost Kingdoms - Story Expansion Announced",
        date: "December 5, 2024",
        image: "https://via.placeholder.com/400x250?text=Update+4",
        description: "A new chapter with 15+ hours of gameplay, new puzzles, and expanded lore. Coming next month with special launch pricing.",
        content: "New mysteries await in the lost kingdoms!"
    },
    {
        id: 5,
        title: "Infinite Horizons - Holiday Event Live",
        date: "December 1, 2024",
        image: "https://via.placeholder.com/400x250?text=Update+5",
        description: "Limited-time holiday event with special cosmetics, limited-edition weapons, and exclusive holiday missions for all players.",
        content: "Celebrate the holidays in the world of Infinite Horizons!"
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
