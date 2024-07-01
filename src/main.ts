import './style.sass';
import Handlebars from 'handlebars';
import * as Pages from './pages';
import * as Components from './components';

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
};

function navigate(page: string) {
  const [source, context] = pages[page];
  const container = document.getElementById('app')!;
  container.innerHTML = Handlebars.compile(source)(context);
}

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

// document.addEventListener('DOMContentLoaded', () => navigate('login'));
