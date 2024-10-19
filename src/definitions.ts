export type NotebookName = string;
export type NotebookNames = NotebookName[];

export enum Status {
  active = 'a',
  complete = 'c',
  pushed = 'p',
  paused = 'u',
  arrow = 'arrow',
}

export type Note = {
  text: string;
  status: Status;
};

export type Notebook = Record<
  string,
  | {
      notes: Note[];
    }
  | undefined
>;
