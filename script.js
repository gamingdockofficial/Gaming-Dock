// ===== GAMES DATA =====
// Easy to edit - Add your games here
const gamesData = [
    {
        id: 1,
        title: "Cyber Revolution 2077",
        genre: "Action",
        description: "An open-world action-adventure set in a dystopian future with deep RPG elements.",
        platform: "PC, PS5, Xbox",
        year: 2023,
        image: "",
        screenshots: ["", "", ""],
        systemRequirements: {
            minimum: "OS: Windows 10, Processor: Intel Core i5-3570K, Memory: 8 GB RAM, Graphics: NVIDIA GTX 780",
            recommended: "OS: Windows 10, Processor: Intel Core i7-4790, Memory: 16 GB RAM, Graphics: NVIDIA RTX 2060"
        },
        fullDescription: "Immerse yourself in a sprawling metropolis where every choice shapes your destiny. Navigate through neon-lit streets, engage in intense combat, and uncover the dark secrets of a world controlled by mega-corporations."
    },
    {
        id: 2,
        title: "Fantasy Quest Legends",
        genre: "Adventure",
        description: "Embark on an epic fantasy adventure through mystical lands filled with magic and monsters.",
        platform: "PC, PS5, Nintendo Switch",
        year: 2023,
        image: "",
        screenshots: ["", "", ""],
        systemRequirements: {
            minimum: "OS: Windows 10, Processor: Intel Core i5-4460, Memory: 8 GB RAM, Graphics: NVIDIA GTX 960",
            recommended: "OS: Windows 10, Processor: Intel Core i7-6700K, Memory: 16 GB RAM, Graphics: NVIDIA RTX 3060"
        },
        fullDescription: "Explore vast kingdoms, battle mythical creatures, and forge your legend in this epic fantasy RPG. Master powerful spells, collect legendary weapons, and make choices that will determine the fate of the realm."
    },
    {
        id: 3,
        title: "Speed Rivals Ultimate",
        genre: "Racing",
        description: "High-octane racing game featuring stunning visuals and intense competition.",
        platform: "PC, PS5, Xbox",
        year: 2024,
        image: "",
        screenshots: ["", "", ""],
        systemRequirements: {
            minimum: "OS: Windows 10, Processor: Intel Core i5-7600K, Memory: 8 GB RAM, Graphics: NVIDIA GTX 1060",
            recommended: "OS: Windows 10, Processor: Intel Core i7-8700K, Memory: 16 GB RAM, Graphics: NVIDIA RTX 3070"
        },
        fullDescription: "Experience the thrill of high-speed racing across diverse locations worldwide. Customize your dream car, compete in various racing modes, and dominate the leaderboards in this ultimate racing experience."
    },
    {
        id: 4,
        title: "Farm Life Simulator",
        genre: "Simulator",
        description: "Build and manage your dream farm in this relaxing simulation experience.",
        platform: "PC, Nintendo Switch",
        year: 2023,
        image: "",
        screenshots: ["", "", ""],
        systemRequirements: {
            minimum: "OS: Windows 10, Processor: Intel Core i3-4130, Memory: 4 GB RAM, Graphics: NVIDIA GTX 750",
            recommended: "OS: Windows 10, Processor: Intel Core i5-6600K, Memory: 8 GB RAM, Graphics: NVIDIA GTX 1050"
        },
        fullDescription: "Create and cultivate your perfect farm. Plant crops, raise animals, and build relationships with townspeople in this peaceful farming simulator. Experience the changing seasons and grow your agricultural empire."
    },
    {
        id: 5,
        title: "The Last Guardian",
        genre: "Story Mode",
        description: "A narrative-driven adventure with emotional storytelling and stunning visuals.",
        platform: "PS5, PC",
        year: 2023,
        image: "",
        screenshots: ["", "", ""],
        systemRequirements: {
            minimum: "OS: Windows 10, Processor: Intel Core i5-6600K, Memory: 8 GB RAM, Graphics: NVIDIA GTX 1060",
            recommended: "OS: Windows 10, Processor: Intel Core i7-8700K, Memory: 16 GB RAM, Graphics: NVIDIA RTX 2070"
        },
        fullDescription: "Experience a deeply moving story of friendship and survival. Navigate through beautiful yet dangerous environments while forming an unbreakable bond with your mysterious companion in this unforgettable adventure."
    },
    {
        id: 6,
        title: "Wasteland Odyssey",
        genre: "Open World",
        description: "Survive and thrive in a post-apocalyptic open world filled with danger and opportunity.",
        platform: "PC, PS5, Xbox",
        year: 2024,
        image: "",
        screenshots: ["", "", ""],
        systemRequirements: {
            minimum: "OS: Windows 10, Processor: Intel Core i5-8400, Memory: 12 GB RAM, Graphics: NVIDIA GTX 1660",
            recommended: "OS: Windows 10, Processor: Intel Core i7-9700K, Memory: 16 GB RAM, Graphics: NVIDIA RTX 3080"
        },
        fullDescription: "Explore a vast wasteland where every decision matters. Scavenge for resources, build settlements, and forge alliances in a world reclaimed by nature. Your survival depends on your wits and adaptability."
    },
    {
        id: 7,
        title: "Battle Arena Champions",
        genre: "Multiplayer",
        description: "Team-based multiplayer combat with various heroes and strategic gameplay.",
        platform: "PC, PS5, Xbox",
        year: 2023,
        image: "",
        screenshots: ["", "", ""],
        systemRequirements: {
            minimum: "OS: Windows 10, Processor: Intel Core i5-6600K, Memory: 8 GB RAM, Graphics: NVIDIA GTX 1050 Ti",
            recommended: "OS: Windows 10, Processor: Intel Core i7-7700K, Memory: 16 GB RAM, Graphics: NVIDIA RTX 2060"
        },
        fullDescription: "Compete in intense 5v5 battles with unique heroes, each with their own abilities and playstyles. Master team strategies, climb the ranked ladder, and become a legend in the arena."
    },
    {
        id: 8,
        title: "Stealth Operative",
        genre: "Action",
        description: "Master the art of stealth in this tactical espionage thriller.",
        platform: "PC, PS5, Xbox",
        year: 2024,
        image: "",
        screenshots: ["", "", ""],
        systemRequirements: {
            minimum: "OS: Windows 10, Processor: Intel Core i5-7600K, Memory: 8 GB RAM, Graphics: NVIDIA GTX 1060",
            recommended: "OS: Windows 10, Processor: Intel Core i7-8700K, Memory: 16 GB RAM, Graphics: NVIDIA RTX 3060"
        },
        fullDescription: "Infiltrate enemy bases, gather intelligence, and complete missions without leaving a trace. Use cutting-edge gadgets and strategic thinking to overcome complex security systems in this stealth-action masterpiece."
    },
    {
        id: 9,
        title: "Cosmic Explorers",
        genre: "Adventure",
        description: "Explore the infinite cosmos and discover alien worlds in this space exploration game.",
        platform: "PC, PS5",
        year: 2024,
        image: "",
        screenshots: ["", "", ""],
        systemRequirements: {
            minimum: "OS: Windows 10, Processor: Intel Core i5-8400, Memory: 12 GB RAM, Graphics: NVIDIA GTX 1660",
            recommended: "OS: Windows 10, Processor: Intel Core i7-9700K, Memory: 16 GB RAM, Graphics: NVIDIA RTX 3070"
        },
        fullDescription: "Traverse the galaxy, discover procedurally generated planets, and encounter diverse alien civilizations. Trade, fight, or explore - the choice is yours in this expansive space adventure."
    },
    {
        id: 10,
        title: "Circuit Champions",
        genre: "Racing",
        description: "Professional circuit racing with realistic physics and authentic motorsport experience.",
        platform: "PC, Xbox",
        year: 2023,
        image: "",
        screenshots: ["", "", ""],
        systemRequirements: {
            minimum: "OS: Windows 10, Processor: Intel Core i5-7600K, Memory: 8 GB RAM, Graphics: NVIDIA GTX 1060",
            recommended: "OS: Windows 10, Processor: Intel Core i7-8700K, Memory: 16 GB RAM, Graphics: NVIDIA RTX 3080"
        },
        fullDescription: "Experience authentic motorsport with realistic vehicle physics, dynamic weather, and legendary racing circuits. Compete in championships, fine-tune your setup, and master the art of professional racing."
    },
    {
        id: 11,
        title: "City Builder Pro",
        genre: "Simulator",
        description: "Design and manage a thriving metropolis in this comprehensive city simulation.",
        platform: "PC",
        year: 2023,
        image: "",
        screenshots: ["", "", ""],
        systemRequirements: {
            minimum: "OS: Windows 10, Processor: Intel Core i5-4460, Memory: 8 GB RAM, Graphics: NVIDIA GTX 960",
            recommended: "OS: Windows 10, Processor: Intel Core i7-6700K, Memory: 16 GB RAM, Graphics: NVIDIA RTX 2060"
        },
        fullDescription: "Build your dream city from the ground up. Manage resources, plan infrastructure, and keep your citizens happy while balancing budgets and responding to various challenges in this deep city-building experience."
    },
    {
        id: 12,
        title: "Echoes of Eternity",
        genre: "Story Mode",
        description: "A time-traveling narrative adventure that explores themes of choice and consequence.",
        platform: "PC, PS5, Xbox",
        year: 2024,
        image: "",
        screenshots: ["", "", ""],
        systemRequirements: {
            minimum: "OS: Windows 10, Processor: Intel Core i5-6600K, Memory: 8 GB RAM, Graphics: NVIDIA GTX 1060",
            recommended: "OS: Windows 10, Processor: Intel Core i7-8700K, Memory: 16 GB RAM, Graphics: NVIDIA RTX 2070"
        },
        fullDescription: "Navigate through different timelines, making decisions that ripple across history. Every choice creates branching narratives in this emotionally charged story about destiny, sacrifice, and redemption."
    }
];

