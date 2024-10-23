import React from 'react';
import commonStyles from './Notebooks.module.css';
import { useNotebookNames } from '../hooks/useNotebooks.tsx';

export const ManageNotebooksModal = () => {
  const [manageNotebooksModalOpen, setManageNotebooksModalOpen] =
    React.useState(false);
  const { notebookNames, setNotebookNames } = useNotebookNames();
  return (
    <>
      <ul className={commonStyles.noListStyle}>
        <li>
          <button
            onClick={() => {
              setManageNotebooksModalOpen(true);
            }}
            className={`${commonStyles.listItem} ${commonStyles.separateItem}`}
          >
            Manage Notebooks
          </button>
        </li>
      </ul>
      {manageNotebooksModalOpen && (
        <div className={commonStyles.modal}>
          <div className={commonStyles.modalContent}>
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
