import {
  type NotebookState,
  useNotebookStorage,
} from '../hooks/useNotebook.tsx';
import React, { useEffect } from 'react';
import { DateNavigation } from './DateNavigation.tsx';
import { NewNotePostIt } from './NewNotePostIt.tsx';
import type { Notebook as NotebookType } from '../definitions.ts';
import { NotesList } from './NotesList.tsx';
import { Paper } from './Paper.tsx';
import styles from './Notebook.module.css';

const useInitializeNotebook = (
  notebook: NotebookType,
  currentDateString: string,
  setNotebook: NotebookState['setNotebook'],
) => {
  useEffect(() => {
    if (notebook[currentDateString]?.notes === undefined) {
      setNotebook({
        ...notebook,
        [currentDateString]: { notes: [] },
      });
    }
  }, [notebook[currentDateString]]);
};

const getPreviousMonday = (): Date => {
  const date = new Date();
  const day = date.getDay();
  const diff = day === 0 ? -6 : 1 - day;
  const previousMonday = new Date(date);
  previousMonday.setDate(date.getDate() + diff);
  return previousMonday;
};

export const Notebook = (props: { notebookName: string }) => {
  const { notebook, setNotebook } = useNotebookStorage(props.notebookName);
  const [currentDate, setCurrentDate] =
    React.useState<Date>(getPreviousMonday());
  const [currentDateString, setCurrentDateString] = React.useState<string>(
    currentDate.toLocaleString().split(',')[0],
  );
  useInitializeNotebook(notebook, currentDateString, setNotebook);

  if (!(currentDateString in notebook)) {
    return <p>Initializing notebook</p>;
  }

  return (
    <>
      <Paper context={true} />
      <div className={styles.notebook}>
        <DateNavigation
          currentDate={currentDate}
          setCurrentDate={setCurrentDate}
          setCurrentDateString={setCurrentDateString}
        />
        <span className={styles.container}>
          <NotesList
            currentDate={currentDate}
            currentDateString={currentDateString}
            notebook={notebook}
            setNotebook={setNotebook}
          />
        </span>
        <span className={styles.container}>
          <NewNotePostIt
            notebook={notebook}
            setNotebook={setNotebook}
            currentDateString={currentDateString}
          />
        </span>
      </div>
    </>
  );
};
