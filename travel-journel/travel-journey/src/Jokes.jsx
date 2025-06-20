import React from "react";

const styles = {
  jokeCard: {
    background: 'linear-gradient(90deg, #FFDEE9, #B5FFFC)',
    padding: '16px',
    margin: '16px auto',
    maxWidth: '600px',
    borderRadius: '12px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
  },
  setup: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '8px',
    color: '#333',
  },
  punchline: {
    fontSize: '18px',
    color: '#555',
  }
};

function Jokes(props) {
  return (
    <div style={styles.jokeCard}>
      <h1 style={styles.setup}>Setup: {props.setup}</h1>
      <h2 style={styles.punchline}>Punchline: {props.punchline}</h2>
    </div>
  );
}

export default Jokes;
