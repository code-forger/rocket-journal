import type { Notebook, Status } from '../definitions.ts';
import { newNotebookWithNumber } from '../stateTransformers/newNotebookWithNumber.ts';
import { newNotebookWithPushedNote } from '../stateTransformers/newNotebookWithPushedNote.ts';
import { newNotebookWithStatus } from '../stateTransformers/newNotebookWithStatus.ts';

export const useStateTransformers = ({
  currentDateString,
  noteId,
  notebook,
  setNotebook,
  currentDate,
}: {
  currentDate: Date;
  currentDateString: string;
  noteId: number;
  notebook: Notebook;
  setNotebook: (nextNotebook: Notebook) => void;
}) => {
  const setStatus = (status: Status) =>
    newNotebookWithStatus({
      currentDateString,
      noteId,
      notebook,
      setNotebook,
      status,
    });
  const setNumber = () =>
    newNotebookWithNumber({
      currentDateString,
      noteId,
      notebook,
      setNotebook,
    });
  const pushNote = () =>
    newNotebookWithPushedNote({
      currentDate,
      currentDateString,
      noteId,
      notebook,
      setNotebook,
    });
  return { pushNote, setNumber, setStatus };
};
