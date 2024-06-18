import PropTypes from 'prop-types';
// form
import {Controller, useFormContext} from 'react-hook-form';
// @mui
import {Checkbox, FormControlLabel, FormControlLabelProps, FormGroup} from '@mui/material';
import {FormHelperText} from "@mui/material";

// ----------------------------------------------------------------------

interface RHFCheckboxProps extends Omit<FormControlLabelProps, 'name' | 'control'> {
    name: string;
}

export function RHFCheckbox({ name, label = '', ...other }: RHFCheckboxProps) {
    const { control } = useFormContext();

    return (
        <FormControlLabel
            control={
                <Controller
                    name={name}
                    control={control}
                    render={({ field , fieldState: {error}}) =>
                        <>
                            <Checkbox {...field} checked={field.value} />
                            {!!error && (
                                <FormHelperText error sx={{ px: 2 }}>
                                    {error.message}
                                </FormHelperText>
                            )}
                        </>

            }
                />
            }
            label={label}
            {...other}
        />
    );
}

// ----------------------------------------------------------------------

RHFMultiCheckbox.propTypes = {
    name: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.string),
};

interface RHFMultiCheckboxProps extends Omit<FormControlLabelProps, 'name' | 'control' | 'label'> {
    name: string;
    options: string[]
}

export function RHFMultiCheckbox({ name, options, ...other }: RHFMultiCheckboxProps) {
    const { control } = useFormContext();

    return (
        <Controller
            name={name}
            control={control}
            render={({ field }) => {
                const onSelected = (option: string) =>
                    field.value.includes(option)
                        ? field.value.filter((value: string) => value !== option)
                        : [...field.value, option];

                return (
                    <FormGroup>
                        {options.map((option) => (
                            <FormControlLabel
                                key={option}
                                control={
                                    <Checkbox
                                        checked={field.value.includes(option)}
                                        onChange={() => field.onChange(onSelected(option))}
                                    />
                                }
                                label={option}
                                {...other}
                            />
                        ))}
                    </FormGroup>
                );
            }}
        />
    );
}
