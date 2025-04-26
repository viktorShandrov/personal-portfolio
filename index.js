// JavaScript
const links = document.querySelectorAll('.nav-link');

links.forEach(link => {
  link.addEventListener('click', function () {
    links.forEach(l => l.classList.remove('active'));
    this.classList.add('active');
  });
});


const items = document.querySelectorAll('.carousel-item');
const track = document.querySelector('.carousel-track');
let current = 2; // center index



function updateCarousel() {
  items.forEach((item, index) => {
    item.classList.remove('active');
    item.classList.remove('clicked');
    if (index === current){
      item.classList.add('active') ;
      item.classList.add('clicked') ;
    } 
  });

  const itemWidth = items[0].offsetWidth + 30;
  track.style.transform = `translateX(calc(50% - ${(current * itemWidth) + itemWidth / 2}px))`;
}

// 👇 Click to center
items.forEach((item, index) => {
  item.addEventListener('click', () => {
    current = index;
    updateCarousel();

    item.classList.add('clicked');
    setTimeout(() => {
      item.classList.remove('clicked');
    }, 300); // match transition duration
  });
});

document.querySelector('.arrow.left').addEventListener('click', () => {
  if (current > 0) current--;
  updateCarousel();
});

document.querySelector('.arrow.right').addEventListener('click', () => {
  if (current < items.length - 1) current++;
  updateCarousel();
});

updateCarousel();


