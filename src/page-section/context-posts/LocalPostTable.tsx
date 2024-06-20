import {usePostProvider} from "../../context/PostContext.tsx";
import {Box, IconButton, Table, TableBody, TableCell, TableHead, TableRow, TableSortLabel} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {enqueueSnackbar} from "notistack";

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

export default function LocalPostTable() {

    const {state, updatePost, deletePost} = usePostProvider();

    const handleDelete = (id: number) => {
        deletePost(id);
        enqueueSnackbar('Delete post successfully', {variant: 'success'});
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
                                    active={state._sort === headCell.id}
                                    direction={state._order === headCell.id ? state._order : 'asc'}
                                    onClick={() => {}}
                                >
                                    {headCell.label}
                                    <Box sx={{ ...visuallyHidden }}>{state._order === 'desc' ? 'sorted descending' : 'sorted ascending'}</Box>
                                </TableSortLabel>
                                : headCell.label
                            }

                        </TableCell>
                    ))}
                </TableRow>
            </TableHead>
            <TableBody>
                {state.data.map((row) => {
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
                                <IconButton onClick={() => {updatePost(id, {id, userId, title, body})}}>
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