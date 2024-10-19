import { Notebook } from './Notebook.tsx';
import { Notebooks } from './Notebooks.tsx';
import React from 'react';
import styles from './MainView.module.css';
import { useNotebookNames } from '../hooks/useNotebooks.tsx';

export const MainView = () => {
  const { notebookNames } = useNotebookNames();
    const [notebookName, setNotebookName] = React.useState(notebookNames[0]);
  return (
    <div className={styles.mainView}>
      <Notebooks
        notebookName={notebookName}
        setNotebookName={setNotebookName}
      />
      <Notebook key={notebookName} notebookName={notebookName} />
    </div>
  );
};