// ===== UPDATES DATA =====
// Easy to edit - Add your updates/news here
const updatesData = [
    {
        id: 1,
        title: "Major Update: New Game Modes Released",
        date: "March 15, 2024",
        description: "Experience fresh gameplay with three new game modes added across our most popular titles. Including Team Deathmatch, Survival Challenge, and Time Trial modes.",
        image: "",
        content: "Full update details here..."
    },
    {
        id: 2,
        title: "Spring Sale: Up to 70% Off Premium Games",
        date: "March 10, 2024",
        description: "Don't miss our biggest sale of the season! Get incredible discounts on AAA titles, indie favorites, and everything in between.",
        image: "",
        content: "Sale details here..."
    },
    {
        id: 3,
        title: "Community Tournament Announced",
        date: "March 5, 2024",
        description: "Join thousands of players in our global gaming tournament. Compete for prizes, glory, and exclusive in-game rewards starting next month.",
        image: "",
        content: "Tournament information here..."
    },
    {
        id: 4,
        title: "Performance Optimization Patch Live",
        date: "March 1, 2024",
        description: "We've rolled out significant performance improvements across all platforms. Experience smoother gameplay with increased frame rates and reduced load times.",
        image: "",
        content: "Patch notes here..."
    },
    {
        id: 5,
        title: "New DLC: Expanded Universe Content",
        date: "February 25, 2024",
        description: "Dive into brand new storylines, characters, and locations with our latest DLC expansion. Available now for our flagship open-world titles.",
        image: "",
        content: "DLC details here..."
    },
    {
        id: 6,
        title: "Cross-Platform Play Now Available",
        date: "February 20, 2024",
        description: "Play with friends regardless of their platform! Cross-platform multiplayer is now live for all supported games.",
        image: "",
        content: "Cross-play information here..."
    }
];

