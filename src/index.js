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
    alert("完了");
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    alert("削除");
  });

  // div　タグの子要素に各要素を設定する
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
