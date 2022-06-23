function displayContent() {
  document.querySelector('.container').style.display = 'none';
  document.querySelector('.mobile-menu').style.display = 'block';
}
function hideMenu() {
  document.querySelector('.container').style.display = 'block';
  document.querySelector('.mobile-menu').style.display = 'none';
}
function portfolioSection() {
  hideMenu();
  window.location = `${window.location.pathname}#portfolio`;
}
function aboutSection() {
  hideMenu();
  window.location = `${window.location.pathname}#about`;
}
function contactSection() {
  hideMenu();
  window.location = `${window.location.pathname}#contact`;
}

window.addEventListener('DOMContentLoaded', () => {
  document
    .querySelector('.hamburger > img')
    .addEventListener('click', displayContent);
  document.querySelector('.close').addEventListener('click', hideMenu);
  document
    .querySelector('.portfolio')
    .addEventListener('click', portfolioSection);
  document.querySelector('.about').addEventListener('click', aboutSection);
  document.querySelector('.contact').addEventListener('click', contactSection);
});

// Pop up window

const projects = [
  {
    // First Project
    name: 'Profesional Art Printing Data',
    discription:
      'First A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry`s standard',
    discriptionDesktop:
      'Firsst Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s,',
    languages: ['html', 'bootstrap', 'Ruby'],
    reference: [
      'https://en.wikipedia.org/wiki/HTML',
      'https://en.wikipedia.org/wiki/Bootstrap_(front-end_framework',
      'https://en.wikipedia.org/wiki/Ruby_(programming_language',
    ],
  },
  {
    // First Project
    name: 'Profesional Art Printing Data',
    discription:
      'First A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry`s standard',
    discriptionDesktop:
      'Firsst Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s,',
    languages: ['html', 'bootstrap', 'Ruby'],
    reference: [
      'https://en.wikipedia.org/wiki/HTML',
      'https://en.wikipedia.org/wiki/Bootstrap_(front-end_framework',
      'https://en.wikipedia.org/wiki/Ruby_(programming_language',
    ],
  },
  {
    // Third Project
    name: 'Website Protfolio',
    discription:
      'Third A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry`s standard',
    discriptionDesktop:
      'Third Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    languages: ['html', 'bootstrap', 'Ruby'],
    reference: [
      'https://en.wikipedia.org/wiki/HTML',
      'https://en.wikipedia.org/wiki/Bootstrap_(front-end_framework',
      'https://en.wikipedia.org/wiki/Ruby_(programming_language',
    ],
  },
  {
    name: 'Profesional Art Printing Data',
    discription:
      'First A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry`s standard',
    discriptionDesktop:
      'Firsst Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s,',
    languages: ['html', 'bootstrap', 'Ruby'],
    reference: [
      'https://en.wikipedia.org/wiki/HTML',
      'https://en.wikipedia.org/wiki/Bootstrap_(front-end_framework',
      'https://en.wikipedia.org/wiki/Ruby_(programming_language',
    ],
  },
  {
    // Fifth Project
    name: 'Profesional Art Printing Data',
    discription:
      'First A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry`s standard',
    discriptionDesktop:
      'Firsst Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s,',
    languages: ['html', 'bootstrap', 'Ruby'],
    reference: [
      'https://en.wikipedia.org/wiki/HTML',
      'https://en.wikipedia.org/wiki/Bootstrap_(front-end_framework',
      'https://en.wikipedia.org/wiki/Ruby_(programming_language',
    ],
  },
  {
    // sixth Project
    name: 'Website Protfolio',
    discription:
      'Sixth A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry`s standard',
    discriptionDesktop:
      'Sixth Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    languages: ['html', 'bootstrap', 'Ruby'],
    reference: [
      'https://en.wikipedia.org/wiki/HTML',
      'https://en.wikipedia.org/wiki/Bootstrap_(front-end_framework',
      'https://en.wikipedia.org/wiki/Ruby_(programming_language',
    ],
  },
];
// creating generic elements
function addElement(element, classes, parent) {
  const newElem = document.createElement(element);
  classes.forEach((cl) => newElem.classList.add(cl));
  parent.appendChild(newElem);
  return newElem;
}
// ==== Show-hide functions
function show(toSHow) {
  // Remove hide class and add show class
  toSHow.classList.remove('hide');
  toSHow.classList.add('show');
}

function hide(toHide) {
  // Remove show class and add hide class
  toHide.classList.remove('show');
  toHide.classList.add('hide');
}
const workContainer = document.querySelector('.work-display');

