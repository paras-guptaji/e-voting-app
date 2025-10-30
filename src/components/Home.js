import React, { useState } from "react";

export default function Home() {
  const [selected, setSelected] = useState(null);
  const [voted, setVoted] = useState(false);

  const candidates = ["Alice", "Bob", "Charlie"];

  const handleVote = () => {
    if (!selected) {
      alert("Please select a candidate!");
      return;
    }
    setVoted(true);
    // In a real app, you'd record this vote.
    // For this demo, we just show a message.
    alert(`You voted for ${selected}!`);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>E-Voting DApp (Demo)</h2>
      {!voted ? (
        <div>
          <h3>Select your candidate:</h3>
          {candidates.map((c, i) => (
            <div key={i}>
              <input
                type="radio"
                name="vote"
                value={c}
                onChange={() => setSelected(c)}
              />
              <label style={{ marginLeft: "5px" }}>{c}</label>
            </div>
          ))}
          <button onClick={handleVote} style={{ marginTop: "20px" }}>
            Submit Vote
          </button>
        </div>
      ) : (
        <h3>✅ Thank you for voting!</h3>
      )}
    </div>
  );
}
