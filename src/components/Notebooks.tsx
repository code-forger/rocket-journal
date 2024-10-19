import React, { type Dispatch, type SetStateAction } from 'react';
import { ManageNotebooksModal } from './ManageNotebooksModal.tsx';
import { NewNotebookModal } from './NewNotebookModal.tsx';
import { NotebooksList } from './NotebooksList.tsx';
import styles from './Notebooks.module.css';
import { useMenuOpen } from '../hooks/useMenuOpen.tsx';

export const Notebooks = ({
  setNotebookName,
  notebookName,
}: {
  setNotebookName: Dispatch<SetStateAction<string>>;
  notebookName: string;
}) => {
  const { menuOpen } = useMenuOpen();
  return (
    <div
      className={`${styles.notebooks} ${menuOpen ? styles.notebooksOpen : ''}`}
    >
      <p>Notebooks:</p>
      <NotebooksList
        notebookName={notebookName}
        setNotebookName={setNotebookName}
      />
      <NewNotebookModal />
      <ManageNotebooksModal />
    </div>
  );
};
