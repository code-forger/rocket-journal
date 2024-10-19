import React from 'react';
import styles from './Notebooks.module.css';
import { useNotebookNames } from '../hooks/useNotebooks.tsx';

export const ManageNotebooksModal = () => {
  const [manageNotebooksModalOpen, setManageNotebooksModalOpen] =
    React.useState(false);
  const { notebookNames, setNotebookNames } = useNotebookNames();
  return (
    <>
      <li>
        <button
          onClick={() => {
            setManageNotebooksModalOpen(true);
          }}
          className={`${styles.listItem} ${styles.separateItem}`}
        >
          Manage Notebooks
        </button>
      </li>
      {manageNotebooksModalOpen && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h2>Manage Notebooks</h2>
            <ul>
              {notebookNames.map((name) => (
                <li key={name}>
                  <button
                    onClick={() => {
                      setNotebookNames(
                        notebookNames.filter((nextName) => nextName !== name),
                      );
                    }}
                  >
                    Delete {name}
                  </button>
                </li>
              ))}
            </ul>
            <button
              onClick={() => {
                setManageNotebooksModalOpen(false);
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};
