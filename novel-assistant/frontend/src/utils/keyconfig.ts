type Shortcut = {
    id: string;
    keys: string[];
  };
  
  const shortcuts: Shortcut[] = [];
  
  export const registerShortcut = (id: string, keys: string[]) => {
    if (shortcuts.find((s) => s.id === id)) {
      throw new Error(`Shortcut "${id}" already exists.`);
    }
    shortcuts.push({ id, keys });
  };
  
  export const unregisterShortcut = (id: string) => {
    const index = shortcuts.findIndex((s) => s.id === id);
    if (index !== -1) {
      shortcuts.splice(index, 1);
    }
  };
  
  export const getShortcuts = () => [...shortcuts];
  