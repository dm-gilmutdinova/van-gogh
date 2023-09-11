const searchIcon = document.querySelector('.fa-search');
const search = document.querySelector('.search');
const text = document.querySelector('.searchText');

searchIcon.addEventListener('click', function () {
  search.classList.toggle('active');
  text.classList.toggle('active');
});

const quotes = [
  'I often think that the night is more alive and more richly colored than the day',
  'Painting is a faith, and it imposes the duty to disregard public opinion',
  'I put my heart and my soul into my work, and have lost my mind in the process',
  'A good picture is equivalent to a good deed ',
  'Love always brings difficulties, that is true, but the good side of it is that it gives energy',
  'Love always brings difficulties, that is true, but the good side of it is that it gives energy',
];

const textQuotes = document.querySelector('.quotes__show-title');
const btn = document.querySelector('.quotes__btn');

btn.addEventListener('click', function () {
  const quote = Math.floor(Math.random() * quotes.length);
  textQuotes.innerHTML = quotes[quote];
});

// const images = document.querySelector('.painting__card');
// let index = 0;

// let slider = (i) => {
//   index += i;
//   for (i = 0; i < images.length; i++) images[i].style.display = 'none';
//   if (index > images.length - 1) index = 0;
//   if (index < 0) index = images.length - 1;
//   images[index].style.display = 'block';
// };

// slider(index);

const carousel = document.querySelectorAll('.painting__cards');

let isDragging = false,
  startX,
  startScrollLeft;

const dragStart = (e, el) => {
  isDragging = true;
  el.classList.add('dragging');
  startX = e.pageX;
  startScrollLeft = el.scrollLeft;
};

const dragging = (e, el) => {
  if (!isDragging) return;
  e.preventDefault();
  let positionDiff = e.pageX - startX;
  el.scrollLeft = startScrollLeft - positionDiff;
};

const dragStop = (el) => {
  isDragging = false;
  el.classList.remove('dragging');
};

carousel.forEach((el) => {
  el.addEventListener('mousedown', (e) => dragStart(e, el));
  el.addEventListener('mousemove', (e) => dragging(e, el));
  el.addEventListener('mouseup', (e) => dragStop(e, el));
  el.addEventListener('mouseover', (e) => dragStop(e, el));
});
