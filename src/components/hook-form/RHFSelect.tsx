// form
import {Controller, useFormContext} from 'react-hook-form';
// @mui
import {TextField, TextFieldProps} from '@mui/material';
import {ReactNode} from "react";
import {FormHelperText} from "~/@mui/material";

// ----------------------------------------------------------------------
interface RHFSelectProps extends Omit<TextFieldProps, 'name'> {
    name: string;
    children: ReactNode;
}

export default function RHFSelect({ name, children, ...other }: RHFSelectProps) {
    const { control } = useFormContext();

    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState: { error } }) => (
                <>
                    <TextField
                        {...field}
                        select
                        fullWidth
                        SelectProps={{ native: true }}
                        error={!!error}
                        {...other}
                    >
                        {children}
                    </TextField>
                    {!!error && (
                        <FormHelperText error sx={{ px: 2 }}>
                            {error.message}
                        </FormHelperText>
                    )}
                </>
            )}
        />
    );
}
