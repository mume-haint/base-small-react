import PostTable from "src/page-section/context-posts/PostTable.tsx";
import {PostProvider} from "../context/PostContext.tsx";
import PostCreateForm from "src/page-section/context-posts/PostCreateForm.tsx";

export default function ContextPosts() {


    return (
        <>
            <PostProvider>
                <PostCreateForm />
                <PostTable />
            </PostProvider>
        </>
    )
}