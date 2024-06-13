// form
import {Controller, useFormContext} from 'react-hook-form';
// @mui
import {TextField, TextFieldProps} from '@mui/material';
import {ReactNode} from "react";

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
                <TextField
                    {...field}
                    select
                    fullWidth
                    SelectProps={{ native: true }}
                    error={!!error}
                    helperText={error?.message}
                    {...other}
                >
                    {children}
                </TextField>
            )}
        />
    );
}
