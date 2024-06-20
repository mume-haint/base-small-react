import {DropzoneOptions} from "react-dropzone";
import {ReactNode} from "react";
import {Controller, useFormContext} from "react-hook-form";
import {UploadAvatar} from "src/components/upload";
import {FormHelperText} from "@mui/material";

interface RHFUploadAvatarProps extends DropzoneOptions {
  name: string,
  helperText: ReactNode,
}

export default function RHFUploadAvatar({ name, ...other }: RHFUploadAvatarProps) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        const checkError = !!error && !field.value;

        return (
          <div>
            <UploadAvatar error={checkError}
                          file={field.value}
                          accept={{"image/*": []}}
                          {...other}
            />
            {checkError && (
              <FormHelperText error sx={{ px: 2, textAlign: 'center' }}>
                {error.message}
              </FormHelperText>
            )}
          </div>
        );
      }}
    />
  );
}