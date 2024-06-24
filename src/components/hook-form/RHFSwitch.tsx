// form
import {Controller, useFormContext} from 'react-hook-form';
// @mui
import {FormControlLabel, FormControlLabelProps, FormHelperText, Switch} from '@mui/material';

// ----------------------------------------------------------------------

interface RHFSwitchProps extends Omit<FormControlLabelProps, 'name' | 'label' | 'control'>{
    name: string,
    label: string
}
export default function RHFSwitch({ name, label, ...other }: RHFSwitchProps) {
    const { control } = useFormContext();

    return (
        <FormControlLabel
            label={label}
            control={
                <Controller
                    name={name}
                    control={control}
                    render={({ field, fieldState: { error } }) =>
                        <>
                            <Switch {...field} checked={field.value} />
                            {!!error && (
                                <FormHelperText error sx={{ px: 2 }}>
                                    {error.message}
                                </FormHelperText>
                            )}
                        </>
                } />
            }
            {...other}
        />
    );
}
