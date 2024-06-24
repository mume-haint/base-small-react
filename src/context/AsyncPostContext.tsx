import {
    createContext,
    PropsWithChildren,
    useContext,
    useMemo,
    useState,
} from 'react'
import {Post} from "src/types/post.ts";
import {deleteContextPost, getContextPosts, storeContextPost, updateContextPost} from "src/api/context-posts.ts";

interface AsyncPostContextData {
    data: Post[],
    _page: number,
    _order: 'asc' | 'desc' | undefined,
    _sort: string,
    _limit: number,
    total: number
}

const initAsyncPostContextData = {
    data: [],
    _page: 0,
    _order: "asc" as 'asc' | 'desc' | undefined,
    _sort: 'id',
    _limit: 5,
    total: 0
}

interface AsyncPostContextProps {
    posts: AsyncPostContextData
    initPosts: () => void
    addPost: (data: Post) => void
    updatePost: (id: number, data: Post) => void
    deletePost: (id: number) => void
}

const AsyncPostContext = createContext<AsyncPostContextProps | undefined>(undefined)

export const useAsyncPostProvider = (): AsyncPostContextProps => {
    const data = useContext<AsyncPostContextProps | undefined>(AsyncPostContext)
    if (data === undefined) {
        throw new Error(
            'useAssigneeByProjectProvider must be used within a AssigneeByProjectProvider tag',
        )
    }
    return data
}

export function AsyncPostProvider({ children }: PropsWithChildren) {
    const [posts, setPosts] = useState<AsyncPostContextData>(initAsyncPostContextData)

    const initPosts = async () => {
        const newData = await getContextPosts() as unknown as Post[];
        setPosts({...posts, data: newData});
    }

    const addPost = async (req: Post) => {
        await storeContextPost(req);
        const newData = await getContextPosts() as unknown as Post[];
        setPosts({...posts, data: newData});
    }

    const updatePost = async (id: number, body: Post) => {
        await updateContextPost(id, body);
        const newData = await getContextPosts() as unknown as Post[];
        setPosts({...posts, data: newData});
    }

    const deletePost = async (id: number) => {
        await deleteContextPost(id);
        const newData = await getContextPosts() as unknown as Post[];
        setPosts({...posts, data: newData});
    }

    const StateProviderValue = useMemo(
        () => ({
            posts,
            initPosts,
            addPost,
            updatePost,
            deletePost
        }),
        [posts, initPosts, addPost, updatePost, deletePost],
    )

    return (
        <AsyncPostContext.Provider value={StateProviderValue}>
            {children}
        </AsyncPostContext.Provider>
    )
}
