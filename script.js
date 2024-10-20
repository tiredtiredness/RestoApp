const closeButtonNode = document.getElementById('bubble-close');

const bannerNode = document.querySelector('.bubble');

closeButtonNode.addEventListener('click', () => {
  bannerNode.style.display = 'none';
  console.log(bannerNode.style.height);
});
