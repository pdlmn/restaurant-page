const p1Content = 'The Green Bowl was founded by George the Jorj at the start of lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
const p2Content = 'George the Jorj was a fine man with a passion for cooking, health and lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
const buttonContent = 'Discover Our Menu';

function createHomeHeader() {
  const header = document.createElement('header');
  const h2 = document.createElement('h2');
  const p = document.createElement('p');

  h2.textContent = 'The Green Bowl';
  p.textContent = 'Plant-based traditions since 1989';

  header.classList.add('content-header');
  h2.classList.add('flex-centered');
  p.classList.add('subtext', 'flex-centered');

  header.append(h2, p);

  return header
}

function createDescription() {
  const p1 = document.createElement('p');
  const p2 = document.createElement('p');

  p1.append(p1Content);
  p2.append(p2Content);

  return [p1, p2]
}

function createButton() {
  const buttonWrapper = document.createElement('div');
  const button = document.createElement('button');

  buttonWrapper.classList.add('flex-centered');
  button.classList.add('button');
  button.dataset.page = 'menu';
  button.append(buttonContent);

  buttonWrapper.append(button);

  return buttonWrapper
}

export default function home() {
  const article = document.createElement('article');
  article.append(
    createHomeHeader(),
    ...createDescription(),
    createButton()
  );
  return article
}
