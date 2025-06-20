import globe from './assets/globe.png';

function Header() {
  return (
    <header style={styles.header}>
      <div style={styles.container}>
        <img src={globe} alt="Globe" style={styles.image} />
        <h1 style={styles.title}>Travel Journal</h1>
      </div>
    </header>
  );
}

const styles = {
  header: {
    background: 'linear-gradient(90deg, #2C3E50, #4CA1AF)',
    padding: '16px 0',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
    borderRadius: '0 0 16px 16px',
  },
  container: {
    maxWidth: '960px',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '12px',
    padding: '0 20px',
  },
  image: {
    width: '32px',
    height: '32px',
    filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2))',
  },
  title: {
    color: '#FFFFFF',
    fontFamily: 'Inter, sans-serif',
    fontWeight: 600,
    fontSize: '20px',
    letterSpacing: '0.5px',
    margin: 0,
    textTransform: 'uppercase',
  },
};

export default Header;
