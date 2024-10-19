import React, {
  type FC,
  type ReactNode,
  createContext,
  useContext,
} from 'react';
import { type Notebook } from '../definitions.ts';
import useLocalStorage from 'use-local-storage';

export type NotebookState = {
  notebook: Notebook;
  setNotebook: (nextNotebook: Notebook) => void;
};

const NotebookContext = createContext<NotebookState>({
  notebook: {},
  setNotebook: () => {
    throw new Error(
      'default setNotebook hit, Please use ProvideNotebook above the calling component',
    );
  },
});

type Props = {
  children: ReactNode;
} & NotebookState;

export const ProvideNotebook: FC<Props> = ({
  children,
  notebook,
  setNotebook,
}) => (
  <NotebookContext.Provider value={{ notebook, setNotebook }}>
    {children}
  </NotebookContext.Provider>
);

export const useNotebookStorage = (notebookName: string): NotebookState => {
  const [notebook, setNotebook] = useLocalStorage<Notebook>(
    `notebook_${notebookName}`,
    {},
  );

  return { notebook, setNotebook };
};

export const useNotebook = (): NotebookState => {
  const { notebook, setNotebook } = useContext(NotebookContext);
  return { notebook, setNotebook };
};
