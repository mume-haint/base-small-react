import * as Yup from 'yup';
import {useEffect} from 'react';
// form
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
// @mui
import {Button, Card, Grid, Stack, Typography} from '@mui/material';
// routes
// router-link
import {RHFFormProvider, RHFText} from '../components/hook-form';
// redux
import {update} from '../redux/slices/authSlice.ts'
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../redux/store.ts";
import {AuthUserData} from "../types/auth.ts";
// ----------------------------------------------------------------------

export default function ReduxProfile() {
    const authProfile = useSelector((state: RootState) => state.auth)
    const dispatch = useDispatch()

    const UpdateProfileSchema = Yup.object().shape({
        username: Yup.string().required('Tên đăng nhập không được để trống'),
        display_name: Yup.string().required('Tên hiển thị không được để trống'),
        avatar: Yup.string().required('Avatar không được để trống'),
    });

    const defaultValues: AuthUserData = {
        username: '',
        display_name: '',
        avatar: '',
    };

    const methods = useForm<AuthUserData>({
        resolver: yupResolver(UpdateProfileSchema),
        defaultValues,
    });

    const {
        reset,
        handleSubmit,
    } = methods;


    useEffect(() => {
        reset(authProfile.user)
    }, []);

    const onSubmit = (formData: AuthUserData) => {
        dispatch(update(formData))
    };

    return (
        <div className="p-2 m-2">
            <RHFFormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={8}>
                        <Card sx={{ p: 3 }}>
                            <Stack spacing={3}>
                                <Stack direction='column' spacing={1}>
                                    <Typography>Tên đăng nhập</Typography>
                                    <RHFText name="username" />
                                </Stack>
                                <Stack direction='column' spacing={1}>
                                    <Typography>Tên người dùng</Typography>
                                    <RHFText name="display_name" />
                                </Stack>
                                <Stack direction='column' spacing={1}>
                                    <Typography>Avatar</Typography>
                                    <RHFText name="avatar" />
                                </Stack>
                                <Stack direction="row" justifyContent="flex-end" spacing={3}>
                                    <Button variant="outlined" type="submit">Cập nhật</Button>
                                </Stack>
                            </Stack>
                        </Card>
                    </Grid>
                </Grid>
            </RHFFormProvider>
        </div>

    );
}
