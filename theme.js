// Theme switching logic. Handles system preference detection, cookie persistence, and UI updates.

(function () {
    const COOKIE_NAME = 'theme';
    const THEME_DARK = 'dark';
    const THEME_LIGHT = 'light';
    const DAYS_TO_EXPIRY = 365;

    function setCookie(name, value, days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        const expires = "; expires=" + date.toUTCString();
        document.cookie = name + "=" + (value || "") + expires + "; path=/; SameSite=Lax";
    }

    function getCookie(name) {
        const nameEQ = name + "=";
        const ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    function getPreferredTheme() {
        const storedTheme = getCookie(COOKIE_NAME);
        console.log('[Theme] Stored cookie:', storedTheme);

        if (storedTheme === THEME_DARK || storedTheme === THEME_LIGHT) {
            return storedTheme;
        }

        const isSystemDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        console.log('[Theme] System prefers dark:', isSystemDark);

        return isSystemDark ? THEME_DARK : THEME_LIGHT;
    }

    function applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);

        // Update theme-color meta tag
        const metaThemeColor = document.querySelector('meta[name="theme-color"]');
        if (metaThemeColor) {
            metaThemeColor.setAttribute('content', theme === THEME_DARK ? '#121212' : '#FDFAF5');
        }
    }

    function toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme') || THEME_LIGHT;
        const newTheme = currentTheme === THEME_DARK ? THEME_LIGHT : THEME_DARK;

        applyTheme(newTheme);
        setCookie(COOKIE_NAME, newTheme, DAYS_TO_EXPIRY);
    }

    // Initialize theme immediately to prevent FOUC (if script is in <head>)
    const initialTheme = getPreferredTheme();
    applyTheme(initialTheme);

    // Set up toggle button and current year once DOM is loaded
    document.addEventListener('DOMContentLoaded', () => {
        const btn = document.getElementById('theme-toggle');
        if (btn) {
            btn.addEventListener('click', toggleTheme);
        }

        // Update displayed year in footer
        const yearSpan = document.getElementById('current-year');
        if (yearSpan) {
            yearSpan.textContent = new Date().getFullYear();
        }
    });

    // Listen for system theme changes if no cookie is set
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        if (!getCookie(COOKIE_NAME)) {
            applyTheme(e.matches ? THEME_DARK : THEME_LIGHT);
        }
    });
})();
