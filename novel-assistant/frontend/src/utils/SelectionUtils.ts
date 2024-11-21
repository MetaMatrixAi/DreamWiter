// 获取选区范围
export const getSelectionRange = (element: HTMLElement) => {
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) return null;
  
    const range = selection.getRangeAt(0);
    const start = range.startOffset;
    const end = range.endOffset;
  
    return { start, end };
  };
  
  // 设置光标位置
  export const setCursorPosition = (element: HTMLElement, position: number) => {
    const range = document.createRange();
    const selection = window.getSelection();
  
    if (element.firstChild) {
      range.setStart(element.firstChild, position);
      range.collapse(true);
  
      if (selection) {
        selection.removeAllRanges();
        selection.addRange(range);
      }
    }
  };
  