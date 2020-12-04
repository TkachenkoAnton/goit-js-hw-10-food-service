import markup from '../templates/markup.hbs';
import menu from '../menu.json';

const refs = {
    ulMenu: document.querySelector('.js-menu'),
}

const markupLi = markup(menu);

refs.ulMenu.insertAdjacentHTML('beforeend', markupLi);

