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

  // div　タグの子要素に各要素を設定する
  div.appendChild(li);
  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
