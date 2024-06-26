import Skeleton from '@mui/material/Skeleton';
import {TableCell, TableRow} from "@mui/material";
interface Props {
  rows: number;
}

export default function SkeletonTableContent({rows}: Props) {
  return (
    <>
      {Array.from({length: rows}, (_, index) => (
        <TableRow>
          <TableCell colSpan={999}>
            <Skeleton key={index} variant="rectangular" height={40} />
          </TableCell>
        </TableRow>
      ))}
    </>
  );
}
