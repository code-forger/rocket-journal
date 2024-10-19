import { ProvideMenuOpen, useMenuOpenStorage } from '../hooks/useMenuOpen.tsx';
import {
  ProvideNotebookNames,
  useNotebookNamesStorage,
} from '../hooks/useNotebooks.tsx';
import { CreateFirstNotebook } from './CreateFirstNotebook.tsx';
import Header from './Header.tsx';
import { MainView } from './MainView.tsx';
import { Paper } from './Paper.tsx';
import React from 'react';
import styles from './App.module.css';

const App: React.FC = () => {
  const { notebookNames, setNotebookNames } = useNotebookNamesStorage();
    const menuOpenValues = useMenuOpenStorage();
  return (
    <ProvideNotebookNames
      notebookNames={notebookNames}
      setNotebookNames={setNotebookNames}
    >
      <ProvideMenuOpen {...menuOpenValues}>
        <div className={styles.container}>
          <Header />
          {notebookNames.length === 0 ? (
            <>
              <Paper />
              <CreateFirstNotebook />
            </>
          ) : (
            <>
              <MainView />
            </>
          )}
        </div>
      </ProvideMenuOpen>
    </ProvideNotebookNames>
  );
};

export default App;
