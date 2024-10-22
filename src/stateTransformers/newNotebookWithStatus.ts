import type { Notebook, Status } from '../definitions.ts';
import type { NotebookState } from '../hooks/useNotebook.tsx';

export const newNotebookWithStatus =
  ({
    currentDateString,
    noteId,
    notebook,
    setNotebook,
    status,
  }: {
    currentDateString: string;
    noteId: number;
    notebook: Notebook;
    setNotebook: NotebookState['setNotebook'];
    status: Status;
  }) =>
  () => {
    setNotebook({
      ...notebook,
      [currentDateString]: {
        notes:
          notebook[currentDateString]?.notes.map((nextNotes, id) =>
            id === noteId ? { ...nextNotes, status } : nextNotes,
          ) ?? [],
      },
    });
  };
