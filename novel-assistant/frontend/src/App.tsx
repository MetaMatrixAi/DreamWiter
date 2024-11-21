import React from 'react';
import './App.css'; // 引入全局样式
import Home from './pages/Home'; // 确保路径正确

const App = () => {
  return (
    <div className="app-container">
      <Home />
    </div>
  );
};

export default App;
