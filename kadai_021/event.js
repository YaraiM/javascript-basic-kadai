// h2要素とbutton要素を取得して定数に代入
const btn = document.getElementById('btn');
const text = document.getElementById('text');

// ボタンクリックして2秒後にテキストの書き換え
btn.addEventListener('click', () => {
  setTimeout(() => {
    text.textContent = 'ボタンをクリックしました';
 }, 2000);
});