const showWorkPopup = (index) => {
  // Define the targets
  const main = document.querySelector('.A');
  const sectionPopup = addElement('section', ['popUp'], main);
  const topPopup = addElement('div', ['pop-up-top'], sectionPopup);
  const h1Popup = addElement('h1', ['pop-up-h1'], topPopup);
  h1Popup.textContent = projects[index].name;
  const closePopup = addElement('img', ['close-icon-2'], topPopup);
  closePopup.setAttribute('src', 'svg/closeicone2.svg', 'alt', 'cancel-button');
  const languagePopups = addElement('ul', ['pop-up-languages'], sectionPopup);
  const languagePopup1 = addElement(
    'li',
    ['pop-up-language-li'],
    languagePopups,
  );
  languagePopup1.textContent = 'html';
  const languagePopup2 = addElement(
    'li',
    ['pop-up-language-li'],
    languagePopups,
  );
  languagePopup2.textContent = 'bootstrap';
  const languagePopup3 = addElement(
    'li',
    ['pop-up-language-li'],
    languagePopups,
  );
  languagePopup3.textContent = 'ruby on rails';
  const desktop1Popup = addElement('div', ['pop-up-desktop-1'], sectionPopup);
  const imagePopup = addElement('img', ['pop-up-image'], desktop1Popup);
  imagePopup.setAttribute(
    'src',
    './png/Snapshoot Portfolio.png',
    'alt',
    'project-1 details',
  );
  const desktop2popup = addElement('div', ['pop-up-desktop-2'], desktop1Popup);
  const desktop2Para = addElement('p', ['pop-up-description'], desktop2popup);
  if (window.innerWidth < 768) {
    // If mobile
    desktop2Para.textContent = projects[index].discription;
  } else {
    // If desktop
    desktop2Para.textContent = projects[index].discriptionDesktop;
  }
  const desktop2Buttons = addElement('ul', ['pop-up-buttons'], desktop2popup);
  const desktop2Button1 = addElement('li', ['pop-up-button1'], desktop2Buttons);
  const desktop2Btn1 = addElement('button', ['pop-up-btn1'], desktop2Button1);
  desktop2Btn1.setAttribute('type', 'button');
  desktop2Btn1.textContent = 'See Live';
  const desktop2Button2 = addElement('li', ['pop-up-button2'], desktop2Buttons);
  const desktop2Btn2 = addElement('button', ['pop-up-btn2'], desktop2Button2);
  desktop2Btn2.setAttribute('type', 'button');
  desktop2Btn2.textContent = 'See Source';
  // Add close function
  closePopup.addEventListener('click', () => {
    hide(sectionPopup);
    main.removeChild(sectionPopup);
  });

  // Show
  show(sectionPopup);
};
// dynamic content

projects.forEach((card, index) => {
  const workCard = addElement('div', ['work-2'], workContainer);
  const workContent = addElement('div', ['work2-content'], workCard);
  const workHeading1 = addElement('h1', [], workContent);
  workHeading1.textContent = card.name;
  const workHeading2 = addElement('h2', [], workContent);
  workHeading2.textContent = card.name;
  const workParagraph1 = addElement('p', [], workContent);
  workParagraph1.textContent = card.discription;
  const listUrl = addElement('ul', [], workContent);
  const listItem1 = addElement('li', ['list2'], listUrl);
  listItem1.textContent = 'html';
  const listItem2 = addElement('li', ['list2'], listUrl);
  listItem2.textContent = 'bootstrap';
  const listItem3 = addElement('li', ['list2'], listUrl);
  listItem3.textContent = 'ruby on rails';
  const buttonWork = addElement('div', ['work2-button'], workCard);
  const buttonWork1 = addElement('button', [], buttonWork);
  buttonWork1.setAttribute('type', 'button');
  buttonWork1.textContent = 'See Project';

  buttonWork1.onclick = () => showWorkPopup(index);
});

// ==== Work popup
const seeProjectButtons = document.querySelectorAll('.work-show-button');

seeProjectButtons.forEach((button, index) => {
  button.onclick = () => showWorkPopup(index);
});

// form variables
const emailForm = document.querySelector('#e-mail');
const popUpForm = document.querySelector('.form-popup');
const submit = document.querySelector('.submit');

emailForm.addEventListener('input', () => {
  if (/[A-Z]/.test(emailForm.value)) {
    popUpForm.style.display = 'block';
  } else {
    popUpForm.style.display = 'none';
  }
});
