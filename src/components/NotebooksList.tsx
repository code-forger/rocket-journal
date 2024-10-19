import React, { type Dispatch, type SetStateAction } from 'react';
import styles from './Notebooks.module.css';
import { useNotebookNames } from '../hooks/useNotebooks.tsx';

export const NotebooksList = ({
  setNotebookName,
  notebookName,
}: {
  setNotebookName: Dispatch<SetStateAction<string>>;
  notebookName: string;
}) => {
  const { notebookNames } = useNotebookNames();
  return (
    <ul>
      {notebookNames.map((name) => (
        <li key={name}>
          <button
            onClick={() => {
              setNotebookName(name);
            }}
            className={`${styles.listItem} ${
              name === notebookName ? styles.selected : ''
            }`}
          >
            {name}
            {name === notebookName && <span className={styles.arrow}></span>}
          </button>
        </li>
      ))}
    </ul>
  );
};
