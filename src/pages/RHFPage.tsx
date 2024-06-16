import * as Yup from 'yup';
import {useEffect} from 'react';
// form
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
// @mui
import {Button, Card, Grid, Stack, Typography} from '@mui/material';
// routes
// router-link
import {
    RHFCheckbox,
    RHFFormProvider,
    RHFMultiCheckbox,
    RHFRadioGroup,
    RHFSelect, RHFSwitch,
    RHFText
} from 'src/components/hook-form';
import {RHFDate} from "src/components/hook-form";

// ----------------------------------------------------------------------

interface RHFFormProps {
    text: string,
    checkbox: boolean,
    multicheckbox: string[],
    select: string,
    date: unknown,
    radiogroup: string,
    switch: boolean
}

export default function RHFPage() {

    const RHFPageSchema = Yup.object().shape({
        text: Yup.string().required('text không được để trống'),
        checkbox: Yup.boolean().required(),
        multicheckbox: Yup.array().of(Yup.string().required()).required(),
        select: Yup.string().required('select không được để trống'),
        date: Yup.mixed().required('date không được để trống'),
        radiogroup: Yup.string().required('radiogroup không được để trống'),
        switch: Yup.boolean().required()
    });

    const defaultValues: RHFFormProps = {
        text: '',
        checkbox: false,
        multicheckbox: [],
        select: '',
        date: undefined,
        radiogroup: '',
        switch: true,
    };

    const methods = useForm<RHFFormProps>({
        resolver: yupResolver(RHFPageSchema),
        defaultValues,
    });

    const {
        handleSubmit,
    } = methods;


    useEffect(() => {

    }, []);

    const onSubmit = async (formData: RHFFormProps) => {
        console.log(formData)
    };

    return (
        <RHFFormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={8}>
                    <Card sx={{ p: 3 }}>
                        <Stack spacing={3}>
                            <Stack direction='column' spacing={1}>
                                <Typography>Text</Typography>
                                <RHFText name="text" />
                            </Stack>
                            <Stack direction='column' spacing={1}>
                                <Typography>Checkbox</Typography>
                                <RHFCheckbox name="checkbox" label="asd" />
                            </Stack>
                            <Stack direction='column' spacing={1}>
                                <Typography>Multi checkbox</Typography>
                                <RHFMultiCheckbox name="multicheckbox" options={['123', '456']} />
                            </Stack>
                            <Stack direction='column' spacing={1}>
                                <Typography>Select</Typography>
                                <RHFSelect name="select">
                                    <option key="0" value="">
                                        0
                                    </option>
                                    <option key="1" value="1">
                                        1
                                    </option>
                                    <option key="2" value="2">
                                        2
                                    </option>
                                </RHFSelect>
                            </Stack>
                            <Stack direction='column' spacing={1}>
                                <Typography>Date</Typography>
                                <RHFDate name="date" />
                            </Stack>
                            <Stack direction='column' spacing={1}>
                                <Typography>Radio group</Typography>
                                <RHFRadioGroup
                                    name="radiogroup"
                                    options={[
                                        'asd',
                                        '123'
                                    ]}
                                    getOptionLabel={[
                                        'asd1',
                                        '1232'
                                    ]}
                                />
                            </Stack>
                            <Stack direction='column' spacing={1}>
                                <RHFSwitch name="switch" label="Switch" />
                            </Stack>
                            <Stack direction="row" justifyContent="flex-end" spacing={3}>
                                <Button variant="outlined" type="submit">Cập nhật</Button>
                            </Stack>
                        </Stack>
                    </Card>
                </Grid>
            </Grid>
        </RHFFormProvider>
    );
}
