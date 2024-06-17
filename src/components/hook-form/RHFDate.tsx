// form
import {Controller, useFormContext} from 'react-hook-form';
// @mui
import {DatePicker, DatePickerProps, LocalizationProvider} from '@mui/x-date-pickers';
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {FormHelperText} from "@mui/material";
import {Dayjs} from "dayjs";

// ----------------------------------------------------------------------

interface RHFDateProps extends Omit<DatePickerProps<Dayjs>, 'name' | 'control'> {
    name: string;
}
export default function RHFDate({ name, ...other }: RHFDateProps) {
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
