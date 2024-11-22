import { useEffect } from 'react';

type KeyAction = {
  keys: string[]; // 快捷键组合，例如 ['Control', 's']
  callback: (event: KeyboardEvent) => void;
};

type KeyConfig = Record<string, KeyAction>;

const keyConfig: KeyConfig = {};

export const useKeyHandler = () => {
  const addShortcut = (id: string, action: KeyAction) => {
    // 检测冲突
    if (keyConfig[id]) {
      console.warn(`Shortcut with ID "${id}" is already defined.`);
    }
    keyConfig[id] = action;
  };

  const removeShortcut = (id: string) => {
    delete keyConfig[id];
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    Object.values(keyConfig).forEach((action) => {
      const pressedKeys = new Set(action.keys);
      if (pressedKeys.has(event.key)) {
        event.preventDefault();
        action.callback(event);
      }
    });
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return { addShortcut, removeShortcut };
};
