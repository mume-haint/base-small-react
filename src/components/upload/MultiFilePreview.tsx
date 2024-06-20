import { alpha } from '@mui/material/styles';
import { List, Stack, Button, IconButton, ListItemText, ListItem } from '@mui/material';
import isString from 'lodash/isString';
// utils
import { fData } from '../../utils/format-number';
//
import Image from '../Image';
import Iconify from '../iconify';
import {ImagePreview} from "src/types/component/image.ts";

// ----------------------------------------------------------------------

interface FileData {
  key: string;
  name?: string;
  size?: number;
  preview?: string;
}

interface MultiFilePreviewProps {
  files: ImagePreview[];
  showPreview?: boolean;
  onRemove: (file: ImagePreview) => void;
  onRemoveAll: () => void;
}

const getFileData = (file: ImagePreview): FileData => {
  return {
    key: file.name,
    name: file.name,
    size: file.size,
    preview: file.preview,
  };
};

// ----------------------------------------------------------------------

export default function MultiFilePreview({ showPreview = false, files, onRemove, onRemoveAll }: MultiFilePreviewProps) {
  const hasFile = files.length > 0;

  return (
    <>
      <List disablePadding sx={{ ...(hasFile && { my: 3 }) }}>
        {files.map((file) => {
          const { key, name, size, preview } = getFileData(file);

          if (showPreview) {
            return (
              <ListItem
                key={key}
                sx={{
                  p: 0,
                  m: 0.5,
                  width: 80,
                  height: 80,
                  borderRadius: 1.25,
                  overflow: 'hidden',
                  position: 'relative',
                  display: 'inline-flex',
                  border: (theme) => `solid 1px ${theme.palette.divider}`,
                }}
              >
                <Image alt="preview" src={preview} ratio="1/1" />
                <IconButton
                  size="small"
                  onClick={() => onRemove(file)}
                  sx={{
                    top: 6,
                    p: '2px',
                    right: 6,
                    position: 'absolute',
                    color: 'common.white',
                    bgcolor: (theme) => alpha(theme.palette.grey[900], 0.72),
                    '&:hover': {
                      bgcolor: (theme) => alpha(theme.palette.grey[900], 0.48),
                    },
                  }}
                >
                  <Iconify icon={'eva:close-fill'} />
                </IconButton>
              </ListItem>
            );
          }

          return (
            <ListItem
              key={key}
              sx={{
                my: 1,
                px: 2,
                py: 0.75,
                borderRadius: 0.75,
                border: (theme) => `solid 1px ${theme.palette.divider}`,
              }}
            >
              <Iconify icon={'eva:file-fill'} sx={{ width: 28, height: 28, color: 'text.secondary', mr: 2 }} />

              <ListItemText
                primary={isString(file) ? file : name}
                secondary={isString(file) ? '' : fData(size || 0)}
                primaryTypographyProps={{ variant: 'subtitle2' }}
                secondaryTypographyProps={{ variant: 'caption' }}
              />

              <IconButton edge="end" size="small" onClick={() => onRemove(file)}>
                <Iconify icon={'eva:close-fill'} />
              </IconButton>
            </ListItem>
          );
        })}
      </List>

      {hasFile && (
        <Stack direction="row" justifyContent="flex-end" spacing={1.5}>
          <Button color="inherit" size="small" onClick={onRemoveAll}>
            Remove all
          </Button>
          <Button size="small" variant="contained">
            Upload files
          </Button>
        </Stack>
      )}
    </>
  );
}
