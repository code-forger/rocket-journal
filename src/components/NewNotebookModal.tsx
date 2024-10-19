import { NewNotebookForm } from './NewNotebookForm.tsx';
import React from 'react';
import commonStyles from './Notebooks.module.css';

export const NewNotebookModal = () => {
  const [newNotebookModalOpen, setNewNotebookModalOpen] = React.useState(false);
  return (
    <>
      <li>
        <button
          onClick={() => {
            setNewNotebookModalOpen(true);
          }}
          className={`${commonStyles.listItem} ${commonStyles.separateItem}`}
        >
          Create New Notebook
        </button>
      </li>
      {newNotebookModalOpen && (
        <div className={commonStyles.modal}>
          <div className={commonStyles.modalContent}>
            <h2>Create New Notebook</h2>
            <NewNotebookForm
              setNewNotebookModalOpen={setNewNotebookModalOpen}
            />
          </div>
        </div>
      )}
    </>
  );
};
