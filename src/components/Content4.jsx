// src/components/Content4.jsx
//server.jsとnpm どちらも立ち上げる！！！
import React, { useState } from "react";

function Content4() {
  const [userInput, setUserInput] = useState("");
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
          prompt: `${userInput}という人物の性格を10パターン用意してください。`,
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
      <h2>登場人物の性格を表す言葉</h2>
      <form>
        <div className="field">
          <label className="label">作文に書きたい項目を教えてね:</label>
          <div className="control">
            <input
              className="input"
              type="text"
              name="priority"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              required
            />
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

export default Content4;
