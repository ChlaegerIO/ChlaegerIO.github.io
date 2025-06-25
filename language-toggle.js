// Language Toggle Functionality
let currentLanguage = 'de'; // Default to German

// Language translations object
const translations = {
    de: {
        text: 'Deutsch',
        title: 'Switch to English'
    },
    en: {
        text: 'English',
        title: 'Auf Deutsch wechseln'
    }
};

// Initialize language on page load
document.addEventListener('DOMContentLoaded', function() {
    // Check if there's a saved language preference
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage && (savedLanguage === 'de' || savedLanguage === 'en')) {
        currentLanguage = savedLanguage;
    }
    
    // Apply the current language
    applyLanguage(currentLanguage);
});

// Toggle between German and English
function toggleLanguage() {
    currentLanguage = currentLanguage === 'de' ? 'en' : 'de';
    
    // Save preference to localStorage
    localStorage.setItem('language', currentLanguage);
    
    // Apply the new language
    applyLanguage(currentLanguage);
}

// Apply language to all elements with data-de and data-en attributes
function applyLanguage(language) {
    // Update language text
    const currentLanguage = document.getElementById('currentLanguage');
    const currentLanguageMobile = document.getElementById('currentLanguageMobile');
    
    if (currentLanguage) {
        currentLanguage.textContent = translations[language].text;
    }
    if (currentLanguageMobile) {
        currentLanguageMobile.textContent = translations[language].text;
    }
    
    // Update all elements with translation attributes
    const elementsToTranslate = document.querySelectorAll('[data-de][data-en]');
    
    elementsToTranslate.forEach(element => {
        const germanText = element.getAttribute('data-de');
        const englishText = element.getAttribute('data-en');
        
        if (language === 'de' && germanText) {
            // Handle HTML content in data attributes
            if (germanText.includes('<br/>') || germanText.includes('<br>')) {
                element.innerHTML = germanText;
            } else {
                element.textContent = germanText;
            }
        } else if (language === 'en' && englishText) {
            // Handle HTML content in data attributes
            if (englishText.includes('<br/>') || englishText.includes('<br>')) {
                element.innerHTML = englishText;
            } else {
                element.textContent = englishText;
            }
        }
    });
    
    // Update title attributes for tooltips
    const languageToggle = document.getElementById('languageToggle');
    const languageToggleMobile = document.getElementById('languageToggleMobile');
    
    if (languageToggle) {
        languageToggle.title = translations[language].title;
    }
    if (languageToggleMobile) {
        languageToggleMobile.title = translations[language].title;
    }
    
    // Update page title if needed
    const pageTitle = document.querySelector('title');
    if (pageTitle) {
        pageTitle.textContent = language === 'de' ? 'Home' : 'Home';
    }
    
    // Update HTML lang attribute
    document.documentElement.lang = language;
}

// Export for use in other files if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { toggleLanguage, applyLanguage };
}
