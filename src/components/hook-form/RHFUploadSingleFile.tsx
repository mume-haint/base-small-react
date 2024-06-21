// form
import {Controller, useFormContext} from 'react-hook-form';
// @mui
import {FormHelperText} from '@mui/material';
// type
import {UploadSingleFile} from '../upload';
import {DropzoneOptions} from "react-dropzone";
import {ReactNode} from "react";
import {SxProps, Theme} from "@mui/system";

// ----------------------------------------------------------------------


// ----------------------------------------------------------------------
interface RHFUploadSingleFileProps extends DropzoneOptions {
  name: string;
  helperText?: ReactNode;
  sx?: SxProps<Theme>;
}

export default function RHFUploadSingleFile({ name, ...other }: RHFUploadSingleFileProps) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        const checkError = !!error && !field.value;

        return (
          <UploadSingleFile
            accept={{"image/*": []}}
            file={field.value}
            error={checkError}
            helperText={
              checkError && (
                <FormHelperText error sx={{ px: 2 }}>
                  {error.message}
                </FormHelperText>
              )
            }
            {...other}
          />
        );
      }}
    />
  );
}