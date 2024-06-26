import { useTheme, Theme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import {Breakpoint} from "@mui/material";

// ----------------------------------------------------------------------

type QueryType = 'up' | 'down' | 'between' | 'only';

export function useResponsive(query: QueryType, start: Breakpoint, end?: Breakpoint): boolean {
  const theme = useTheme<Theme>();

  const mediaUp = useMediaQuery(theme.breakpoints.up(start));
  const mediaDown = useMediaQuery(theme.breakpoints.down(start));
  const mediaBetween = useMediaQuery(theme.breakpoints.between(start, end!));
  const mediaOnly = useMediaQuery(theme.breakpoints.only(start));

  if (query === 'up') {
    return mediaUp;
  }

  if (query === 'down') {
    return mediaDown;
  }

  if (query === 'between') {
    return mediaBetween;
  }

  return mediaOnly;
}
