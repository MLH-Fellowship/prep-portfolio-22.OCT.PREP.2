(() => {
    const storedPreferences = localStorage.getItem("preferences");
    if (storedPreferences) {
        const preferences = JSON.parse(storedPreferences);
        const root = document.documentElement;
        const variables = getComputedStyle(root);
        const toggleButton = document.getElementById("darkmode-toggle");
        if (toggleButton) {
            toggleButton.checked = preferences.theme === 'dark';
        }
        root.style.setProperty('--background-color', variables.getPropertyValue(`--${preferences.theme}-background-color`));
        root.style.setProperty('--card-color', variables.getPropertyValue(`--${preferences.theme}-card-color`));
        root.style.setProperty('--font-color', variables.getPropertyValue(`--${preferences.theme}-font-color`));
        root.style.setProperty('--banner-color', variables.getPropertyValue(`--${preferences.theme}-banner-color`));
    }
})();

const toggleTheme = () => {
    const root = document.documentElement;
    const toggleButton = document.getElementById("darkmode-toggle");
    const variables = getComputedStyle(root);
    const preferences = { theme: toggleButton.checked ? 'dark' : 'light' };
    localStorage.setItem("preferences", JSON.stringify(preferences));
    root.style.setProperty('--background-color', variables.getPropertyValue(`--${preferences.theme}-background-color`));
    root.style.setProperty('--card-color', variables.getPropertyValue(`--${preferences.theme}-card-color`));
    root.style.setProperty('--font-color', variables.getPropertyValue(`--${preferences.theme}-font-color`));
    root.style.setProperty('--banner-color', variables.getPropertyValue(`--${preferences.theme}-banner-color`));
}