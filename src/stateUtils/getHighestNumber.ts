import type { Notebook } from '../definitions.ts';

export const getHighestNumber = (
  notebook: Notebook,
  currentDateString: string,
) => {
  const notes = notebook[currentDateString]?.notes ?? [];
  return notes.reduce(
    (acc, note) => (note.num && note.num > acc ? note.num : acc),
    0,
  );
};
