/*
This is your site JavaScript code - you can add interactivity and carry out processing
- Initially the JS writes a message to the console, and moves a button you can add from the README
*/

// Print a message in the browser's dev tools console each time the page loads
console.log("Hello 🌎");

/* 
Increment a counter or decrement it
Save count in session storage
*/

var counter;

function inc() {
  counter.innerHTML = parseInt(counter.innerHTML) + 1;
}

function dec() {
  if (parseInt(counter.innerHTML) > 0)
    counter.innerHTML = parseInt(counter.innerHTML) - 1;
}

counter = document.getElementById("counter");

function incToo(event) {
  event.preventDefault(); // デフォルトのリンク動作をキャンセル

  let count = Number(sessionStorage.getItem("count")); // sessionStorage から count を取得
  if (isNaN(count) || count === null) {
    count = 0; // 初期化
  }
  count++; // インクリメント
  sessionStorage.setItem("count", count); // sessionStorage に保存

  navigateToNextPage(); // 次のページに移動
}

function decToo(event) {
  event.preventDefault(); // デフォルトのリンク動作をキャンセル

  let count = Number(sessionStorage.getItem("count")); // sessionStorage から count を取得
  if (isNaN(count) || count === null) {
    count = 0; // 初期化
  }
  count--; // デクリメント
  sessionStorage.setItem("count", count); // sessionStorage に保存

  navigateToNextPage(); // 次のページに移動
}

// ページ遷移を管理する共通関数
function navigateToNextPage() {
  // 現在のページのファイル名を取得
  const currentPage = window.location.pathname.split("/").pop();

  // 次のページを設定
  const nextPages = {
    "q1.html": "q2.html",
    "q2.html": "q3.html",
    "q3.html": "q4.html",
    "q4.html": "q5.html",
    "q5.html": "q6.html",
    "q6.html": "results.html" // 最終ページから結果ページへ
  };

  const nextPage = nextPages[currentPage];

  // 次のページへ遷移
  if (nextPage) {
    setTimeout(() => {
      window.location = nextPage;
    }, 200); // 0.2秒後に遷移
  }
}

/*
MODIFY HOW MANY POINTS ARE REQUIRED IN THE FUNCTIONS BELOW
TO DETERMINE WHICH RESULT PAGE THE QUIZ TAKER SHOULD GO TO 
*/

function showResults() {
  let count = Number(sessionStorage.getItem("count"));
  console.log("Current count value: ", count); // count の値を確認
  if (count > 4) {
    window.location = "yes.html"; // Yesが多い
  } else if (count > 2) {
    window.location = "maybe.html"; // 中間
  } else {
    window.location = "no.html"; // Noが多い
  }
}

function resetQuiz() {
  sessionStorage.clear(); // sessionStorage をクリア
  window.location = "index.html"; // 最初のページに戻る
}
