// src/components/Content3.jsx
//server.jsとnpm どちらも立ち上げる！！！
import React, { useState } from "react";

function Content3() {
  // const [userInput, setUserInput] = useState("");
  const [userInput1,setUserInput1] = useState("");
  const [userInput2,setUserInput2] = useState("");
  const [userInput3,setUserInput3] = useState("");
  const [advice, setAdvice] = useState("");

  const generateAdvice = async () => {
    try {
      //URLのドメインは本番環境では必要なし
      // const response = await fetch("http://localhost:3000/api/openai", {
      const response = await fetch("/api/openai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Basic bWl0b3VqcjpiTTlSeXFyNA==", // headersのAuthorizationはBasic認証を外す時必要なし
        },
        body: JSON.stringify({
          prompt: `${userInput1}と${userInput2}と${userInput3}について作成する作文のためのPREP+のフレームワークで構成し、const answer=[];の形式で値のみ配列を記載してください。配列のコード以外の文章やアドバイスは省いてください。`,
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      const generatedAnswer =
        data.choices[0]?.message?.content || "No advice generated";
      setAdvice(generatedAnswer);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <h2>段落の組み立て</h2>
      <form>
        <div className="field">
          <label className="label">作文に書きたい項目を教えてね:</label>
          {/* <div className="control">
            <textarea
              className="textarea"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              rows={5}
            ></textarea>
          </div> */}
        </div>

        <div className="field">
          <label className="label">書きたいこと １</label>
          <div className="control">
            <input className="input" type="text" name="priority1" value={userInput1} onChange={(e) => setUserInput1(e.target.value)} required />
          </div>
        </div>

        <div className="field">
          <label className="label">書きたいこと ２</label>
          <div className="control">
            <input className="input" type="text" name="priority2" value={userInput2} onChange={(e) => setUserInput2(e.target.value)} required />
          </div>
        </div>

        <div className="field">
          <label className="label">書きたいこと ３</label>
          <div className="control">
            <input className="input" type="text" name="priority3" value={userInput3} onChange={(e) => setUserInput3(e.target.value)} required />
          </div>
        </div>

        <div className="field">
          <div className="control">
            <button className="button is-primary" onClick={generateAdvice}>
              アドバイスをお願いする
            </button>
          </div>
        </div>
      </form>
      {advice && (
        <div className="notification is-success">
          <strong>回答:</strong> {advice}
        </div>
      )}
    </div>
  );
}

export default Content3;
