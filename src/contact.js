const PEOPLE = [
  Person('Antonio', 'Chef', 'antonio@gmail.com', 'antonio.png'),
  Person('John', 'Administrator', 'john@gmail.com', 'john.png'),
  Person('Alexandra', 'Manager', 'alex@gmail.com', 'alexandra.png'),
];

function Person(name, position, email, photo) {
  return { name, position, email, photo }
}

function createContactHeader() {
  const header = document.createElement('header');
  const h2 = document.createElement('h2');

  h2.textContent = 'Contact Us';

  header.classList.add('content-header');
  h2.classList.add('flex-centered');

  header.append(h2);

  return header
}

function createPeopleCards(people) {
  const cards = document.createElement('div');
  cards.classList.add('flex-column');

  for (let person of people) {
    let card = document.createElement('div');
    let info = document.createElenent('div');

    let name = document.createElement('h3');
    let position = document.createElement('p')
    let email = document.createElement('p')
    let photo = document.createElement('img');

    name.textContent = person.name;
    position.textContent = person.position;
    email.textContent = person.email;
    photo.src = `./img/${person.photo}`;

    card.classList.add('flex');
    info.classList.add('flex-column'); 

    info.append(name, position, email);
    card.append(photo, info);

    cards.append(card);
  }

  return cards
}

export default function contact() {
  const article = document.createElement('article');

  article.append(
    createContactHeader(),
  );
  return article
}
