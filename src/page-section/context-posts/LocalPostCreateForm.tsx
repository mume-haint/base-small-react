import {Button, Stack, Typography} from "@mui/material";
import RHFText from "../../components/hook-form/RHFText.tsx";
import RHFFormProvider from "../../components/hook-form/RHFFormProvider.tsx";
import {Post} from "../../types/post.ts";
import * as Yup from "yup";
import {FieldValues, useForm, UseFormReturn} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {usePostProvider} from "../../context/PostContext.tsx";
import {enqueueSnackbar} from "notistack";
import {useEffect} from "react";

export default function LocalPostCreateForm() {

    const {initPost, storePost} = usePostProvider();

    useEffect(() => {
        const init = async () => {
            try {
                await initPost();
                enqueueSnackbar("Post inited success", {variant: 'success'});
            } catch (e) {
                enqueueSnackbar("Post init failed", {variant: 'error'});
            }
        }
        init();
    }, []);

    const CreatePostsSchema = Yup.object().shape({
        userId: Yup.number().typeError('userId must be a number').required('userId is required'),
        id: Yup.number().typeError('id must be a number').required('id is required'),
        title: Yup.string().typeError('title must be a number').required('title is required'),
        body: Yup.string().typeError('body must be a number').required('body is required'),
    });

    const defaultValues = {
        userId: 0,
        id: 0,
        title: '',
        body: '',
    };

    const methods = useForm({
        resolver: yupResolver(CreatePostsSchema),
        defaultValues,
    });

    const {
        reset,
        handleSubmit,
        formState: { isSubmitting },
    } = methods;

    const onSubmit = async (formData: Post) => {
        try {
            storePost(formData);
            enqueueSnackbar('Create post successfully', {variant: 'success', transitionDuration: {enter: 1000, exit: 1000}});
            reset();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <RHFFormProvider methods={methods as unknown as UseFormReturn<FieldValues>} onSubmit={handleSubmit(onSubmit)}>
            <Stack direction="column" spacing={3}>
                <Stack direction="row" spacing={3}>
                    <Typography className='w-[100px]'>userId</Typography>
                    <RHFText className='w-[300px]' size="small" disabled={isSubmitting} name="userId" type="number" />
                </Stack>
                <Stack direction="row" spacing={3}>
                    <Typography className='w-[100px]'>id</Typography>
                    <RHFText className='w-[300px]' size="small" disabled={isSubmitting} name="id" type="number"/>
                </Stack>
                <Stack direction="row" spacing={3}>
                    <Typography className='w-[100px]'>title</Typography>
                    <RHFText className='w-[300px]' size="small" disabled={isSubmitting} name="title" type="text"/>
                </Stack>
                <Stack direction="row" spacing={3}>
                    <Typography className='w-[100px]'>body</Typography>
                    <RHFText className='w-[300px]' size="small" disabled={isSubmitting} name="body" type="text"/>
                </Stack>
                <Stack direction='row' spacing={3}>
                    <Button disabled={isSubmitting} variant="outlined" type="submit">Submit</Button>
                </Stack>
            </Stack>
        </RHFFormProvider>
    )
}