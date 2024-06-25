import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import useSettings from "src/hooks/useSettings.tsx";

const ThemeSwitch = () => {
  const { themeMode, onToggleMode } = useSettings();

  return (
    <IconButton onClick={onToggleMode} color="inherit">
      {themeMode === 'light' ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>
  );
};

export default ThemeSwitch;
