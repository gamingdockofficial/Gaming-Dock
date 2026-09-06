/* =========================================================
   GAMING DOCK - FRESH JAVASCRIPT
   Complete Website Functionality
   ========================================================= */


/* =========================================================
   GAMES DATA
   ========================================================= */

const games = [

    {
        id: 1,
        title: "Grand Theft Auto V",
        genre: "Action",
        category: "Open World",
        description: "Explore Los Santos in a massive open-world action adventure featuring missions, vehicles and a cinematic story.",
        platform: "PC",
        releaseYear: "2015",

        cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/271590/header.jpg",

        screenshots: [
            "https://cdn.cloudflare.steamstatic.com/steam/apps/271590/header.jpg",
            "https://cdn.cloudflare.steamstatic.com/steam/apps/271590/capsule_616x353.jpg"
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
        description: "Experience intense street racing and police pursuits in a high-speed open-world racing experience.",
        platform: "PC",
        releaseYear: "2013",

        cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/126260/header.jpg",

        screenshots: [
            "https://cdn.cloudflare.steamstatic.com/steam/apps/126260/header.jpg",
            "https://cdn.cloudflare.steamstatic.com/steam/apps/126260/capsule_616x353.jpg"
        ],

        systemRequirements: {
            minimum: "OS: Windows 7, CPU: Intel Core 2 Duo, RAM: 4GB, GPU: GTX 260, Storage: 30GB",
            recommended: "OS: Windows 10/11, CPU: Intel Core i5, RAM: 8GB, GPU: GTX 660, Storage: 30GB"
        },

        downloadUrl: ""
    },


    {
        id: 3,
        title: "Assassin's Creed III",
        genre: "Action",
        category: "Adventure",
        description: "Enter a historical action adventure filled with exploration, combat, stealth and an epic story.",
        platform: "PC",
        releaseYear: "2012",

        cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/208480/header.jpg",

        screenshots: [
            "https://cdn.cloudflare.steamstatic.com/steam/apps/208480/header.jpg",
            "https://cdn.cloudflare.steamstatic.com/steam/apps/208480/capsule_616x353.jpg"
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
        description: "Survive a dangerous tropical island in an open-world first-person adventure packed with action and exploration.",
        platform: "PC",
        releaseYear: "2012",

        cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/220240/header.jpg",

        screenshots: [
            "https://cdn.cloudflare.steamstatic.com/steam/apps/220240/header.jpg",
            "https://cdn.cloudflare.steamstatic.com/steam/apps/220240/capsule_616x353.jpg"
        ],

        systemRequirements: {
            minimum: "OS: Windows 7, CPU: Intel Core 2 Duo, RAM: 4GB, GPU: GTX 460, Storage: 15GB",
            recommended: "OS: Windows 10/11, CPU: Intel Core i5, RAM: 8GB, GPU: GTX 660, Storage: 15GB"
        },

        downloadUrl: ""
    },


    {
        id: 5,
        title: "Tomb Raider",
        genre: "Action",
        category: "Adventure",
        description: "Join Lara Croft on a cinematic survival adventure featuring exploration, puzzles and intense action.",
        platform: "PC",
        releaseYear: "2013",

        cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/203160/header.jpg",

        screenshots: [
            "https://cdn.cloudflare.steamstatic.com/steam/apps/203160/header.jpg",
            "https://cdn.cloudflare.steamstatic.com/steam/apps/203160/capsule_616x353.jpg"
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
        description: "Explore Hong Kong in an open-world action adventure featuring driving, martial arts and an engaging story.",
        platform: "PC",
        releaseYear: "2012",

        cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/202170/header.jpg",

        screenshots: [
            "https://cdn.cloudflare.steamstatic.com/steam/apps/202170/header.jpg",
            "https://cdn.cloudflare.steamstatic.com/steam/apps/202170/capsule_616x353.jpg"
        ],

        systemRequirements: {
            minimum: "OS: Windows Vista/7, CPU: Core 2 Duo, RAM: 2GB, GPU: GeForce 8800 GT, Storage: 15GB",
            recommended: "OS: Windows 10/11, CPU: Intel Core i5, RAM: 4GB, GPU: GTX 560, Storage: 15GB"
        },

        downloadUrl: ""
    },


    {
        id: 7,
        title: "Mafia II",
        genre: "Action",
        category: "Story Mode",
        description: "Experience a cinematic crime story set in the fictional city of Empire Bay.",
        platform: "PC",
        releaseYear: "2010",

        cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/50130/header.jpg",

        screenshots: [
            "https://cdn.cloudflare.steamstatic.com/steam/apps/50130/header.jpg",
            "https://cdn.cloudflare.steamstatic.com/steam/apps/50130/capsule_616x353.jpg"
        ],

        systemRequirements: {
            minimum: "OS: Windows XP/Vista/7, CPU: 2.4GHz Quad Core, RAM: 2GB, GPU: GeForce 8600, Storage: 8GB",
            recommended: "OS: Windows 10/11, CPU: Intel Core i5, RAM: 4GB, GPU: GTX 560, Storage: 8GB"
        },

        downloadUrl: ""
    },


    {
        id: 8,
        title: "Just Cause 2",
        genre: "Action",
        category: "Open World",
        description: "Explore a huge tropical island and create chaos using vehicles, weapons and an iconic grappling hook.",
        platform: "PC",
        releaseYear: "2010",

        cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/8190/header.jpg",

        screenshots: [
            "https://cdn.cloudflare.steamstatic.com/steam/apps/8190/header.jpg",
            "https://cdn.cloudflare.steamstatic.com/steam/apps/8190/capsule_616x353.jpg"
        ],

        systemRequirements: {
            minimum: "OS: Windows Vista/7, CPU: Dual Core, RAM: 2GB, GPU: GeForce 8800, Storage: 10GB",
            recommended: "OS: Windows 10/11, CPU: Intel Core i5, RAM: 4GB, GPU: GTX 560, Storage: 10GB"
        },

        downloadUrl: ""
    },


    {
        id: 9,
        title: "Euro Truck Simulator 2",
        genre: "Simulator",
        category: "Simulator",
        description: "Travel across Europe as a professional truck driver while building your own transportation business.",
        platform: "PC",
        releaseYear: "2012",

        cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/227300/header.jpg",

        screenshots: [
            "https://cdn.cloudflare.steamstatic.com/steam/apps/227300/header.jpg",
            "https://cdn.cloudflare.steamstatic.com/steam/apps/227300/capsule_616x353.jpg"
        ],

        systemRequirements: {
            minimum: "OS: Windows 7, CPU: Dual Core 2.4GHz, RAM: 4GB, GPU: GeForce GTS 450, Storage: 25GB",
            recommended: "OS: Windows 10/11, CPU: Intel Core i5, RAM: 8GB, GPU: GTX 760, Storage: 25GB"
        },

        downloadUrl: ""
    },


    {
        id: 10,
        title: "Batman: Arkham City",
        genre: "Action",
        category: "Story Mode",
        description: "Become Batman and explore Arkham City in a cinematic superhero action adventure.",
        platform: "PC",
        releaseYear: "2011",

        cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/200260/header.jpg",

        screenshots: [
            "https://cdn.cloudflare.steamstatic.com/steam/apps/200260/header.jpg",
            "https://cdn.cloudflare.steamstatic.com/steam/apps/200260/capsule_616x353.jpg"
        ],

        systemRequirements: {
            minimum: "OS: Windows 7, CPU: Intel Core 2 Duo, RAM: 2GB, GPU: NVIDIA 8800 GT, Storage: 17GB",
            recommended: "OS: Windows 10/11, CPU: Intel Core i5, RAM: 4GB, GPU: GTX 560, Storage: 17GB"
        },

        downloadUrl: ""
    }

];


/* =========================================================
   UPDATES DATA
   ========================================================= */

const updates = [

    {
        id: 1,
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/271590/header.jpg",
        date: "September 6, 2026",
        title: "Gaming Dock Website Update",
        description: "Gaming Dock has been updated with an improved game library and website functionality.",
        content: "Gaming Dock continues to improve. New games, updates and features will be added regularly."
    },

    {
        id: 2,
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/227300/header.jpg",
        date: "September 5, 2026",
        title: "New Games Coming Soon",
        description: "More games will be added to the Gaming Dock library in future updates.",
        content: "Keep checking Gaming Dock for new game listings, information and updates."
    },

    {
        id: 3,
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/220240/header.jpg",
        date: "September 4, 2026",
        title: "Gaming News & Updates",
        description: "Gaming Dock will bring gaming news and important game updates in one place.",
        content: "The updates section is designed to make it easy to keep track of new releases and gaming information."
    }

];


/* =========================================================
   GLOBAL VARIABLES
   ========================================================= */

let currentPage = "home";
let filteredGames = [...games];
let currentGame = null;
let currentUser = null;


/* =========================================================
   DOM READY
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    console.log("Gaming Dock JavaScript loaded.");

    loadUserData();

    renderGames();

    renderUpdates();

    setupEventListeners();

    setupCookieConsent();

    updateUserUI();

    navigateTo("home");

});


/* =========================================================
   USER DATA
   ========================================================= */

function loadUserData() {

    try {

        const savedUser =
            localStorage.getItem("gamingDockUser");

        if (savedUser) {

            currentUser = JSON.parse(savedUser);

        }

    } catch (error) {

        console.error("User data error:", error);

        currentUser = null;

    }

}


function saveUserData() {

    try {

        if (currentUser) {

            localStorage.setItem(
                "gamingDockUser",
                JSON.stringify(currentUser)
            );

        } else {

            localStorage.removeItem("gamingDockUser");

        }

    } catch (error) {

        console.error("Could not save user data:", error);

    }

}


/* =========================================================
   EVENT LISTENERS
   ========================================================= */

function setupEventListeners() {


    /* NAVIGATION */

    document
        .querySelectorAll(".nav-link")
        .forEach(function (link) {

            link.addEventListener("click", function (event) {

                event.preventDefault();

                const page =
                    this.getAttribute("data-page");

                if (page) {

                    navigateTo(page);

                }

                closeHamburger();

            });

        });


    /* HAMBURGER */

    const hamburger =
        document.getElementById("hamburger");

    const navMenu =
        document.getElementById("navMenu");


    if (hamburger && navMenu) {

        hamburger.addEventListener("click", function () {

            hamburger.classList.toggle("active");

            navMenu.classList.toggle("active");

        });

    }


    /* SEARCH */

    const searchInput =
        document.getElementById("searchInput");


    if (searchInput) {

        searchInput.addEventListener("input", function () {

            handleSearch(this.value);

        });

    }


    /* CATEGORY BUTTONS */

    document
        .querySelectorAll("[data-category]")
        .forEach(function (button) {

            button.addEventListener("click", function () {

                const category =
                    this.getAttribute("data-category");

                if (category) {

                    filterGames(category);

                }

            });

        });


    /* LOGIN */

    const loginForm =
        document.getElementById("loginForm");


    if (loginForm) {

        loginForm.addEventListener("submit", function (event) {

            event.preventDefault();

            handleLogin();

        });

    }


    /* REGISTER */

    const registerForm =
        document.getElementById("registerForm");


    if (registerForm) {

        registerForm.addEventListener("submit", function (event) {

            event.preventDefault();

            handleRegister();

        });

    }


    /*
       CONTACT FORM IS INTENTIONALLY NOT HANDLED HERE.

       Formspree handles the form directly through:

       https://formspree.io/f/xbgjaype

       Therefore we do NOT use preventDefault().
    */


    /* COOKIE ACCEPT */

    const cookieAccept =
        document.getElementById("cookieAccept");


    if (cookieAccept) {

        cookieAccept.addEventListener("click", function () {

            localStorage.setItem(
                "gamingDockCookies",
                "accepted"
            );

            hideCookieConsent();

        });

    }


    /* COOKIE DECLINE */

    const cookieDecline =
        document.getElementById("cookieDecline");


    if (cookieDecline) {

        cookieDecline.addEventListener("click", function () {

            localStorage.setItem(
                "gamingDockCookies",
                "declined"
            );

            hideCookieConsent();

        });

    }


    /* MODAL */

    const modal =
        document.getElementById("gameDetailsModal");


    if (modal) {

        modal.addEventListener("click", function (event) {

            if (event.target === modal) {

                closeGameDetails();

            }

        });

    }

}


/* =========================================================
   NAVIGATION
   ========================================================= */

function navigateTo(page) {

    const allPages =
        document.querySelectorAll(".page");


    allPages.forEach(function (pageElement) {

        pageElement.classList.remove("active");

    });


    const selectedPage =
        document.getElementById(page);


    if (!selectedPage) {

        console.warn("Page not found:", page);

        return;

    }


    selectedPage.classList.add("active");

    currentPage = page;


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });


    if (page === "profile") {

        renderProfile();

    }


    updateUserUI();

    closeHamburger();

}


/* =========================================================
   HAMBURGER
   ========================================================= */

function closeHamburger() {

    const hamburger =
        document.getElementById("hamburger");

    const navMenu =
        document.getElementById("navMenu");


    if (hamburger) {

        hamburger.classList.remove("active");

    }


    if (navMenu) {

        navMenu.classList.remove("active");

    }

}


/* =========================================================
   RENDER GAMES
   ========================================================= */

function renderGames() {

    const container =
        document.getElementById("gamesContainer");


    if (!container) {

        console.warn("gamesContainer not found.");

        return;

    }


    const noGamesMessage =
        document.getElementById("noGamesMessage");


    /*
       Clear only once.

       No interval.
       No repeated rendering loop.
       No animation restart timer.
    */

    container.replaceChildren();


    if (filteredGames.length === 0) {

        if (noGamesMessage) {

            noGamesMessage.style.display = "block";

        }

        return;

    }


    if (noGamesMessage) {

        noGamesMessage.style.display = "none";

    }


    filteredGames.forEach(function (game) {

        const card =
            document.createElement("article");


        card.className = "game-card";


        card.innerHTML = `

            <div class="game-card-image">

                <img
                    src="${game.cover}"
                    alt="${escapeHTML(game.title)}"
                    loading="lazy"
                    decoding="async"
                    onerror="handleImageError(this)"
                >

            </div>


            <div class="game-card-content">

                <span class="game-category">
                    ${escapeHTML(game.category)}
                </span>


                <h3>
                    ${escapeHTML(game.title)}
                </h3>


                <p>
                    ${escapeHTML(game.description)}
                </p>


                <div class="game-meta">

                    <span>
                        ${escapeHTML(game.genre)}
                    </span>

                    <span>
                        ${escapeHTML(game.platform)}
                    </span>

                    <span>
                        ${escapeHTML(game.releaseYear)}
                    </span>

                </div>


                <button
                    type="button"
                    class="btn btn-primary"
                    onclick="viewGameDetails(${game.id})"
                >
                    VIEW DETAILS
                </button>

            </div>

        `;


        container.appendChild(card);

    });

}


/* =========================================================
   SAFE IMAGE ERROR HANDLER
   ========================================================= */

function handleImageError(image) {

    if (!image) {

        return;

    }


    /*
       Prevent infinite onerror loops.
    */

    image.onerror = null;

    image.removeAttribute("src");

    image.style.display = "none";


    const wrapper =
        image.parentElement;


    if (wrapper) {

        wrapper.classList.add("image-error");

    }

}


/* =========================================================
   SEARCH
   ========================================================= */

function handleSearch(searchTerm) {

    const term =
        String(searchTerm || "")
            .trim()
            .toLowerCase();


    if (!term) {

        filteredGames = [...games];

    } else {

        filteredGames =
            games.filter(function (game) {

                return (

                    game.title.toLowerCase().includes(term)

                    ||

                    game.genre.toLowerCase().includes(term)

                    ||

                    game.category.toLowerCase().includes(term)

                    ||

                    game.description.toLowerCase().includes(term)

                );

            });

    }


    renderGames();

}


/* =========================================================
   CATEGORY FILTER
   ========================================================= */

function filterGames(category) {

    if (
        !category ||
        category.toLowerCase() === "all"
    ) {

        filteredGames = [...games];

    } else {

        const selectedCategory =
            category.toLowerCase();


        filteredGames =
            games.filter(function (game) {

                return (

                    game.category.toLowerCase() === selectedCategory

                    ||

                    game.genre.toLowerCase() === selectedCategory

                );

            });

    }


    renderGames();


    const gamesSection =
        document.getElementById("games");


    if (gamesSection) {

        gamesSection.scrollIntoView({
            behavior: "smooth"
        });

    }

}


/* =========================================================
   GAME DETAILS
   ========================================================= */

function viewGameDetails(gameId) {

    const game =
        games.find(function (item) {

            return item.id === Number(gameId);

        });


    if (!game) {

        console.error("Game not found:", gameId);

        return;

    }


    currentGame = game;


    const modal =
        document.getElementById("gameDetailsModal");


    if (!modal) {

        alert(
            game.title +
            "\n\n" +
            game.description
        );

        return;

    }


    const detailsContainer =
        modal.querySelector(".modal-content");


    if (!detailsContainer) {

        console.warn("Modal content not found.");

        return;

    }


    let downloadButtonHTML = "";


    if (currentUser) {

        downloadButtonHTML = `

            <button
                type="button"
                class="btn btn-primary"
                onclick="downloadGame(${game.id})"
            >
                DOWNLOAD GAME
            </button>

        `;


        if (!game.downloadUrl) {

            downloadButtonHTML += `

                <p class="download-info">
                    Download link will be available soon.
                </p>

            `;

        }

    } else {

        downloadButtonHTML = `

            <button
                type="button"
                class="btn btn-primary"
                onclick="promptLogin()"
            >
                LOGIN TO DOWNLOAD
            </button>

            <p class="download-info">
                You must be logged in to download this game.
            </p>

        `;

    }


    const screenshotHTML =
        game.screenshots
            .map(function (image, index) {

                return `

                    <div class="gallery-item">

                        <img
                            src="${image}"
                            alt="${escapeHTML(game.title)} screenshot ${index + 1}"
                            loading="lazy"
                            decoding="async"
                            onclick="openScreenshot('${image}')"
                            onerror="handleImageError(this)"
                        >

                    </div>

                `;

            })
            .join("");


    detailsContainer.innerHTML = `

        <button
            type="button"
            class="modal-close"
            onclick="closeGameDetails()"
            aria-label="Close"
        >
            &times;
        </button>


        <div class="game-details-inner">

            <img
                class="game-details-cover"
                src="${game.cover}"
                alt="${escapeHTML(game.title)}"
                decoding="async"
                onerror="handleImageError(this)"
            >


            <div class="game-details-info">

                <span class="game-category">
                    ${escapeHTML(game.category)}
                </span>


                <h2>
                    ${escapeHTML(game.title)}
                </h2>


                <p class="game-description">
                    ${escapeHTML(game.description)}
                </p>


                <div class="game-details-meta">

                    <p>
                        <strong>Genre:</strong>
                        ${escapeHTML(game.genre)}
                    </p>


                    <p>
                        <strong>Platform:</strong>
                        ${escapeHTML(game.platform)}
                    </p>


                    <p>
                        <strong>Release Year:</strong>
                        ${escapeHTML(game.releaseYear)}
                    </p>

                </div>


                <div class="download-area">

                    ${downloadButtonHTML}

                </div>

            </div>

        </div>


        <div class="requirements">

            <h3>
                System Requirements
            </h3>


            <h4>
                Minimum
            </h4>


            <p>
                ${escapeHTML(
                    game.systemRequirements.minimum
                )}
            </p>


            <h4>
                Recommended
            </h4>


            <p>
                ${escapeHTML(
                    game.systemRequirements.recommended
                )}
            </p>

        </div>


        <div class="game-gallery">

            <h3>
                Screenshots
            </h3>


            <div class="gallery-grid">

                ${screenshotHTML}

            </div>

        </div>

    `;


    modal.classList.add("active");

    document.body.style.overflow = "hidden";

}


/* =========================================================
   CLOSE GAME DETAILS
   ========================================================= */

function closeGameDetails() {

    const modal =
        document.getElementById("gameDetailsModal");


    if (modal) {

        modal.classList.remove("active");

    }


    document.body.style.overflow = "";

    currentGame = null;

}


/* =========================================================
   OPEN SCREENSHOT
   ========================================================= */

function openScreenshot(imageUrl) {

    if (!imageUrl) {

        return;

    }


    window.open(
        imageUrl,
        "_blank",
        "noopener,noreferrer"
    );

}


/* =========================================================
   DOWNLOAD GAME
   ========================================================= */

function downloadGame(gameId) {

    const game =
        games.find(function (item) {

            return item.id === Number(gameId);

        });


    if (!game) {

        alert("Game not found.");

        return;

    }


    if (!currentUser) {

        alert(
            "You must be logged in to download this game."
        );

        promptLogin();

        return;

    }


    if (!game.downloadUrl) {

        alert(
            "Download link will be available soon."
        );

        return;

    }


    window.location.href =
        game.downloadUrl;

}


/* =========================================================
   LOGIN PROMPT
   ========================================================= */

function promptLogin() {

    closeGameDetails();

    navigateTo("login");

}


/* =========================================================
   LOGIN
   ========================================================= */

function handleLogin() {

    const emailInput =
        document.getElementById("loginEmail");

    const passwordInput =
        document.getElementById("loginPassword");


    if (!emailInput || !passwordInput) {

        console.warn("Login fields not found.");

        return;

    }


    const email =
        emailInput.value.trim();

    const password =
        passwordInput.value;


    if (!email || !password) {

        showFormMessage(
            "Please enter your email and password.",
            "error"
        );

        return;

    }


    /*
       FRONTEND DEMO AUTH ONLY.

       Password is never stored.

       Production authentication should use
       Firebase, Supabase, Auth0 or a secure backend.
    */


    currentUser = {

        name:
            email
                .split("@")[0]
                .replace(/[._-]/g, " "),

        email: email,

        joined:
            new Date().toLocaleDateString()

    };


    saveUserData();

    updateUserUI();


    showFormMessage(
        "Login successful!",
        "success"
    );


    setTimeout(function () {

        navigateTo("profile");

    }, 700);

}


/* =========================================================
   REGISTER
   ========================================================= */

function handleRegister() {

    const nameInput =
        document.getElementById("registerName");

    const emailInput =
        document.getElementById("registerEmail");

    const passwordInput =
        document.getElementById("registerPassword");

    const confirmInput =
        document.getElementById(
            "registerConfirmPassword"
        );


    if (
        !nameInput ||
        !emailInput ||
        !passwordInput
    ) {

        console.warn("Register fields not found.");

        return;

    }


    const name =
        nameInput.value.trim();

    const email =
        emailInput.value.trim();

    const password =
        passwordInput.value;

    const confirmPassword =
        confirmInput
            ? confirmInput.value
            : password;


    if (!name || !email || !password) {

        showFormMessage(
            "Please fill in all required fields.",
            "error"
        );

        return;

    }


    if (password.length < 6) {

        showFormMessage(
            "Password should contain at least 6 characters.",
            "error"
        );

        return;

    }


    if (password !== confirmPassword) {

        showFormMessage(
            "Passwords do not match.",
            "error"
        );

        return;

    }


    /*
       Password is intentionally NOT stored.
    */


    currentUser = {

        name: name,

        email: email,

        joined:
            new Date().toLocaleDateString()

    };


    saveUserData();

    updateUserUI();


    showFormMessage(
        "Account created successfully!",
        "success"
    );


    setTimeout(function () {

        navigateTo("profile");

    }, 700);

}


/* =========================================================
   LOGOUT
   ========================================================= */

function logout() {

    currentUser = null;

    saveUserData();

    updateUserUI();

    navigateTo("home");

}


/* =========================================================
   USER UI
   ========================================================= */

function updateUserUI() {

    const profileNav =
        document.getElementById("profileNav");

    const loginNav =
        document.getElementById("loginNav");


    if (profileNav) {

        profileNav.style.display =
            currentUser ? "" : "none";

    }


    if (loginNav) {

        loginNav.style.display =
            currentUser ? "none" : "";

    }


    document
        .querySelectorAll(".user-name")
        .forEach(function (element) {

            element.textContent =
                currentUser
                    ? currentUser.name
                    : "Guest";

        });

}


/* =========================================================
   PROFILE
   ========================================================= */

function renderProfile() {

    const profileContainer =
        document.getElementById("profileContent");


    if (!profileContainer) {

        return;

    }


    if (!currentUser) {

        profileContainer.innerHTML = `

            <div class="profile-login-message">

                <h2>
                    Login Required
                </h2>

                <p>
                    Please login to view your Gaming Dock profile.
                </p>


                <button
                    type="button"
                    class="btn btn-primary"
                    onclick="navigateTo('login')"
                >
                    LOGIN
                </button>

            </div>

        `;

        return;

    }


    const firstLetter =
        escapeHTML(
            currentUser.name
                .charAt(0)
                .toUpperCase()
        );


    profileContainer.innerHTML = `

        <div class="profile-card">

            <div class="profile-avatar">
                ${firstLetter}
            </div>


            <h2>
                ${escapeHTML(currentUser.name)}
            </h2>


            <p>
                ${escapeHTML(currentUser.email)}
            </p>


            <p>
                Member since:
                ${escapeHTML(
                    currentUser.joined || "Recently"
                )}
            </p>


            <button
                type="button"
                class="btn btn-primary"
                onclick="logout()"
            >
                LOGOUT
            </button>

        </div>

    `;

}


/* =========================================================
   UPDATES
   ========================================================= */

function renderUpdates() {

    const container =
        document.getElementById("updatesContainer");


    if (!container) {

        console.warn("updatesContainer not found.");

        return;

    }


    container.replaceChildren();


    if (updates.length === 0) {

        container.innerHTML = `

            <div class="no-updates">

                <h3>
                    Latest Game Updates
                </h3>

                <p>
                    New Release Games Update will appear here.
                </p>

            </div>

        `;

        return;

    }


    updates.forEach(function (update) {

        const card =
            document.createElement("article");


        card.className = "update-card";


        card.innerHTML = `

            <div class="update-image">

                <img
                    src="${update.image}"
                    alt="${escapeHTML(update.title)}"
                    loading="lazy"
                    decoding="async"
                    onerror="handleImageError(this)"
                >

            </div>


            <div class="update-content">

                <span class="update-date">
                    ${escapeHTML(update.date)}
                </span>


                <h3>
                    ${escapeHTML(update.title)}
                </h3>


                <p>
                    ${escapeHTML(update.description)}
                </p>


                <button
                    type="button"
                    class="btn btn-secondary"
                    onclick="readUpdate(${update.id})"
                >
                    READ MORE
                </button>

            </div>

        `;


        container.appendChild(card);

    });

}


/* =========================================================
   READ UPDATE
   ========================================================= */

function readUpdate(updateId) {

    const update =
        updates.find(function (item) {

            return item.id === Number(updateId);

        });


    if (!update) {

        return;

    }


    alert(
        update.title +
        "\n\n" +
        update.content
    );

}


/* =========================================================
   FORM MESSAGE
   ========================================================= */

function showFormMessage(message, type) {

    const messageElement =
        document.getElementById("formMessage");


    if (messageElement) {

        messageElement.textContent = message;

        messageElement.className =
            "form-message " + type;

        messageElement.style.display = "block";


        setTimeout(function () {

            messageElement.style.display = "none";

        }, 4000);


        return;

    }


    alert(message);

}


/* =========================================================
   COOKIE CONSENT
   ========================================================= */

function setupCookieConsent() {

    const cookieConsent =
        document.getElementById("cookieConsent");


    if (!cookieConsent) {

        return;

    }


    const cookieChoice =
        localStorage.getItem("gamingDockCookies");


    if (cookieChoice) {

        cookieConsent.style.display = "none";

    } else {

        cookieConsent.style.display = "block";

    }

}


/* =========================================================
   HIDE COOKIE CONSENT
   ========================================================= */

function hideCookieConsent() {

    const cookieConsent =
        document.getElementById("cookieConsent");


    if (cookieConsent) {

        cookieConsent.style.display = "none";

    }

}


/* =========================================================
   ESCAPE HTML
   ========================================================= */

function escapeHTML(value) {

    if (
        value === undefined ||
        value === null
    ) {

        return "";

    }


    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}


/* =========================================================
   GLOBAL FUNCTIONS
   ========================================================= */

window.navigateTo = navigateTo;

window.viewGameDetails = viewGameDetails;

window.closeGameDetails = closeGameDetails;

window.downloadGame = downloadGame;

window.promptLogin = promptLogin;

window.handleLogin = handleLogin;

window.handleRegister = handleRegister;

window.logout = logout;

window.filterGames = filterGames;

window.handleSearch = handleSearch;

window.readUpdate = readUpdate;

window.openScreenshot = openScreenshot;

window.handleImageError = handleImageError;


/* =========================================================
   DEBUG
   ========================================================= */

console.log(
    "Gaming Dock ready:",
    games.length,
    "games |",
    updates.length,
    "updates"
);