// ===== GLOBAL VARIABLES =====
let currentCategory = 'all';
let searchQuery = '';

// ===== DOM ELEMENTS =====
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');
const searchInput = document.getElementById('searchInput');
const categoryBtns = document.querySelectorAll('.category-btn');
const gamesGrid = document.getElementById('gamesGrid');
const updatesGrid = document.getElementById('updatesGrid');
const noResults = document.getElementById('noResults');
const gameModal = document.getElementById('gameModal');
const modalClose = document.getElementById('modalClose');
const modalBody = document.getElementById('modalBody');
const contactForm = document.getElementById('contactForm');

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initSearch();
    initCategoryFilter();
    renderGames();
    renderUpdates();
    initModal();
    initContactForm();
    initScrollAnimations();
});

// ===== NAVIGATION =====
function initNavigation() {
    // Hamburger menu toggle
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            
            // Update active link
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offset = 70; // Height of fixed navbar
                const targetPosition = target.offsetTop - offset;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===== SEARCH FUNCTIONALITY =====
function initSearch() {
    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.toLowerCase();
        renderGames();
    });
}

// ===== CATEGORY FILTER =====
function initCategoryFilter() {
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active button
            categoryBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Update category and render
            currentCategory = btn.dataset.category;
            renderGames();
        });
    });
}

// ===== RENDER GAMES =====
function renderGames() {
    // Filter games
    let filteredGames = gamesData.filter(game => {
        const matchesCategory = currentCategory === 'all' || game.genre === currentCategory;
        const matchesSearch = game.title.toLowerCase().includes(searchQuery) ||
                            game.description.toLowerCase().includes(searchQuery) ||
                            game.genre.toLowerCase().includes(searchQuery);
        return matchesCategory && matchesSearch;
    });

    // Clear grid
    gamesGrid.innerHTML = '';

    // Show/hide no results message
    if (filteredGames.length === 0) {
        noResults.classList.add('show');
        return;
    } else {
        noResults.classList.remove('show');
    }

    // Render game cards
    filteredGames.forEach(game => {
        const gameCard = createGameCard(game);
        gamesGrid.appendChild(gameCard);
    });
}

