const images = [
    "image00.jpeg",
    "image01.jpeg",
    "image02.jpeg",
    "image03.jpeg",
    "image04.jpeg",
    "image05.jpeg"
  ];
  
  const choosenImage = images[Math.floor(Math.random() * images.length)];
  const bgImage = document.createElement("img");
  bgImage.classList.add('bgImg');
  bgImage.src = `img/${choosenImage}`;
  document.body.appendChild(bgImage);