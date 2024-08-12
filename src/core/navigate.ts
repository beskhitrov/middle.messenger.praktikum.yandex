import * as Pages from '../pages';
// import Handlebars from 'handlebars';

const pages = {
  //foo: Pages.Foo,
  // list: Pages.Cats,
};

export function navigate(page: string) {
  const app = document.getElementById('app');
  const nav = document.querySelector('#app nav');
  const Component = pages[page];
  const component = new Component();
  app?.insertBefore(component.getContent(), nav);
  app?.removeChild(nav);
  // app?.append(component.getContent()!);
}
