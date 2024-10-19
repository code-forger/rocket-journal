import React, { type Dispatch, type SetStateAction } from 'react';
import { useNotebookNames } from '../hooks/useNotebooks.tsx';

export const NewNotebookForm = ({
  setNewNotebookModalOpen,
}: {
  setNewNotebookModalOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const { notebookNames, setNotebookNames } = useNotebookNames();
  const [newNotebookName, setNewNotebookName] = React.useState('');
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setNotebookNames([...notebookNames, newNotebookName]);
        setNewNotebookModalOpen(false);
      }}
    >
      <label htmlFor="newNotebookInput">Notebook Name:</label>
      <div className="formBody">
        <input
          id="newNotebookInput"
          type="text"
          value={newNotebookName}
          onChange={(event) => {
            setNewNotebookName(event.target.value);
          }}
        />
        <button type="submit">Create Notebook</button>
        <button
          type="button"
          onClick={() => {
            setNewNotebookModalOpen(false);
          }}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};
