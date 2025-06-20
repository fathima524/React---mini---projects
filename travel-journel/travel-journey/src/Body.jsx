function Body(props) {
  const styles = {
    card: {
      display: 'flex',
      gap: '24px',
      background: 'linear-gradient(90deg, #2C3E50, #4CA1AF)',
      padding: '24px',
      borderRadius: '16px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
      maxWidth: '900px',
      margin: '20px auto',
      color: '#FFFFFF',
      fontFamily: 'Inter, sans-serif',
    },
    image: {
      width: '300px',
      borderRadius: '12px',
      objectFit: 'cover',
    },
    content: {
      flex: 1,
    }
  };

  return (
    <div style={styles.card}>
      <img src={props.img} alt={props.alt} style={styles.image} />
      <div style={styles.content}>
        <h1>{props.h1}</h1>
        <h3>{props.date}</h3>
        <p>{props.p}</p>
      </div>
    </div>
  );
}

export default Body;
