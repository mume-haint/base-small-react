import LocalPostTable from "src/page-section/context-posts/LocalPostTable.tsx";
import {PostProvider} from "../context/PostContext.tsx";
import LocalPostCreateForm from "src/page-section/context-posts/LocalPostCreateForm.tsx";

export default function LocalContextPosts() {


    return (
        <div className="p-2 m-2">
            <PostProvider>
                <LocalPostCreateForm />
                <LocalPostTable />
            </PostProvider>
        </div>
    )
}