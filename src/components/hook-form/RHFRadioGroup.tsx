// form
import { useFormContext, Controller } from 'react-hook-form';
// @mui
import {Radio, RadioGroup, FormHelperText, FormControlLabel, RadioGroupProps} from '@mui/material';

// ----------------------------------------------------------------------
interface RHFRadioGroupProps extends Omit<RadioGroupProps, 'name' | 'control' | 'getOptionLabel'> {
    name: string;
    options: string[];
    getOptionLabel: string[]
}
export default function RHFRadioGroup({ name, options, getOptionLabel, ...other }: RHFRadioGroupProps) {
    const { control } = useFormContext();

    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState: { error } }) => (
                <div>
                    <RadioGroup {...field} row {...other}>
                        {options.map((option: string, index: number) => (
                            <FormControlLabel
                                key={option}
                                value={option}
                                control={<Radio />}
                                label={getOptionLabel?.length ? getOptionLabel[index] : option}
                            />
                        ))}
                    </RadioGroup>

                    {!!error && (
                        <FormHelperText error sx={{ px: 2 }}>
                            {error.message}
                        </FormHelperText>
                    )}
                </div>
            )}
        />
    );
}
