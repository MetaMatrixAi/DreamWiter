import React from 'react';
import TextEditor from '../components/TextEditor';

const Home = () => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={{
          textalign: 'center',
          width: '100%',}
        }>欢迎来到织梦机</h1>
      </header>
      <main style={styles.main}>
        <div style={styles.editorWrapper}>
          <TextEditor />
        </div>
      </main>
    </div>
  );
};

const styles = {
  container: {
    width: '100%',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#f0f2f5',
    padding: '20px',
  },
  header: {
    width: '100%',
    maxWidth: '1200px', // 限制标题的最大宽度
    textAlign: 'center' as const,
    marginBottom: '20px',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#333',
    margin: '0 auto',
    padding: '0 20px',
  },
  main: {
    width: '100%',
    maxWidth: '1200px', // 限制内容区域的最大宽度
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
  },
  editorWrapper: {
    width: '100%',
    backgroundColor: '#ffffff',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    marginTop: '20px',
  },
};

export default Home;
