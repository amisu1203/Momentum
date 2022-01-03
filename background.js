const images = ['0.jpg', '1.jpg', '2.jpg'];
const body = document.querySelector('body');
const bgImg = document.createElement('img');

bgImg.src = `img/${Math.floor(Math.random() * images.length)}.jpg`;
document.body.append(bgImg);