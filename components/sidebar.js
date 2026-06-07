/**
 * renderSidebar(basePath)
 * Generates and injects the sidebar component (desktop + mobile).
 * @param {string} basePath - the relative path prefix for image and link paths
 */
function renderSidebar(basePath) {
  const sidebar = document.getElementById('sidebar-placeholder');
  if (!sidebar) return;

  const photoPath = basePath + 'images/Ich1.jpeg';

  sidebar.innerHTML = `
    <aside class="profile-sidebar">
      <!-- Desktop Sidebar -->
      <div class="sidebar-desktop">
        <img src="${photoPath}" alt="Timo Kleger" class="sidebar-photo" />
        <h2 class="sidebar-name">Timo Kleger</h2>
        <p class="sidebar-subtitle" data-de="Elektroingenieur" data-en="Electrical Engineer">Elektroingenieur</p>
        <div class="sidebar-divider"></div>

        <ul class="sidebar-links">
          <li>
            <span class="sidebar-icon material-icons material-icons-sidebar">location_on</span>
            <span data-de="St. Gallen, Schweiz" data-en="St. Gallen, Switzerland">St. Gallen, Schweiz</span>
          </li>
          <li>
            <a href="mailto:timokleger@hotmail.com" title="Email">
              <span class="sidebar-icon material-icons material-icons-sidebar">email</span>
              <span>Email</span>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/timo-k-23a3591b7/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <span class="sidebar-icon">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.731-2.004 1.437-.103.25-.129.599-.129.948v5.42h-3.554s.047-8.733 0-9.636h3.554v1.364c.429-.662 1.196-1.6 2.905-1.6 2.122 0 3.714 1.388 3.714 4.375v5.497zM5.337 8.855c-1.144 0-1.915-.761-1.915-1.71 0-.955.77-1.71 1.963-1.71 1.19 0 1.916.755 1.929 1.71 0 .949-.74 1.71-1.977 1.71zm1.582 11.597H3.635V9.816h3.284v10.636zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
                </svg>
              </span>
              <span>LinkedIn</span>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/tk_naturegallery/" target="_blank" rel="noopener noreferrer" title="Instagram">
              <span class="sidebar-icon">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.07 1.645.07 4.849 0 3.205-.012 3.584-.07 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z"/>
                </svg>
              </span>
              <span>Instagram</span>
            </a>
          </li>
          <li>
            <a href="https://github.com/ChlaegerIO" target="_blank" rel="noopener noreferrer" title="GitHub">
              <span class="sidebar-icon">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </span>
              <span>GitHub</span>
            </a>
          </li>
          <li>
            <a href="https://stock.adobe.com/de/contributor/210079993/Kleger%20photography" target="_blank" rel="noopener noreferrer" title="Adobe Stock">
              <span class="sidebar-icon">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0C5.371 0 0 5.373 0 12s5.371 12 12 12 12-5.373 12-12S18.629 0 12 0zm4.891 15.891h-2.458v-4.034a1.41 1.41 0 0 0-1.417-1.417h-2.859v5.451H7.698V8.109h2.459v1.134h.034c.322-.611.966-1.415 1.98-1.415 2.101 0 3.92 1.32 3.92 4.23v3.833zM6.891 6.974a1.416 1.416 0 1 1 0-2.832 1.416 1.416 0 0 1 0 2.832zm1.324 8.917H5.567V8.109h2.648v7.782z"/>
                </svg>
              </span>
              <span>Adobe Stock</span>
            </a>
          </li>
        </ul>
      </div>

      <!-- Mobile Sidebar -->
      <div class="sidebar-mobile">
        <div class="sidebar-mobile-row">
          <img src="${photoPath}" alt="Timo Kleger" class="sidebar-mobile-photo" />
          <div class="sidebar-mobile-info">
            <h2 class="sidebar-mobile-name">Timo Kleger</h2>
          </div>
          <button class="follow-btn" id="followBtn" data-de="Folgen" data-en="Follow">Folgen</button>
        </div>
      </div>

      <!-- Follow Popup (Mobile) -->
      <div class="follow-popup" id="followPopup">
        <div class="follow-popup-content">
          <button class="follow-popup-close" id="followPopupClose" aria-label="Close">&times;</button>
          <h3 class="follow-popup-title" data-de="Folge mir auf" data-en="Follow me on">Folge mir auf</h3>
          <ul class="follow-popup-links">
            <li>
              <a href="https://www.linkedin.com/in/timo-k-23a3591b7/" target="_blank" rel="noopener noreferrer">
                <span class="sidebar-icon">
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.731-2.004 1.437-.103.25-.129.599-.129.948v5.42h-3.554s.047-8.733 0-9.636h3.554v1.364c.429-.662 1.196-1.6 2.905-1.6 2.122 0 3.714 1.388 3.714 4.375v5.497zM5.337 8.855c-1.144 0-1.915-.761-1.915-1.71 0-.955.77-1.71 1.963-1.71 1.19 0 1.916.755 1.929 1.71 0 .949-.74 1.71-1.977 1.71zm1.582 11.597H3.635V9.816h3.284v10.636zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
                  </svg>
                </span>
                <span>LinkedIn</span>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/tk_naturegallery/" target="_blank" rel="noopener noreferrer">
                <span class="sidebar-icon">
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.07 1.645.07 4.849 0 3.205-.012 3.584-.07 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z"/>
                  </svg>
                </span>
                <span>Instagram</span>
              </a>
            </li>
            <li>
              <a href="https://github.com/ChlaegerIO" target="_blank" rel="noopener noreferrer">
                <span class="sidebar-icon">
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </span>
                <span>GitHub</span>
              </a>
            </li>
            <li>
              <a href="https://stock.adobe.com/de/contributor/210079993/Kleger%20photography" target="_blank" rel="noopener noreferrer">
                <span class="sidebar-icon">
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
                  </svg>
                </span>
                <span>Adobe Stock</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  `;

  // Mobile popup handling
  const followBtn = document.getElementById('followBtn');
  const followPopup = document.getElementById('followPopup');
  const followPopupClose = document.getElementById('followPopupClose');

  if (followBtn && followPopup) {
    followBtn.addEventListener('click', () => {
      followPopup.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    });

    followPopupClose.addEventListener('click', () => {
      followPopup.classList.remove('is-open');
      document.body.style.overflow = '';
    });

    // Close on overlay click
    followPopup.addEventListener('click', (e) => {
      if (e.target === followPopup) {
        followPopup.classList.remove('is-open');
        document.body.style.overflow = '';
      }
    });

    // Close on ESC
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && followPopup.classList.contains('is-open')) {
        followPopup.classList.remove('is-open');
        document.body.style.overflow = '';
      }
    });
  }

  // Apply language if set
  if (typeof applyLanguage === 'function') {
    const savedLang = localStorage.getItem('language') || 'de';
    applyLanguage(savedLang);
  }
}
