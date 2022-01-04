const images = ['0.jpg', '1.jpg', '2.jpg'];
// const body = document.querySelector('#quote');
const bgImg = document.createElement('img');
bgImg.className = 'img-background';

bgImg.src = `img/${Math.floor(Math.random() * images.length)}.jpg`;
// body.after(bgImg);
document.body.append(bgImg);
