import React from "react";
import logo from './assets/logo.png';

function Body() {
  return (
    <main style={styles.main}>
      <div style={styles.container}>
        <img src={logo} alt="React Logo Background" style={styles.backgroundLogo} />
        <div style={styles.contentCard}>
          <h2 style={styles.heading}>Fun facts about React</h2>
          <ul style={styles.factsList}>
            <li style={styles.factItem}>
              <span style={styles.bullet}>•</span>
              Was first released in 2013
            </li>
            <li style={styles.factItem}>
              <span style={styles.bullet}>•</span>
              Was originally created by Jordan Walke
            </li>
            <li style={styles.factItem}>
              <span style={styles.bullet}>•</span>
              Has well over 100K stars on GitHub
            </li>
            <li style={styles.factItem}>
              <span style={styles.bullet}>•</span>
              Is maintained by Facebook
            </li>
            <li style={styles.factItem}>
              <span style={styles.bullet}>•</span>
              Powers thousands of enterprise apps, including mobile apps
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}

const styles = {
  main: {
    flex: 1,
    backgroundColor: '#282C34',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '40px 20px',
    position: 'relative',
    minHeight: 'calc(100vh - 140px)',
  },
  container: {
    position: 'relative',
    width: '100%',
    maxWidth: '600px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundLogo: {
    position: 'absolute',
    width: '300px',
    height: '300px',
    opacity: 0.05,
    objectFit: 'contain',
    zIndex: 1,
    filter: 'grayscale(100%)',
  },
  contentCard: {
    position: 'relative',
    zIndex: 2,
    backgroundColor: 'rgba(33, 34, 42, 0.8)',
    padding: '40px',
    borderRadius: '16px',
    border: '1px solid #2D2E36',
    backdropFilter: 'blur(10px)',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
    width: '100%',
    maxWidth: '500px',
  },
  heading: {
    margin: '0 0 32px 0',
    fontSize: '28px',
    fontWeight: '700',
    color: '#61DAFB',
    textAlign: 'center',
    letterSpacing: '-0.5px',
  },
  factsList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  factItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '12px',
    fontSize: '16px',
    lineHeight: '1.6',
    color: '#E6E6E6',
    fontWeight: '400',
  },
  bullet: {
    color: '#61DAFB',
    fontSize: '20px',
    fontWeight: 'bold',
    flexShrink: 0,
    marginTop: '-2px',
  },
};

export default Body;