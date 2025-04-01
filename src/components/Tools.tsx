import { type Notebook, Status } from '../definitions.ts';
import { Icon } from './Icon.tsx';
import type { NotebookState } from '../hooks/useNotebook.tsx';
import React from 'react';
import { getHighestNumber } from '../stateUtils/getHighestNumber.ts';
import styles from './Tools.module.css';
import { useStateTransformers } from '../hooks/useStateTransformers.ts';
import { getNotesNumber } from '../stateUtils/getNotesNumber.ts';

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
  const { setStatus, setNumber, pushNote } = useStateTransformers({
    currentDate,
    currentDateString,
    noteId,
    notebook,
    setNotebook,
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
        onClick={pushNote()}
        className={styles.pushed}
      />
      <Icon
        status={Status.paused}
        onClick={setStatus(Status.paused)}
        className={styles.paused}
      />
      {getNotesNumber(notebook, currentDateString, noteId) === -1 && (
        <Icon
          status={Status.number}
          onClick={setNumber()}
          className={styles.number}
        />
      )}
    </div>
  );
};
