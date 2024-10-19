import React from 'react';
import styles from './CreateFirstNotebook.module.css';
import { useNotebookNames } from '../hooks/useNotebooks.tsx';

export const CreateFirstNotebook = () => {
  const { setNotebookNames } = useNotebookNames();
    const [notebookName, setNotebookName] = React.useState('');
  return (
    <div className={styles.createFirstNotebook}>
      <h1>Welcome to Rocket Journal</h1>
      <h2>A localStorage only bullet journaling app</h2>
      <div className={styles.columns}>
        <div className={styles.card}>
          <p>Quickly Journal the things you want to get done today</p>
        </div>
        <div className={styles.card}>
          <p>
            Check off items, move them to tomorrow, or pause them for the
            future.
          </p>
        </div>
        <div className={styles.card}>
          <p>
            All your data is stored right here in the browser. Nothing is sent
            over the internet.
          </p>
        </div>
      </div>
      <div className={`${styles.card} ${styles.cardLarge}`}>
        <p>You don't have any notebooks yet. Create your first one below.</p>
        <form className={styles.form}>
          <label htmlFor="createFirstNotebookInput" className={styles.label}>
            Notebook Name:
          </label>
          <input
            id="createFirstNotebookInput"
            className={styles.input}
            type="text"
            value={notebookName}
            onChange={(event) => { setNotebookName(event.target.value); }}
          />
          <button
            className={styles.button}
            onClick={() => { setNotebookNames([notebookName]); }}
            type="submit"
          >
            Create Notebook
          </button>
        </form>
      </div>
    </div>
  );
};
