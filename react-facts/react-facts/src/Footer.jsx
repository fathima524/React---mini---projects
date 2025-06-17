import React from "react";

function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.content}>
          <p style={styles.text}>
            © {new Date().getFullYear()} ReactFacts
          </p>
          <div style={styles.divider}>•</div>
          <p style={styles.text}>
            Built with React
          </p>
        </div>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: '#21222A',
    borderTop: '1px solid #2D2E36',
    boxShadow: '0 -2px 8px rgba(0, 0, 0, 0.15)',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 24px',
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '12px',
    padding: '24px 0',
    flexWrap: 'wrap',
  },
  text: {
    margin: 0,
    fontSize: '14px',
    color: '#8B949E',
    fontWeight: '400',
    letterSpacing: '0.2px',
  },
  divider: {
    color: '#61DAFB',
    fontSize: '12px',
    opacity: 0.6,
  },
};

export default Footer;