// Dateクラスの確認
console.log(new Date());

// 今日の年・月・日の数字を取得する定数を定義
const Today = new Date();
const Year = Today.getFullYear();
const Month = Today.getMonth() + 1;
const Day = Today.getDate();

// 年・月・日の数字の出力を確認
console.log(Year);
console.log(Month);
console.log(Day);

// 年月日の形式で表示
console.log(Year + '年' + Month + '月' + Day + '日');