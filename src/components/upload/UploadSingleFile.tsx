import isString from 'lodash/isString';
import {useDropzone} from 'react-dropzone';
// @mui
import {styled} from '@mui/material/styles';
import {Box} from '@mui/material';
//
import Image from '../Image';
import RejectionFiles from './RejectionFiles.js';
import BlockContent from './BlockContent.tsx';
import {ImagePreview} from "src/types/component/image.ts";
import {ReactNode} from "react";
import {SxProps, Theme} from "@mui/system";

// ----------------------------------------------------------------------

const DropZoneStyle = styled('div')(({ theme }) => ({
  outline: 'none',
  overflow: 'hidden',
  position: 'relative',
  padding: theme.spacing(5, 1),
  borderRadius: theme.shape.borderRadius,
  transition: theme.transitions.create('padding'),
  // backgroundColor: theme.palette.background.neutral,
  // border: `1px dashed ${theme.palette.grey[500_32]}`,
  '&:hover': { opacity: 0.72, cursor: 'pointer' },
}));

// ----------------------------------------------------------------------

interface UploadSingleFileProps {
  error: boolean,
  file: string | ImagePreview,
  helperText: ReactNode,
  sx?: SxProps<Theme>,
}

export default function UploadSingleFile({ error = false, file, helperText, sx = {}, ...other }: UploadSingleFileProps) {
  const { getRootProps, getInputProps, isDragActive, isDragReject, fileRejections } = useDropzone({
    multiple: false,
    ...other,
  });

  return (
    <Box sx={{ width: '100%', ...sx }}>
      <DropZoneStyle
        {...getRootProps()}
        sx={{
          ...(isDragActive && { opacity: 0.72 }),
          ...((isDragReject || error) && {
            color: 'error.main',
            borderColor: 'error.light',
            bgcolor: 'error.lighter',
          }),
          ...(file && {
            padding: '12% 0',
          }),
        }}
      >
        <input {...getInputProps()} />

        <BlockContent />

        {file && (
          <Image
            alt="file preview"
            src={isString(file) ? file : file.preview}
            sx={{
              top: 8,
              left: 8,
              borderRadius: 1,
              position: 'absolute',
              width: 'calc(100% - 16px)',
              height: 'calc(100% - 16px)',
            }}
          />
        )}
      </DropZoneStyle>

      {fileRejections.length > 0 && <RejectionFiles fileRejections={fileRejections} />}

      {helperText && helperText}
    </Box>
  );
}
