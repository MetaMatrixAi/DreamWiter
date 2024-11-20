import React from 'react';
import { useKeyHandler } from '../hooks/useKeyHandler';

const Editor = () => {
  const { addShortcut, removeShortcut } = useKeyHandler();

  React.useEffect(() => {
    // 注册快捷键
    addShortcut('save', {
      keys: ['Control', 's'],
      callback: (e) => {
        console.log('Document saved!');
      },
    });

    addShortcut('undo', {
      keys: ['Control', 'z'],
      callback: () => {
        console.log('Undo action triggered!');
      },
    });

    addShortcut('redo', {
      keys: ['Control', 'y'],
      callback: () => {
        console.log('Redo action triggered!');
      },
    });

    return () => {
      // 清除快捷键
      removeShortcut('save');
      removeShortcut('undo');
      removeShortcut('redo');
    };
  }, [addShortcut, removeShortcut]);

  return <textarea placeholder="Start writing..." style={{ width: '100%', height: '300px' }} />;
};

export default Editor;
