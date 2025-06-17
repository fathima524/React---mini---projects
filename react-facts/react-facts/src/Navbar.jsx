import React from 'react';
import logo from './assets/logo.png';

function Navbar() {
  return (
    <nav style={styles.nav}>
      <div style={styles.container}>
        <div style={styles.brand}>
          <img src={logo} alt="React Logo" style={styles.logo} />
          <div style={styles.textGroup}>
            <h1 style={styles.title}>ReactFacts</h1>
            <p style={styles.subtitle}>React + React DOM</p>
          </div>
        </div>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    backgroundColor: '#21222A',
    borderBottom: '1px solid #2D2E36',
    position: 'sticky',
    top: 0,
    zIndex: 100,
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 24px',
  },
  brand: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    padding: '20px 0',
  },
  logo: {
    width: '42px',
    height: '42px',
    borderRadius: '10px',
    objectFit: 'contain',
    padding: '4px',
    backgroundColor: 'rgba(97, 218, 251, 0.1)',
    border: '2px solid #61DAFB',
    boxShadow: '0 4px 12px rgba(97, 218, 251, 0.2)',
  },
  textGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2px',
  },
  title: {
    margin: 0,
    fontSize: '22px',
    fontWeight: '700',
    color: '#FFFFFF',
    letterSpacing: '-0.5px',
  },
  subtitle: {
    margin: 0,
    fontSize: '14px',
    color: '#8B949E',
    fontWeight: '400',
  },
};

export default Navbar;