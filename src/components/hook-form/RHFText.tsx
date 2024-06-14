
import { useFormContext, Controller } from 'react-hook-form';
// @mui
import {TextField, TextFieldProps} from '@mui/material';

// ----------------------------------------------------------------------


interface Props extends Omit<TextFieldProps, 'name'> {
    name: string;
}


export default function RHFText({ name, ...other }: Props) {
    const { control } = useFormContext();

    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState: { error } }) => (
                <>
                    <TextField {...field} error={!!error} helperText={error?.message} {...other} />
                </>
            )}
        />
    );
}
