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
    // Update language button labels
    const currentLanguageLabel = document.getElementById('currentLanguage');
    const currentLanguageMobileLabel = document.getElementById('currentLanguageMobile');
    
    if (currentLanguageLabel) {
        currentLanguageLabel.textContent = translations[language].text;
    }
    if (currentLanguageMobileLabel) {
        currentLanguageMobileLabel.textContent = translations[language].text;
    }
    
    // Update all elements with translation attributes
    const elementsToTranslate = document.querySelectorAll('[data-de][data-en]');
    
    elementsToTranslate.forEach(element => {
        const germanText = element.getAttribute('data-de');
        const englishText = element.getAttribute('data-en');
        const targetText = language === 'de' ? germanText : englishText;

        if (typeof targetText === 'string') {
            const decodedText = decodeHtmlEntities(targetText);
            const containsHtml = /<[^>]+>/.test(decodedText);
            if (containsHtml) {
                element.innerHTML = decodedText;
            } else {
                element.textContent = decodedText;
            }
        }
    });

    // Update placeholders
    const placeholderElements = document.querySelectorAll('[data-placeholder-de][data-placeholder-en]');
    placeholderElements.forEach(element => {
        const placeholderValue = language === 'de'
            ? element.getAttribute('data-placeholder-de')
            : element.getAttribute('data-placeholder-en');
        if (placeholderValue !== null) {
            element.setAttribute('placeholder', placeholderValue);
        }
    });

    // Update input/button values
    const valueElements = document.querySelectorAll('[data-value-de][data-value-en]');
    valueElements.forEach(element => {
        const valueText = language === 'de'
            ? element.getAttribute('data-value-de')
            : element.getAttribute('data-value-en');
        if (valueText !== null) {
            element.value = valueText;
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
        const titleDe = pageTitle.getAttribute('data-de');
        const titleEn = pageTitle.getAttribute('data-en');

        if (language === 'de' && titleDe) {
            pageTitle.textContent = titleDe;
        } else if (language === 'en' && titleEn) {
            pageTitle.textContent = titleEn;
        }
    }
    
    // Update HTML lang attribute
    document.documentElement.lang = language;
}

// Simple HTML-entity decoder for translation strings
function decodeHtmlEntities(value) {
    const textarea = document.createElement('textarea');
    textarea.innerHTML = value;
    return textarea.value;
}

// Export for use in other files if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { toggleLanguage, applyLanguage };
}
