// AdviceGenerator.tsx (or AdviceGenerator.jsx)

import React, { useState } from 'react';

function AdviceGenerator() {
  const [userInput, setUserInput] = useState('');
  const [advice, setAdvice] = useState('');

  const generateAdvice = async () => {
    try {
      const response = await fetch('/api/openai', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [{ role: 'system', content: 'You: ' + userInput }],
          temperature: 0.7,
          max_tokens: 150,
          top_p: 1.0
        })
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setAdvice(data.choices[0].text.trim());
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <section className="section">
      <div className="container">
        <h2>Advice Generator</h2>
        <div className="field">
          <label className="label">Enter your input:</label>
          <div className="control">
            <textarea
              className="textarea"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              rows={5}
              cols={50}
            ></textarea>
          </div>
        </div>
        <div className="field">
          <div className="control">
            <button className="button is-primary" onClick={generateAdvice}>Generate Advice</button>
          </div>
        </div>
        {advice && (
          <div className="notification is-success">
            <strong>Generated Advice:</strong> {advice}
          </div>
        )}
      </div>
    </section>
  );
}

export default AdviceGenerator;
