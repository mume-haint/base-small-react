import PropTypes from 'prop-types';
// form
import { useFormContext, Controller } from 'react-hook-form';
// @mui
import { Switch, FormControlLabel } from '@mui/material';

// ----------------------------------------------------------------------

RHFSwitch.propTypes = {
    name: PropTypes.string,
};

interface Props {
    name: string,
    label: string
}


export default function RHFSwitch({ name, label, ...other }: Props) {
    const { control } = useFormContext();

    return (
        <FormControlLabel
            label={label}
            control={
                <Controller
                    name={name}
                    control={control}
                    render={({ field }) => <Switch {...field} checked={field.value} />} />
            }
            {...other}
        />
    );
}
