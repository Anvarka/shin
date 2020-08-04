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



var docWidth, docHeight, docRatio, div = document.getElementsByTagName('div')[0];

onresize = function()
{
	docWidth = document.body.clientWidth;
	docHeight = document.body.clientHeight;
	// ширина и высота вьюпорта

	docRatio = docWidth / docHeight;
	// соотношение сторон вьюпорта

	fullScreenProportionalElem(div, 1920, 1080); // элемент, ширина, высота
	resizeFont(div, 1920, 1080, 200); // элемент, ширина, высота, размер шрифта
	// размер шрифта зависит от выставленной ширины и высоты
}

function fullScreenProportionalElem(elem, width, height)
{
	var ratio = width / height;
	// соотношение сторон элемента

	if (docRatio < ratio)
	{
		elem.style.width = docWidth + 'px';
		elem.style.height = Math.round(docWidth / ratio) + 'px';
		elem.style.top = Math.round(docHeight / 2 - elem.offsetHeight / 2) + 'px';
		elem.style.left = '0px';
		// высота вьюпорта больше чем высота элемента
		// ширину элемента приравниваем к ширине вьюпорта, высоту вычисляем, центрируем элемент по высоте
	}
	else if (docRatio > ratio)
	{
		elem.style.width = Math.round(docHeight * ratio) + 'px';
		elem.style.height = docHeight + 'px';
		elem.style.top = '0px';
		elem.style.left = Math.round(docWidth / 2 - elem.offsetWidth / 2) + 'px';
		// ширина вьюпорта больше чем ширина элемента
		// высоту элемента приравниваем к высоте вьюпорта, ширину вычисляем, центрируем элемент по ширине
	}
	else
	{
		elem.style.width = docWidth + 'px';
		elem.style.height = docHeight + 'px';
		elem.style.top = '0px';
		elem.style.left = '0px';
		// соотношение сторон вьюпорта равно соотношению сторон элемента
		// приравниваем стороны элемента к сторонам вьюпорта, обнуляем значения top и left
	}
}

function resizeFont(elem, width, height, size)
{
	var ratio = width / height;
	// соотношение сторон элемента
	
	if (docRatio < ratio) elem.style.fontSize = height * size / 14062 + 'vw';
	else if (docRatio > ratio) elem.style.fontSize = width * size / 14062 + 'vh';
	// число 14062 можно менять и подстраивать под себя, будет меняться размер шрифта
}

onresize();
// вызываем функцию
