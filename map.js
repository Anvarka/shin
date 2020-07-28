document.addEventListener(
    "DOMContentLoaded",
    function () {
        var button = document.getElementById("slide1");
        button.onclick = function () {
            document.getElementById("pla").scrollLeft += 500;
        };
    },
    false
);

document.addEventListener(
    "DOMContentLoaded",
    function () {
        var button = document.getElementById("slide2");
        button.onclick = function () {
            document.getElementById("pla").scrollLeft -= 500;
        };
    },
    false
);


const slider = document.querySelector('.card');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', () => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mousemove', (e) => {
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 3; //scroll-fast
  slider.scrollLeft = scrollLeft - walk;
  console.log(walk);
});