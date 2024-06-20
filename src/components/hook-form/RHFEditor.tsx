import PropTypes from 'prop-types';
// form
import {Controller, useFormContext} from 'react-hook-form';
// @mui
import {FormHelperText} from '@mui/material';
//
import Editor from '../editor';

// ----------------------------------------------------------------------

RHFEditor.propTypes = {
    name: PropTypes.string,
};

interface RHFEditorProps {
  name: string
}

export default function RHFEditor({ name }: RHFEditorProps) {
    const { control } = useFormContext();

    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState: { error } }) => {
              return (
                <>
                  <Editor
                    {...field}
                  />
                  {!!error && (
                    <FormHelperText error sx={{ px: 2 }}>
                      {error.message}
                    </FormHelperText>
                  )}
                </>
              )
            }}
        />
    );
}
