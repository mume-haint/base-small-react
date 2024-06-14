// form
import {Controller, useFormContext} from 'react-hook-form';
// @mui
import {DatePicker, LocalizationProvider} from '@mui/x-date-pickers';
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {FormHelperText} from "@mui/material";

// ----------------------------------------------------------------------


export default function RHFDate({ name, ...other }) {
    const { control } = useFormContext();

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Controller
                name={name}
                control={control}
                render={({ field, fieldState: { error } }) => (
                    <>
                        <DatePicker
                            {...field}
                            {...other}
                        />
                        {!!error && (
                            <FormHelperText error sx={{ px: 2 }}>
                                {error.message}
                            </FormHelperText>
                        )}
                    </>
                )}
            />
        </LocalizationProvider>
    );
}