// ===== CREATE GAME CARD =====
function createGameCard(game) {
    const card = document.createElement('div');
    card.className = 'game-card';
    card.innerHTML = `
        <div class="game-image">
            ${game.image ? `<img src="${game.image}" alt="${game.title}" loading="lazy">` : ''}
        </div>
        <div class="game-info">
            <h3 class="game-title">${game.title}</h3>
            <span class="game-genre">${game.genre}</span>
            <p class="game-description">${game.description}</p>
            <div class="game-meta">
                <span class="game-platform">🎮 ${game.platform}</span>
                <span class="game-year">📅 ${game.year}</span>
            </div>
            <button class="view-details-btn" onclick="showGameDetails(${game.id})">View Details</button>
        </div>
    `;
    return card;
}

// ===== SHOW GAME DETAILS =====
function showGameDetails(gameId) {
    const game = gamesData.find(g => g.id === gameId);
    if (!game) return;

    modalBody.innerHTML = `
        <div class="modal-game-cover">${game.image ? `<img src="${game.image}" alt="${game.title}">` : ''}</div>
        <h2 class="modal-game-title">${game.title}</h2>
        
        <div class="modal-game-info">
            <div class="info-item">
                <div class="info-label">Genre</div>
                <div class="info-value">${game.genre}</div>
            </div>
            <div class="info-item">
                <div class="info-label">Platform</div>
                <div class="info-value">${game.platform}</div>
            </div>
            <div class="info-item">
                <div class="info-label">Release Year</div>
                <div class="info-value">${game.year}</div>
            </div>
        </div>

        <div class="modal-section">
            <h3>About This Game</h3>
            <p>${game.fullDescription}</p>
        </div>

        <div class="modal-section">
            <h3>System Requirements</h3>
            <p><strong>Minimum:</strong><br>${game.systemRequirements.minimum}</p>
            <p><strong>Recommended:</strong><br>${game.systemRequirements.recommended}</p>
        </div>

        <div class="modal-section">
            <h3>Screenshots</h3>
            <div class="screenshots-grid">
                <div class="screenshot"></div>
                <div class="screenshot"></div>
                <div class="screenshot"></div>
            </div>
        </div>

        <button class="btn btn-primary back-btn" onclick="closeModal()">Back to Games</button>
    `;

    gameModal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

// ===== MODAL CONTROLS =====
function initModal() {
    modalClose.addEventListener('click', closeModal);
    
    gameModal.addEventListener('click', (e) => {
        if (e.target === gameModal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && gameModal.classList.contains('show')) {
            closeModal();
        }
    });
}

function closeModal() {
    gameModal.classList.remove('show');
    document.body.style.overflow = 'auto';
}

// ===== RENDER UPDATES =====
function renderUpdates() {
    updatesGrid.innerHTML = '';
    
    updatesData.forEach(update => {
        const updateCard = createUpdateCard(update);
        updatesGrid.appendChild(updateCard);
    });
}

// ===== CREATE UPDATE CARD =====
function createUpdateCard(update) {
    const card = document.createElement('div');
    card.className = 'update-card';
    card.innerHTML = `
        <div class="update-image">
            ${update.image ? `<img src="${update.image}" alt="${update.title}" loading="lazy">` : ''}
        </div>
        <div class="update-info">
            <div class="update-date">${update.date}</div>
            <h3 class="update-title">${update.title}</h3>
            <p class="update-description">${update.description}</p>
            <a href="#" class="read-more-btn">Read More →</a>
        </div>
    `;
    return card;
}

// ===== CONTACT FORM =====
function initContactForm() {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Here you would typically send this data to a backend
        // For now, we'll just show an alert
        alert(`Thank you ${name}! Your message has been received. We'll get back to you at ${email} soon.`);
        
        contactForm.reset();
    });
}

// ===== SCROLL ANIMATIONS =====
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            }
        });
    }, observerOptions);

    // Observe sections
    document.querySelectorAll('.section-header, .game-card, .update-card, .about-card').forEach(el => {
        observer.observe(el);
    });
}

// ===== UTILITY FUNCTIONS =====
// Make showGameDetails available globally
window.showGameDetails = showGameDetails;
window.closeModal = closeModal;

// Lazy loading for images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}
