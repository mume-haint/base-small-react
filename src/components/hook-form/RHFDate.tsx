import PropTypes, {InferProps} from 'prop-types';
// form
import { useFormContext, Controller } from 'react-hook-form';
// @mui
import { DatePicker } from '@mui/lab';
import { TextField } from '@mui/material';

// ----------------------------------------------------------------------

RHFDate.propTypes = {
    name: PropTypes.string,
};

export default function RHFDate({ name, ...other }: InferProps<typeof RHFDate.propTypes>) {
    const { control } = useFormContext();


    return (
        <Controller
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            name={name}
            control={control}
            render={({ field, fieldState: { error } }) => (
                <DatePicker {...field}
                            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                            // @ts-expect-error
                            renderInput={(props) => {
                                return <TextField {...props} />
                            }}
                            error={!!error}
                            helperText={error?.message}
                            {...other}
                />
            )}
        />
    );
}
