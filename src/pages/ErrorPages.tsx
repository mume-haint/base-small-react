import Stack from "@mui/material/Stack";
import {Link} from "react-router-dom";
import Card from "@mui/material/Card";

export default function Dashboard() {
  return (
    <Card className="m-3 p-3">
      <Stack direction='column' spacing={1}>
        <Link className="w-fit p-3 rounded bg-red-500 text-white font-bold" to='/404'>
          Go to 404
        </Link>
        <Link className="w-fit p-3 rounded bg-red-500 text-white font-bold" to='/403'>
          Go to 403
        </Link>
        <Link className="w-fit p-3 rounded bg-red-500 text-white font-bold" to='/401'>
          Go to 401
        </Link>
      </Stack>
    </Card>
  )
}