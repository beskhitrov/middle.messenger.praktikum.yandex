import './style.sass';
import Handlebars from 'handlebars';
import * as Pages from './pages';
import * as Components from './components';

//import { registerComponent } from './core/registerComponent';
//import { navigate } from './core/navigate';

const pages = {
  login: [Pages.LoginPage],
  register: [Pages.RegisterPage],
  chats: [Pages.ChatPage, { message: 'Список чатов и лента переписки будут реализованы позднее.' }],
  settings: [Pages.SettingsPage, { disabled: true, change: true }],
  '404': [Pages.ErrorPage, { code: '404', message: 'Такой страницы не существует' }],
  '500': [Pages.ErrorPage, { code: '500', message: 'Уже чиним...' }],
  'change-profile': [Pages.ChangeProfilePage, { disabled: false }],
  'change-password': [Pages.ChangePasswordPage, { disabled: false }],
  'change-avatar': [Pages.ChangeAvatarPage],
  //foobar: [Pages.Foobar],
};

function navigate(page: string) {
  const [source, context] = pages[page];
  const container = document.getElementById('app')!;

  if (source instanceof Object) {
    const page = new source(context);
    container.innerHTML = '';
    container.append(page.getContent());
    return;
  }

  container.innerHTML = Handlebars.compile(source)(context);
}

document.addEventListener('click', (e) => {
  const page = e.target.getAttribute('page');
  if (page) {
    navigate(page);
    e.preventDefault();
    e.stopImmediatePropagation();
  }
});

Object.entries(Components).forEach(([name, component]) => {
  Handlebars.registerPartial(name, component);
});

document.addEventListener('click', (e) => {
  const page = e.target.getAttribute('page');
  if (page) {
    navigate(page);
    e.preventDefault();
    e.stopImmediatePropagation();
  }
});

/*
// const foo = document.getElementById('foo');
// foo.addEventListener('click', () => render('#app', new Foobar()));

// document.addEventListener('DOMContentLoaded', () => navigate('login'));
*/

// Handlebars.registerPartial('FormAuth', Components.FormAuth);

// registerComponent('Bar', Components.Bar);
// registerComponent('InputField', Components.InputField);
// registerComponent('Input', Components.Input);
// registerComponent('ErrorLine', Components.ErrorLine);
// registerComponent('CatCard', Components.CatCard);
// registerComponent('ListCat', Components.ListCatCards);

// document.addEventListener('DOMContentLoaded', () => navigate('foo'));

//document.addEventListener('DOMContentLoaded', () => navigate('login'));
