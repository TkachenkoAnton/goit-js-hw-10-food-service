import refs from './htmlMarkup';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

localStorage.setItem('theme', JSON.stringify(Theme));

const savedTheme = localStorage.getItem('theme');

const parsedTheme = JSON.parse(savedTheme);

let currentThemeParse = JSON.parse(localStorage.getItem('currentTheme'));

refs.body.classList.add(currentThemeParse);

refs.themeSwitch.addEventListener('change', () => {

    if (refs.body.classList.contains(parsedTheme.LIGHT)) {
        refs.body.classList.remove(parsedTheme.LIGHT);
        localStorage.setItem('currentTheme', JSON.stringify(parsedTheme.DARK));
        const dark = JSON.parse(localStorage.getItem('currentTheme'));
        refs.body.classList.add(dark);
        
    } else {
        refs.body.classList.remove(parsedTheme.DARK);
        refs.body.classList.add(parsedTheme.LIGHT);
        localStorage.removeItem('currentTheme', JSON.stringify(parsedTheme.DARK));
        localStorage.setItem('currentTheme', JSON.stringify(parsedTheme.LIGHT));
    };

});
