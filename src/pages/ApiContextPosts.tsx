import {AsyncPostProvider} from "../context/AsyncPostContext.tsx";
import ApiPostCreateForm from "src/page-section/api-context-posts/ApiPostCreateForm.tsx";
import ApiPostTable from "src/page-section/api-context-posts/ApiPostTable.tsx";

export default function LocalContextPosts() {

    return (
        <div className="p-2 m-2">
            <AsyncPostProvider>
                <ApiPostCreateForm />
                <ApiPostTable />
            </AsyncPostProvider>
        </div>
    )
}