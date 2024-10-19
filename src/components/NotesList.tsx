import { type Notebook, Status } from '../definitions.ts';
import { Icon } from './Icon.tsx';
import type { NotebookState } from '../hooks/useNotebook.tsx';
import React from 'react';
import { Tools } from './Tools.tsx';
import styles from './NotesList.module.css';

export const NotesList = ({
  currentDate,
  currentDateString,
  notebook,
  setNotebook,
}: {
  currentDate: Date;
  currentDateString: string;
  notebook: Notebook;
  setNotebook: NotebookState['setNotebook'];
}) => (
  <div className={styles.notes}>
    {notebook[currentDateString]?.notes.map((note, id) => (
      <div key={note.text} className={styles.note}>
        {note.status === Status.active && (
          <Tools
            noteId={id}
            className={styles.hoverable}
            setNotebook={setNotebook}
            currentDateString={currentDateString}
            notebook={notebook}
            currentDate={currentDate}
          />
        )}
        <span className={styles.icon}>
          <Icon status={note.status} />
        </span>
        <p className={note.status === Status.active ? '' : styles.complete}>
          {note.text}
        </p>
      </div>
    ))}
  </div>
);
