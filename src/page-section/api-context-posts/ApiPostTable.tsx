import {Box, IconButton, Table, TableBody, TableCell, TableHead, TableRow, TableSortLabel} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {enqueueSnackbar} from "notistack";
import {useAsyncPostProvider} from "src/context/AsyncPostContext.tsx";
import {Post} from "src/types/post.ts";
import {useEffect} from "react";

const TABLE_HEAD = [
    { id: 'id', label: 'ID', alignRight: false, sortable: true },
    { id: 'userId', label: 'userId', alignRight: false, sortable: true },
    { id: 'title', label: 'title', alignRight: false, sortable: false },
    { id: 'body', label: 'body', alignRight: false, sortable: false },
    { id: '' },
];

const visuallyHidden = {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: '1px',
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    whiteSpace: 'nowrap',
    width: '1px',
};

export default function ApiPostTable() {

    const {posts,initPosts, updatePost, deletePost} = useAsyncPostProvider();
    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        try {
            await initPosts();
        } catch (_e) {
            enqueueSnackbar('Fetch post failed', {variant: 'error'});
        }
    }

    const handleUpdate = async (req_id: number, data: Post) => {
        try {
            await updatePost(req_id, data);
            enqueueSnackbar('Update post successfully', {variant: 'success'});
        } catch (_e) {
            enqueueSnackbar('Update post failed', {variant: 'error'});
        }
    }

    const handleDelete = async (id: number) => {
        try {
            await deletePost(id);
            enqueueSnackbar('Delete post successfully', {variant: 'success'});
        } catch (_e) {
            enqueueSnackbar('Delete post failed', {variant: 'error'});
        }
    }

    return (
        <div style={{ height: 400, width: '100%' }}>
            <Table>
            <TableHead>
                <TableRow>
                    {TABLE_HEAD.map((headCell) => (
                        <TableCell
                            key={headCell.id}
                            // sortDirection={orderBy === headCell.id ? order : false}
                        >
                            {headCell.sortable ? <TableSortLabel
                                    hideSortIcon
                                    active={posts._sort === headCell.id}
                                    direction={posts._order === headCell.id ? posts._order : 'asc'}
                                    onClick={() => {}}
                                >
                                    {headCell.label}
                                    <Box sx={{ ...visuallyHidden }}>{posts._order === 'desc' ? 'sorted descending' : 'sorted ascending'}</Box>
                                </TableSortLabel>
                                : headCell.label
                            }

                        </TableCell>
                    ))}
                </TableRow>
            </TableHead>
            <TableBody>
                {posts.data.map((row) => {
                    const { id, userId, title, body } = row;

                    return (
                        <TableRow
                            hover
                            key={id}
                            tabIndex={-1}
                            role="checkbox"
                        >
                            <TableCell align="left">{id}</TableCell>
                            <TableCell align="left">{userId}</TableCell>
                            <TableCell align="left">{title}</TableCell>
                            <TableCell align="left">{body}</TableCell>
                            <TableCell align="right">
                                <IconButton onClick={() => handleUpdate(id, {id, userId, title, body})}>
                                    <EditIcon />
                                </IconButton>
                                <IconButton onClick={() => handleDelete(id)} aria-label="delete">
                                    <DeleteIcon />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    );
                })}
            </TableBody>
            </Table>
        </div>
    );
}