// function to set a given theme/color-scheme
function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}

// function to toggle between light and dark theme
function toggleTheme() {
    if (localStorage.getItem('theme') === 'theme-dark') {
        document.getElementById('theme-toggle').textContent = '☾ Dark'
        setTheme('theme-light');
    } else {
        document.getElementById('theme-toggle').textContent = '☼ Light'
        setTheme('theme-dark');
    }
}

// Remember theme set
(function () {
    if (localStorage.getItem('theme') === 'theme-dark') {
        document.getElementById('theme-toggle').textContent = '☼ Light'
        setTheme('theme-dark');
        document.getElementById('slider').checked = false;
    } else {
        document.getElementById('theme-toggle').textContent = '☾ Dark'
        setTheme('theme-light');
        document.getElementById('slider').checked = true;
    }
})();