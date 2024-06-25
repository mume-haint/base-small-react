import {ChangeEvent, createContext, ReactNode} from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

export interface SettingsState {
  themeMode: string;
  sidebarCollapsed: boolean;
  onChangeMode: (event: ChangeEvent<HTMLInputElement>) => void;
  onToggleMode: () => void;
  onChangeSidebarCollapsed: (event: ChangeEvent<HTMLInputElement>) => void;
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

  const onChangeMode = (event: ChangeEvent<HTMLInputElement>) => {
    setSettings({
      ...settings,
      themeMode: event.target.value,
    });
  };

  const onToggleMode = () => {
    setSettings({
      ...settings,
      themeMode: settings.themeMode === 'light' ? 'dark' : 'light',
    });
  };

  const onChangeSidebarCollapsed = (event: ChangeEvent<HTMLInputElement>) => {
    setSettings({
      ...settings,
      sidebarCollapsed: event.target.checked,
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
