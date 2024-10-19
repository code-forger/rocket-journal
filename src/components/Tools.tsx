import { type Notebook, Status } from '../definitions.ts';
import { Icon } from './Icon.tsx';
import type { NotebookState } from '../hooks/useNotebook.tsx';
import React from 'react';
import styles from './Tools.module.css';

const newNotebookWithStatus =
  ({
    currentDateString,
    noteId,
    notebook,
    setNotebook,
    status,
  }: {
    currentDateString: string;
    noteId: number;
    notebook: Notebook;
    setNotebook: NotebookState['setNotebook'];
    status: Status;
  }) =>
  () => {
    setNotebook({
      ...notebook,
      [currentDateString]: {
        notes:
          notebook[currentDateString]?.notes.map((nextNotes, id) =>
            id === noteId ? { ...nextNotes, status } : nextNotes,
          ) ?? [],
      },
    });
  };

const newNotebookWithPushedNote =
  ({
    currentDate,
    currentDateString,
    noteId,
    notebook,
    setNotebook,
  }: {
    currentDate: Date;
    currentDateString: string;
    notebook: Notebook;
    noteId: number;
    setNotebook: NotebookState['setNotebook'];
  }) =>
  () => {
    const [nextDateString] = new Date(
      new Date(currentDate).setDate(currentDate.getDate() + 1),
    )
      .toLocaleString()
      .split(',');
    const note = notebook[currentDateString]?.notes[noteId];

    if (!note) {
      throw new Error(
        'Trying to copy a note that does not exist, since the user just clicked on the note, this should not happen',
      );
    }

    setNotebook({
      ...notebook,
      [currentDateString]: {
        notes:
          notebook[currentDateString]?.notes.map((nextNotes, id) =>
            id === noteId ? { ...nextNotes, status: Status.pushed } : nextNotes,
          ) ?? [],
      },
      [nextDateString]: {
        notes: [...(notebook[nextDateString]?.notes ?? []), note],
      },
    });
  };

export const Tools = ({
  noteId,
  className,
  setNotebook,
  notebook,
  currentDateString,
  currentDate,
}: {
  noteId: number;
  className: string;
  setNotebook: NotebookState['setNotebook'];
  notebook: Notebook;
  currentDateString: string;
  currentDate: Date;
}) => {
  const setStatus = (status: Status) =>
    newNotebookWithStatus({
      currentDateString,
      noteId,
      notebook,
      setNotebook,
      status,
    });

  return (
    <div className={`${styles.tools} ${className}`}>
      <Icon
        status={Status.complete}
        onClick={setStatus(Status.complete)}
        className={styles.complete}
      />
      <Icon
        status={Status.pushed}
        onClick={newNotebookWithPushedNote({
          currentDate,
          currentDateString,
          noteId,
          notebook,
          setNotebook,
        })}
        className={styles.pushed}
      />
      <Icon
        status={Status.paused}
        onClick={setStatus(Status.paused)}
        className={styles.paused}
      />
    </div>
  );
};
