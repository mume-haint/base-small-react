import * as Yup from 'yup';
import {useCallback, useEffect} from 'react';
// form
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
// @mui
import {Button, Card, Grid, Stack, Typography} from '@mui/material';
// routes
// router-link
import {
  RHFCheckbox,
  RHFDate,
  RHFFormProvider,
  RHFMultiCheckbox,
  RHFRadioGroup,
  RHFSelect,
  RHFSwitch,
  RHFText, RHFUploadAvatar, RHFUploadMultiFile, RHFUploadSingleFile
} from 'src/components/hook-form';
import RHFEditor from "src/components/hook-form/RHFEditor.tsx";
import {fData} from "src/utils/format-number.ts";
import {ImagePreview} from "src/types/component/image.ts";

// ----------------------------------------------------------------------

interface RHFFormProps {
  text: string,
  checkbox: boolean,
  multicheckbox: string[],
  select: string,
  date: unknown,
  radiogroup: string,
  switch: boolean,
  editor: unknown,
  upload_avatar: unknown,
  upload_single_file: unknown
  upload_multi_file: ImagePreview[]
}

export default function RHFPage() {

  const RHFPageSchema = Yup.object().shape({
    text: Yup.string().required('text không được để trống'),
    checkbox: Yup.boolean().required(),
    multicheckbox: Yup.array().of(Yup.string().required()).required(),
    select: Yup.string().required('select không được để trống'),
    date: Yup.mixed().required('date không được để trống'),
    radiogroup: Yup.string().required('radiogroup không được để trống'),
    switch: Yup.boolean().required(),
    editor: Yup.mixed(),
    upload_avatar: Yup.mixed(),
    upload_single_file: Yup.mixed(),
    upload_multi_file: Yup.mixed(),
  });

  const defaultValues: RHFFormProps = {
    text: '',
    checkbox: false,
    multicheckbox: [],
    select: '',
    date: undefined,
    radiogroup: '',
    switch: true,
    editor: undefined,
    upload_avatar: undefined,
    upload_single_file: undefined,
    upload_multi_file: []
  };

  const methods = useForm<RHFFormProps>({
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    resolver: yupResolver(RHFPageSchema),
    defaultValues,
  });

  const {
    watch,
    setValue,
    handleSubmit,
  } = methods;

  const values = watch();

  useEffect(() => {

  }, []);

  const handleDrop = useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];

      if (file) {
        setValue(
          'upload_avatar',
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        );
      }
    },
    [setValue]
  );

  const handleDropSingleFile = useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];

      if (file) {
        setValue(
          'upload_single_file',
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        );
      }
    },
    [setValue]
  );

  const handleDropMultiFile = useCallback(
    (acceptedFiles: File[]) => {
      setValue(
        'upload_multi_file',
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      )
    },
    [setValue]
  );

  const handleRemoveAll = () => {
    setValue('upload_multi_file', []);
  };

  const handleRemove = (file: File | string) => {
    const filteredItems = values?.upload_multi_file?.filter((_file: File | string) => _file !== file);
    setValue('upload_multi_file', filteredItems);
  };

  const onSubmit = async (formData: RHFFormProps) => {
    console.log(formData)
  };

  return (
    <div className='p-2 m-2'>

      <RHFFormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Card sx={{p: 3}}>
              <Stack spacing={3}>
                <Stack direction='column' spacing={1}>
                  <Typography>Text</Typography>
                  <RHFText className="w-[300px]" name="text"/>
                </Stack>
                <Stack direction='column' spacing={1}>
                  <Typography>Checkbox</Typography>
                  <RHFCheckbox name="checkbox" label="asd"/>
                </Stack>
                <Stack direction='column' spacing={1}>
                  <Typography>Multi checkbox</Typography>
                  <RHFMultiCheckbox name="multicheckbox" options={['123', '456']}/>
                </Stack>
                <Stack direction='column' spacing={1}>
                  <Typography>Select</Typography>
                  <RHFSelect className="w-[300px]" name="select">
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
                  <RHFDate className="w-[300px]" name="date"/>
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
                  <RHFSwitch name="switch" label="Switch"/>
                </Stack>
                <Stack direction='column' spacing={1}>
                  <Typography>Editor</Typography>
                  <RHFEditor name="editor"/>
                </Stack>
                <Stack direction='column' spacing={1}>
                  <Typography>Upload avatar</Typography>
                  <RHFUploadAvatar name="upload_avatar"
                                   maxSize={3145728}
                                   onDrop={handleDrop}
                                   helperText={
                                     <Typography
                                       variant="caption"
                                       sx={{
                                         mt: 2,
                                         mx: 'auto',
                                         display: 'block',
                                         textAlign: 'center',
                                         color: 'text.secondary',
                                       }}
                                     >
                                       Allowed *.jpeg, *.jpg, *.png, *.gif
                                       <br/> max size of {fData(3145728)}
                                     </Typography>
                                   }
                  />
                </Stack>
                <Stack direction='column' spacing={1}>
                  <Typography>Upload single file</Typography>
                  <RHFUploadSingleFile name="upload_single_file"
                                       maxSize={3145728}
                                       onDrop={handleDropSingleFile}
                  />
                </Stack>
                <Stack direction='column' spacing={1}>
                  <Typography>Upload multi file</Typography>
                  <RHFUploadMultiFile name="upload_multi_file"
                                      maxSize={3145728}
                                      showPreview
                                      onDrop={handleDropMultiFile}
                                      onRemove={handleRemove}
                                      onRemoveAll={handleRemoveAll}
                  />
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
