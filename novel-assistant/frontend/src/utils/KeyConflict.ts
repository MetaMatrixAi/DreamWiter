export const isConflict = (key1: string[], key2: string[]): boolean => {
    return key1.sort().join('+') === key2.sort().join('+');
  };
  