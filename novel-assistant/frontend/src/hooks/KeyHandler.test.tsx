import { render, fireEvent } from '@testing-library/react';
import Editor from '../components/Editor';

describe('Editor Shortcut Tests', () => {
  it('should trigger save action on Ctrl+S', () => {
    const { getByPlaceholderText } = render(<Editor />);
    const editor = getByPlaceholderText('Start writing...');

    fireEvent.keyDown(editor, { key: 's', ctrlKey: true });
    expect(console.log).toHaveBeenCalledWith('Document saved!');
  });

  it('should trigger undo action on Ctrl+Z', () => {
    const { getByPlaceholderText } = render(<Editor />);
    const editor = getByPlaceholderText('Start writing...');

    fireEvent.keyDown(editor, { key: 'z', ctrlKey: true });
    expect(console.log).toHaveBeenCalledWith('Undo action triggered!');
  });
});
