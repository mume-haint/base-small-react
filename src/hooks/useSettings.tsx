import { useContext } from 'react';
import { SettingsContext, SettingsState } from '../context/SettingsContext';

// ----------------------------------------------------------------------

const useSettings = (): SettingsState => {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }
  return context;
};

export default useSettings;
