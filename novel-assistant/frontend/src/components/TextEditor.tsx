import React, { useRef, useState, useEffect } from 'react';
import styles from '../styles/Editor.module.css';

const TextEditor = () => {
  const editorRef = useRef<HTMLDivElement>(null);
  const [content, setContent] = useState(''); // 保存内容状态

  // 富文本命令执行
  const applyCommand = (command: string) => {
    document.execCommand(command);
  };

  // 自动保存内容
  useEffect(() => {
    const saveInterval = setInterval(() => {
      if (editorRef.current) {
        setContent(editorRef.current.innerHTML);
        console.log('Content saved:', editorRef.current.innerHTML); // 模拟保存到后端
      }
    }, 2000);

    return () => clearInterval(saveInterval);
  }, []);

  // 自动滚动处理
  const handleScroll = () => {
    if (editorRef.current) {
      const selection = document.getSelection();
      if (selection && selection.rangeCount > 0) {
        const range = selection.getRangeAt(0);
        const rect = range.getBoundingClientRect();
        const editorRect = editorRef.current.getBoundingClientRect();

        // 检查是否超出编辑器的顶部或底部
        if (rect.bottom > editorRect.bottom) {
          editorRef.current.scrollTop += rect.bottom - editorRect.bottom;
        } else if (rect.top < editorRect.top) {
          editorRef.current.scrollTop -= editorRect.top - rect.top;
        }
      }
    }
  };

  return (
    <div>
      {/* 工具栏 */}
      <div className={styles.toolbar}>
        <button onClick={() => applyCommand('bold')}><b>B</b></button>
        <button onClick={() => applyCommand('italic')}><i>I</i></button>
        <button onClick={() => applyCommand('underline')}><u>U</u></button>
      </div>

      {/* 可编辑区域 */}
      <div
        ref={editorRef}
        className={styles.editor}
        contentEditable
        onMouseUp={handleScroll}
        onKeyDown={handleScroll}
        suppressContentEditableWarning
      >
        <p>Start typing here...</p>
      </div>
    </div>
  );
};

export default TextEditor;
