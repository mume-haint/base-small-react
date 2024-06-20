import {DropzoneOptions, useDropzone} from 'react-dropzone';
// @mui
import {styled} from '@mui/material/styles';
import {Box, SxProps, Theme} from '@mui/material';
//
import BlockContent from './BlockContent';
import RejectionFiles from './RejectionFiles';
import MultiFilePreview from './MultiFilePreview';
import {ReactNode} from "react";
import {ImagePreview} from "src/types/component/image.ts";

// ----------------------------------------------------------------------

const DropZoneStyle = styled('div')(({ theme }) => ({
  outline: 'none',
  padding: theme.spacing(5, 1),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.paper,
  border: `1px dashed ${theme.palette.grey}`,
  '&:hover': { opacity: 0.72, cursor: 'pointer' },
}));

// ----------------------------------------------------------------------

interface UploadMultiFileProps extends DropzoneOptions {
  error?: boolean;
  showPreview?: boolean;
  files: ImagePreview[];
  onRemove: (file: ImagePreview) => void;
  onRemoveAll: () => void;
  helperText?: ReactNode;
  sx?: SxProps<Theme>;
}

export default function UploadMultiFile({
                                          error = false,
                                          showPreview = false,
                                          files,
                                          onRemove,
                                          onRemoveAll,
                                          helperText,
                                          sx,
                                          ...other
                                        }: UploadMultiFileProps) {
  const { getRootProps, getInputProps, isDragActive, isDragReject, fileRejections } = useDropzone({
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
        }}
      >
        <input {...getInputProps()} />

        <BlockContent />
      </DropZoneStyle>

      {fileRejections.length > 0 && <RejectionFiles fileRejections={fileRejections} />}

      <MultiFilePreview files={files} showPreview={showPreview} onRemove={onRemove} onRemoveAll={onRemoveAll} />

      {helperText && helperText}
    </Box>
  );
}
