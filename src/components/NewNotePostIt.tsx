import { type Notebook, Status } from '../definitions.ts';
import type { NotebookState } from '../hooks/useNotebook.tsx';
import React from 'react';
import styles from './NewNotePostIt.module.css';

export const NewNotePostIt = ({
  setNotebook,
  notebook,
  currentDateString,
}: {
  setNotebook: NotebookState['setNotebook'];
  notebook: Notebook;
  currentDateString: string;
}) => {
  const [newNote, setNewNote] = React.useState('');

  return (
    <form
      className={styles.form}
      onSubmit={(event) => {
        event.preventDefault();
        setNotebook({
          ...notebook,
          [currentDateString]: {
            notes: [
              ...(notebook[currentDateString]?.notes ?? []),
              { status: Status.active, text: newNote },
            ],
          },
        });
        setNewNote(() => '');
      }}
    >
      <label htmlFor="noteInput">Add new item:</label>
      <input
        id="noteInput"
        type="text"
        value={newNote}
        onChange={(event) => {
          setNewNote(event.target.value);
        }}
        placeholder={'Item name'}
      />
      <button type="submit">Add Item</button>
    </form>
  );
};
