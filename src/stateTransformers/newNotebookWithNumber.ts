import type { Notebook } from '../definitions.ts';
import type { NotebookState } from '../hooks/useNotebook.tsx';
import { getHighestNumber } from '../stateUtils/getHighestNumber.ts';

export const newNotebookWithNumber =
  ({
    currentDateString,
    noteId,
    notebook,
    setNotebook,
  }: {
    currentDateString: string;
    noteId: number;
    notebook: Notebook;
    setNotebook: NotebookState['setNotebook'];
  }) =>
  () => {
    setNotebook({
      ...notebook,
      [currentDateString]: {
        notes:
          notebook[currentDateString]?.notes.map((nextNotes, id) =>
            id === noteId
              ? {
                  ...nextNotes,
                  num: getHighestNumber(notebook, currentDateString) + 1,
                }
              : nextNotes,
          ) ?? [],
      },
    });
  };
