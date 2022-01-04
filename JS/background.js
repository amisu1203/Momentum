const images = ['0.jpg', '1.jpg', '2.jpg'];
const bgImg = document.createElement('img');
bgImg.className = 'img-background';

bgImg.src = `img/${Math.floor(Math.random() * images.length)}.jpg`;
main.append(bgImg);
