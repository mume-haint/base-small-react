import { Controller, useFormContext } from "react-hook-form";
import { UploadMultiFile } from "src/components/upload";
import {FormHelperText} from "@mui/material";
import {DropzoneOptions} from "react-dropzone";
import {ReactNode} from "react";
import {ImagePreview} from "src/types/component/image.ts";
import {SxProps, Theme} from "@mui/system";

interface RHFUploadMultiFileProps extends DropzoneOptions {
  name: string;
  showPreview?: boolean;
  onRemove: (file: ImagePreview) => void;
  onRemoveAll: () => void;
  helperText?: ReactNode;
  sx?: SxProps<Theme>;
}

export default function RHFUploadMultiFile({ name, ...other }: RHFUploadMultiFileProps) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        const checkError = !!error && field.value?.length === 0;

        return (
          <UploadMultiFile
            accept={{ "image/*": [] }}
            files={field.value}
            error={checkError}
            helperText={
              checkError && (
                <FormHelperText error sx={{ px: 2 }}>
                  {error?.message}
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
