import React, {
  type FC,
  type ReactNode,
  createContext,
  useContext,
} from 'react';
import type { NotebookNames } from '../definitions.ts';
import useLocalStorage from 'use-local-storage';

export type NotebookNamesState = {
  notebookNames: NotebookNames;
  setNotebookNames: (nextNotebookNames: NotebookNames) => void;
};

const NotebookNamesContext = createContext<NotebookNamesState>({
  notebookNames: [],
  setNotebookNames: () => {
    throw new Error(
      'default setNotebookName hit, Please use ProvideNotebookNames above the calling component',
    );
  },
});

type Props = {
  children: ReactNode;
} & NotebookNamesState;

export const ProvideNotebookNames: FC<Props> = ({
  children,
  notebookNames,
  setNotebookNames,
}) => (
  <NotebookNamesContext.Provider value={{ notebookNames, setNotebookNames }}>
    {children}
  </NotebookNamesContext.Provider>
);

export const useNotebookNamesStorage = (): NotebookNamesState => {
  const [notebookNames, setNotebookNames] = useLocalStorage<NotebookNames>(
    'notebookNames',
    [],
  );
  return { notebookNames, setNotebookNames };
};

export const useNotebookNames = (): NotebookNamesState => {
  const { notebookNames, setNotebookNames } = useContext(NotebookNamesContext);
  return { notebookNames, setNotebookNames };
};
