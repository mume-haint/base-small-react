import {createContext, ReactNode} from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

export interface SettingsState {
  themeMode: string;
  sidebarCollapsed: boolean;
  onChangeMode: (value: string) => void;
  onToggleMode: () => void;
  onChangeSidebarCollapsed: (value: boolean) => void;
  onToggleSidebarCollapsed: () => void;
}

const initialState: SettingsState = {
  themeMode: 'light',
  sidebarCollapsed: false,
  onChangeMode: () => {},
  onToggleMode: () => {},
  onChangeSidebarCollapsed: () => {},
  onToggleSidebarCollapsed: () => {},
};

const SettingsContext = createContext<SettingsState>(initialState);

interface SettingsProviderProps {
  children: ReactNode;
}

function SettingsProvider({ children }: SettingsProviderProps) {
  const [settings, setSettings] = useLocalStorage('settings', {
    themeMode: initialState.themeMode,
    sidebarCollapsed: initialState.sidebarCollapsed,
  });

  const onChangeMode = (value: string) => {
    setSettings({
      ...settings,
      themeMode: value === 'light' ? 'light' : 'dark',
    });
  };

  const onToggleMode = () => {
    setSettings({
      ...settings,
      themeMode: settings.themeMode === 'light' ? 'dark' : 'light',
    });
  };

  const onChangeSidebarCollapsed = (value: boolean) => {
    setSettings({
      ...settings,
      sidebarCollapsed: value,
    });
  };

  const onToggleSidebarCollapsed = () => {
    setSettings({
      ...settings,
      sidebarCollapsed: !settings.sidebarCollapsed,
    });
  };

  return (
    <SettingsContext.Provider
      value={{
        ...settings,
        onChangeMode,
        onToggleMode,
        onChangeSidebarCollapsed,
        onToggleSidebarCollapsed
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

export { SettingsProvider, SettingsContext };
