import PostTable from "src/page-section/context-posts/PostTable.tsx";
import {PostProvider} from "../context/PostContext.tsx";
import PostCreateForm from "src/page-section/context-posts/PostCreateForm.tsx";

export default function LocalContextPosts() {


    return (
        <div className="p-2 m-2">
            <PostProvider>
                <PostCreateForm />
                <PostTable />
            </PostProvider>
        </div>
    )
}