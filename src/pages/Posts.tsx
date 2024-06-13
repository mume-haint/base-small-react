import PostTable from "../components/post/PostTable.tsx";
import {PostProvider} from "../context/PostContext.tsx";
import PostCreateForm from "../components/post/PostCreateForm.tsx";

export default function Posts() {


    return (
        <>
            <PostProvider>

                <PostCreateForm />

                <PostTable />
            </PostProvider>
        </>
    )
}