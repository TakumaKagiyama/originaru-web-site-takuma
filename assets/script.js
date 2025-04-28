document.getElementById('btn-ja').addEventListener('click', function() {
  document.getElementById('text-ja').style.display = 'block';
  document.getElementById('text-en').style.display = 'none';
});

document.getElementById('btn-en').addEventListener('click', function() {
  document.getElementById('text-ja').style.display = 'none';
  document.getElementById('text-en').style.display = 'block';
});

const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
  if (menu.style.display === 'block') {
    menu.style.display = 'none';
  } else {
    menu.style.display = 'block';
  }
});

// メニュー内のリンクをクリックしたら閉じるようにする
const menuLinks = document.querySelectorAll('#menu a');
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    menu.style.display = 'none';
  });
});
