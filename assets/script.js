// ページが完全に読み込まれた後にすべての処理を設定
document.addEventListener('DOMContentLoaded', () => {
  // 言語切り替えボタンの処理
  document.getElementById('btn-ja').addEventListener('click', function() {
    document.getElementById('text-ja').style.display = 'block';
    document.getElementById('text-en').style.display = 'none';

    // 日本語に切り替える
    const spotLinks = document.querySelectorAll(".spot-link");
    spotLinks.forEach(link => {
      const span = link.querySelector("span");
      switch(span.innerText) {
        case 'Nature':
          span.innerText = '自然';
          break;
        case 'Play':
          span.innerText = '遊び';
          break;
        case 'Food':
          span.innerText = '食';
          break;
        case 'Accommodation':
          span.innerText = '宿泊';
          break;
        case 'Hot Springs':
          span.innerText = '温泉';
          break;
        case 'Shopping':
          span.innerText = '買い物';
          break;
      }
    });
  });

  document.getElementById('btn-en').addEventListener('click', function() {
    document.getElementById('text-ja').style.display = 'none';
    document.getElementById('text-en').style.display = 'block';

    // 英語に切り替える
    const spotLinks = document.querySelectorAll(".spot-link");
    spotLinks.forEach(link => {
      const span = link.querySelector("span");
      switch(span.innerText) {
        case '自然':
          span.innerText = 'Nature';
          break;
        case '遊び':
          span.innerText = 'Play';
          break;
        case '食':
          span.innerText = 'Food';
          break;
        case '宿泊':
          span.innerText = 'Accommodation';
          break;
        case '温泉':
          span.innerText = 'Hot Springs';
          break;
        case '買い物':
          span.innerText = 'Shopping';
          break;
      }
    });
  });

  // ハンバーガーメニュー開閉の処理
  const menuToggle = document.getElementById('menu-toggle');
  const closeBtn = document.getElementById('menu-close');
  const hamburgerMenu = document.getElementById('hamburger-menu');

  // メニューを開く
  menuToggle.addEventListener('click', () => {
    hamburgerMenu.classList.add('active');
  });

  // メニューを閉じる
  if (closeBtn) { // closeBtnが存在するかチェック
    closeBtn.addEventListener('click', () => {
      hamburgerMenu.classList.remove('active');
    });
  }

  // メニュー内リンククリック時にも閉じる
  document.querySelectorAll('.hamburger-menu a').forEach(link => {
    link.addEventListener('click', () => {
      hamburgerMenu.classList.remove('active');
    });
  });
});
