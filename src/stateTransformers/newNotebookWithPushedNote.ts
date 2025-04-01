import { type Notebook, Status } from '../definitions.ts';
import type { NotebookState } from '../hooks/useNotebook.tsx';

export const newNotebookWithPushedNote =
  ({
    currentDate,
    currentDateString,
    noteId,
    notebook,
    setNotebook,
  }: {
    currentDate: Date;
    currentDateString: string;
    notebook: Notebook;
    noteId: number;
    setNotebook: NotebookState['setNotebook'];
  }) =>
  () => {
    const [nextDateString] = new Date(
      new Date(currentDate).setDate(currentDate.getDate() + 7),
    )
      .toLocaleString()
      .split(',');
    const note = notebook[currentDateString]?.notes[noteId];

    if (!note) {
      throw new Error(
        'Trying to copy a note that does not exist, since the user just clicked on the note, this should not happen',
      );
    }

    setNotebook({
      ...notebook,
      [currentDateString]: {
        notes:
          notebook[currentDateString]?.notes.map((nextNotes, id) =>
            id === noteId ? { ...nextNotes, status: Status.pushed } : nextNotes,
          ) ?? [],
      },
      [nextDateString]: {
        notes: [
          ...(notebook[nextDateString]?.notes ?? []),
          // Clear status and num from note by keeping only text.
          { status: Status.active, text: note.text },
        ],
      },
    });
  };
