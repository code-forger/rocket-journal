import type { Notebook } from '../definitions.ts';

export const getNotesNumber = (
  notebook: Notebook,
  currentDateString: string,
  index: number,
) => {
  const notes = notebook[currentDateString]?.notes ?? [];
  return notes.find((_, ind) => ind === index)?.num ?? -1;
};
