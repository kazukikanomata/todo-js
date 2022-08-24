import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  // 追加ボタンで初期化
  document.getElementById("add-text").value = "";

  // div　セイセイ
  const div = document.createElement("div");
  div.className = "list-row";

  // li タグセイセイ
  const li = document.createElement("li");
  li.innerText = inputText;

  // buttonタグの作成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 押された完了ボタンの親タグを未完了リストから削除
    deleteFromIncompleteList(completeButton.parentNode);
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグを未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  // div　タグの子要素に各要素を設定する
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

// function を作成して見栄えをよくする
// 未完了リストから指定の要素を削除
// 対象を受け取って未完了リストから削除する
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
