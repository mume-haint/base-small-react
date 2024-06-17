import { useState, ChangeEvent } from 'react';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationEx() {
    const [page, setPage] = useState<number>(1);

    const handleChange = (_event: ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };

    return (
        <Stack spacing={2}>
            <Typography>Page: {page}</Typography>
            <Pagination count={10} page={page} onChange={handleChange} />
        </Stack>
    );
}
