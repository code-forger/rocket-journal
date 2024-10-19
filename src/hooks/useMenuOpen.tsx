import React, {
  type FC,
  type ReactNode,
  createContext,
  useContext,
  useState,
} from 'react';

type MenuOpenState = {
  menuOpen: boolean;
  setMenuOpen: (nextMenuOpen: boolean) => void;
  toggleMenuOpen: () => void;
};

const MenuOpenContext = createContext<MenuOpenState>({
  menuOpen: false,
  setMenuOpen: () => {
    throw new Error(
      'default setMenuOpen hit, Please use ProvideMenuOpen above the calling component',
    );
  },
  toggleMenuOpen: () => {
    throw new Error(
      'default toggleMenuOpen hit, Please use ProvideMenuOpen above the calling component',
    );
  },
});

type Props = {
  children: ReactNode;
} & MenuOpenState;

export const ProvideMenuOpen: FC<Props> = ({
  children,
  menuOpen,
  setMenuOpen,
  toggleMenuOpen,
}) => (
  <MenuOpenContext.Provider value={{ menuOpen, setMenuOpen, toggleMenuOpen }}>
    {children}
  </MenuOpenContext.Provider>
);

export const useMenuOpenStorage = (): MenuOpenState => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const toggleMenuOpen = () => {
    setMenuOpen((nextMenuOpen: boolean) => !nextMenuOpen);
  };
  return { menuOpen, setMenuOpen, toggleMenuOpen };
};

export const useMenuOpen = (): MenuOpenState => useContext(MenuOpenContext);
