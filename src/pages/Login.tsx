import * as Yup from 'yup';
import {useEffect} from 'react';
// form
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
// @mui
import {Button, Card, Grid, Stack, Typography} from '@mui/material';
// routes
// components
import {RHFFormProvider, RHFText} from '../components/hook-form';
import {useDispatch} from "react-redux";
import {loginUser} from "../redux/slices/authSlice.ts";
import {LoginFormProps} from "../types/auth.ts";

// ----------------------------------------------------------------------


export default function Login() {
    const dispatch = useDispatch()
    const RHFLoginSchema = Yup.object().shape({
        username: Yup.string().required('Tên đăng nhập không được để trống'),
        password: Yup.string().required('Password không được để trống'),
    });

    const defaultValues: LoginFormProps = {
        username: '',
        password: '',
    };

    const methods = useForm<LoginFormProps>({
        resolver: yupResolver(RHFLoginSchema),
        defaultValues,
    });

    const {
        handleSubmit,
    } = methods;


    useEffect(() => {
    }, []);

    const onSubmit = async (formData: LoginFormProps) => {
        dispatch(loginUser(formData))
    };

    return (
        <RHFFormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={8}>
                    <Card sx={{ p: 3 }}>
                        <Stack spacing={3}>
                            <Stack direction='column' spacing={1}>
                                <Typography>Username</Typography>
                                <RHFText name="username" />
                            </Stack>
                            <Stack direction='column' spacing={1}>
                                <Typography>Password</Typography>
                                <RHFText name="password" type='password' />
                            </Stack>

                            <Stack direction="row" justifyContent="flex-end" spacing={3}>
                                <Button variant="outlined" type="submit">Login</Button>
                            </Stack>
                        </Stack>
                    </Card>
                </Grid>
            </Grid>
        </RHFFormProvider>
    );
}
