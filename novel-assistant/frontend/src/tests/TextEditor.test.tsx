import { render, fireEvent } from '@testing-library/react';
import TextEditor from '../components/TextEditor';

describe('TextEditor Component', () => {
  it('should update cursor position on mouse click', () => {
    const { getByText } = render(<TextEditor />);
    const editor = getByText('Start typing here...');

    fireEvent.mouseUp(editor);
    expect(window.getSelection()?.rangeCount).toBe(1);
  });

  it('should handle Shift + Arrow key to extend selection', () => {
    const { getByText } = render(<TextEditor />);
    const editor = getByText('Start typing here...');

    editor.textContent = 'Test content';
    fireEvent.keyDown(editor, { key: 'ArrowRight', shiftKey: true });
    const selection = window.getSelection();
    expect(selection?.getRangeAt(0).toString()).toBe('T');
  });

  it('should move cursor with Arrow keys', () => {
    const { getByText } = render(<TextEditor />);
    const editor = getByText('Start typing here...');

    editor.textContent = 'Test';
    fireEvent.keyDown(editor, { key: 'ArrowRight' });
    expect(window.getSelection()?.focusOffset).toBe(1);
  });
});
