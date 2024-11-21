import React, { useRef, useEffect, useState } from 'react';
import styles from '../styles/Editor.module.css';
import { getSelectionRange, setCursorPosition } from '../utils/SelectionUtils';

const TextEditor = () => {
  const editorRef = useRef<HTMLDivElement>(null); // 编辑器的引用
  const [cursorPosition, setCursorPositionState] = useState({ start: 0, end: 0 });

  // 光标更新逻辑
  const handleMouseUp = () => {
    if (editorRef.current) {
      const selection = getSelectionRange(editorRef.current);
      if (selection) {
        setCursorPositionState({ start: selection.start, end: selection.end });
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (editorRef.current) {
      const selection = getSelectionRange(editorRef.current);

      // 扩展选区逻辑 (Shift + 方向键)
      if (e.shiftKey && (e.key === 'ArrowLeft' || e.key === 'ArrowRight')) {
        e.preventDefault();
        if (selection) {
          const offset = e.key === 'ArrowLeft' ? -1 : 1;
          setCursorPositionState({
            start: selection.start,
            end: Math.max(0, selection.end + offset),
          });
        }
      }

      // 光标跳转逻辑
      if (!e.shiftKey && (e.key === 'ArrowLeft' || e.key === 'ArrowRight')) {
        const offset = e.key === 'ArrowLeft' ? -1 : 1;
        if (selection) {
          const newPos = Math.max(0, selection.start + offset);
          setCursorPositionState({ start: newPos, end: newPos });
          setCursorPosition(editorRef.current, newPos);
        }
      }
    }
  };

  return (
    <div
      ref={editorRef}
      className={styles.editor}
      contentEditable
      onMouseUp={handleMouseUp}
      onKeyDown={handleKeyDown}
      suppressContentEditableWarning
    >
      <p>Start typing here...</p>
    </div>
  );
};

export default TextEditor;
