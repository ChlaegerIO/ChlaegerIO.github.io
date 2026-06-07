/**
 * renderNav(activePage, basePath)
 * Generates and injects the header + navigation HTML.
 * @param {string} activePage - the current page identifier (e.g., 'home', 'weather', 'photography', 'blog')
 * @param {string} basePath - the relative path prefix (e.g., '', '../../' for nested pages)
 */
function renderNav(activePage, basePath) {
  const nav = document.getElementById('nav-placeholder');
  if (!nav) return;

  const homeLink = basePath + 'index.html';
  const weatherLink = basePath + 'pages/weather/weather.html';
  const photoLink = basePath + 'pages/photography/photography.html';

  // Helper to set active class
  const isActive = (page) => activePage === page ? 'active' : '';

  nav.innerHTML = `
    <header class="header-main">
      <div class="header-content">
        <div class="header-left">
          <img class="logo" src="${basePath}images/Logo_ohneSchrift.png" alt="Timo Kleger Logo" />
        </div>
        <nav class="nav-main">
          <button class="menu-toggle" id="menuToggle" aria-label="Menu">
            <span></span><span></span><span></span>
          </button>
          <div class="nav-container">
            <ul class="nav-list">
              <li><a href="${homeLink}" class="nav-link ${isActive('home')}" data-de="Timo Kleger" data-en="Timo Kleger">Timo Kleger</a></li>
              <li><a href="${weatherLink}" class="nav-link ${isActive('weather')}" data-de="Wetter" data-en="Weather">Wetter</a></li>
              <li><a href="${photoLink}" class="nav-link ${isActive('photography')}" data-de="Fotografie" data-en="Photography">Fotografie</a></li>
              <li>
                <button id="languageToggle" class="btn btn-icon btn-ghost language-toggle" onclick="toggleLanguage()" title="Language / Sprache">
                  <span class="material-icons language-icon">compare_arrows</span>
                  <span class="language-text" id="currentLanguage">Deutsch</span>
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  `;

  // Mobile menu toggle
  const menuToggle = document.getElementById('menuToggle');
  const navContainer = document.querySelector('.nav-container');
  if (menuToggle && navContainer) {
    menuToggle.addEventListener('click', () => {
      navContainer.classList.toggle('active');
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-list a').forEach(link => {
      link.addEventListener('click', () => {
        navContainer.classList.remove('active');
      });
    });
  }

  // Apply language if set
  if (typeof applyLanguage === 'function') {
    const savedLang = localStorage.getItem('language') || 'de';
    applyLanguage(savedLang);
  }
}

// Add CSS for header if not already included
if (!document.querySelector('style[data-nav-css]')) {
  const style = document.createElement('style');
  style.setAttribute('data-nav-css', 'true');
  style.textContent = `
    .header-main {
      position: sticky;
      top: 0;
      z-index: 1000;
      background: white;
      border-bottom: 1px solid #e2e8f0;
      box-shadow: 0 2px 8px rgba(15, 23, 42, 0.08);
    }

    .header-content {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding: 1rem 2rem;
      max-width: none;
      margin: 0;
      gap: 2rem;
    }

    .header-left {
      display: flex;
      align-items: center;
    }

    .logo {
      height: 50px;
      width: auto;
    }

    .nav-main {
      display: flex;
      align-items: center;
      margin-left: auto;
    }

    .menu-toggle {
      display: none;
      flex-direction: column;
      background: none;
      border: none;
      cursor: pointer;
      gap: 4px;
      padding: 8px;
    }

    .menu-toggle span {
      width: 25px;
      height: 3px;
      background: #0f172a;
      border-radius: 2px;
      transition: 200ms ease;
    }

    .nav-container {
      display: flex;
    }

    .nav-list {
      display: flex;
      list-style: none;
      gap: 0.5rem;
      align-items: center;
      margin: 0;
      padding: 0;
    }

    .nav-link {
      text-decoration: none;
      color: #0f172a;
      padding: 0.5rem 1rem;
      border-radius: 8px;
      transition: 200ms ease;
    }

    .nav-link:hover,
    .nav-link.active {
      background-color: rgba(71, 138, 201, 0.08);
      color: #478ac9;
    }

    @media (max-width: 768px) {
      .header-content {
        padding: 0.75rem 1rem;
      }

      .logo {
        height: 40px;
      }

      .menu-toggle {
        display: flex;
      }

      .nav-container {
        display: block;
        position: fixed;
        left: 0;
        top: 68px;
        width: 100%;
        background: white;
        max-height: 0;
        overflow: hidden;
        transition: max-height 300ms ease;
        border-bottom: 2px solid #e2e8f0;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
        z-index: 999;
      }

      .nav-container.active {
        max-height: 400px;
      }

      .nav-list {
        flex-direction: column;
        gap: 0;
        width: 100%;
        padding: 0.5rem 0;
      }

      .nav-list li {
        width: 100%;
      }

      .nav-link {
        display: block;
        width: 100%;
        padding: 0.9rem 1.5rem;
        border-radius: 0;
        font-size: 1rem;
        border-bottom: 1px solid #f0f0f0;
        box-sizing: border-box;
      }

      .language-toggle {
        width: 100%;
        padding: 0.9rem 1.5rem;
        border-radius: 0;
        border: none;
        border-bottom: 1px solid #f0f0f0;
        justify-content: flex-start;
      }
    }
  `;
  document.head.appendChild(style);
}
