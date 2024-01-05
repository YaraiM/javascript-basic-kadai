// HTMLのボタン要素を取得し、定数に代入
const btn = document.getElementById('btn');

// ボタンをクリックしたときのイベント処理を実行
btn.addEventListener('click', () => {
  // HTMLのid：text要素を取得し、定数に代入
  const text = document.getElementById('text');
  // text要素内のテキストに「ボタンをクリックしました」を代入
  text.textContent = 'ボタンをクリックしました';
});