import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  // 追加ボタンで初期化
  document.getElementById("add-text").value = "";
  createIncompleteList(inputText);

  // function を作成して見栄えをよくする
  // 未完了リストから指定の要素を削除
  // 対象を受け取って未完了リストから削除する
  const deleteFromIncompleteList = (target) => {
    document.getElementById("incomplete-list").removeChild(target);
  };

  // 未完了リストｎ追加する関数
  const createIncompleteList = (text) => {
    // div　セイセイ
    const div = document.createElement("div");
    div.className = "list-row";

    // li タグセイセイ
    const li = document.createElement("li");
    li.innerText = text;

    // buttonタグの作成
    const completeButton = document.createElement("button");
    completeButton.innerText = "完了";
    completeButton.addEventListener("click", () => {
      // 押された完了ボタンの親タグを未完了リストから削除
      deleteFromIncompleteList(completeButton.parentNode);
      // 完了リストに追加する要素
      const addTarget = completeButton.parentNode;
      // リストの一個目の内側のテキストを取得する
      const text = addTarget.firstElementChild.innerText;

      // div以下を初期化する
      addTarget.textContent = null;

      // liタグをセイセイ
      const li = document.createElement("li");
      li.innerText = text;

      // buttonタグをセイセイ
      const backButton = document.createElement("button");
      backButton.innerText = "戻す";
      backButton.addEventListener("click", () => {
        // 押された戻すボタンの親divタグを完了リストから削除
        const deleteTarget = backButton.parentNode;
        document.getElementById("complete-list").removeChild(deleteTarget);

        // テキストを取得
        const text = backButton.parentNode.firstElementChild.innerText;
        createIncompleteList(text);
      });

      // divタグの要素かく
      addTarget.appendChild(li);
      addTarget.appendChild(backButton);

      // 完了リストに追加
      document.getElementById("complete-list").appendChild(addTarget);
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
};

// 未完了リストに追加する関数
const createIncompleteList = (text) => {};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
