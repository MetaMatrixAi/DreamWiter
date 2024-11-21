import React from 'react';
import TextEditor from './components/TextEditor'; // 确保路径正确

const App = () => {
  return (
    <div style={styles.appContainer}>
      <header style={styles.header}>
        <h1>Welcome to Novel Assistant!</h1>
      </header>
      <main style={styles.main}>
        <TextEditor />
      </main>
    </div>
  );
};

const styles = {
  appContainer: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f2f5',
  },
  header: {
    textAlign: 'center' as const,
    marginBottom: '20px',
  },
  main: {
    width: '80%',
    maxWidth: '800px',
    height: 'auto',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#ffffff',
    padding: '20px',
  },
};

export default App;
