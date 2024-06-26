import {createContext, PropsWithChildren, useContext, useReducer} from 'react';
import {Post} from "../types/post.ts";
import {getContextPosts} from "../api/context-posts.ts";

// ----------------------------------------------------------------------
interface PostContextData {
    data: Post[],
    _page: number,
    _order: 'asc' | 'desc' | undefined,
    _sort: string,
    _limit: number,
    total: number
}

interface PostContextType {
    state: PostContextData,
    initPost: () => void,
    storePost: (data: Post) => void,
    updatePost: (id: number, data: Post) => void,
    deletePost: (id: number) => void,
}

enum PostContextAction {
    INIT = 'INIT',
    STORE = 'STORE',
    UPDATE = 'UPDATE',
    DELETE = 'DELETE',
}

const initialState: PostContextData = {
    data: [],
    _page: 0,
    _order: 'asc',
    _sort: 'userId',
    _limit: 5,
    total: 0
};

interface PostAction {
    type: PostContextAction;
    payload: {
        init?: Post[],
        store?: {
            data: Post
        },
        update?: {
            id: number,
            data: Post
        }
        delete?: {
            id: number
        }
    };
}

const reducer = (state: PostContextData, action: PostAction) => {
    const {type, payload} = action;
    switch (type) {
        case PostContextAction.INIT:
            if(payload.init) {
                const newData = payload.init;
                return {
                    ...state,
                    data: newData,
                } as PostContextData;
            }
            return state;
        case PostContextAction.STORE:
            if(payload.store) {
                const newData = [...state.data, payload.store.data];
                return {
                    ...state,
                    data: newData,
                } as PostContextData;
            }
            return state;
        case PostContextAction.UPDATE:
            return state;
        case PostContextAction.DELETE:
            if(payload.delete !== undefined) {
                const newData = [...state.data].filter(item => item.id !== payload.delete?.id);
                return {
                    ...state,
                    data: newData,
                } as PostContextData;
            }
            return state;
        default:
            return state;
    }
}

const PostContext = createContext<PostContextType | undefined>(undefined);

// ----------------------------------------------------------------------

export const usePostProvider = () => {
    const data = useContext(PostContext)
    if (data === undefined) {
        throw new Error(
            'useDemoProvider must be used within a DemoProvider tag',
        )
    }
    return data
}

export function PostProvider({ children }: PropsWithChildren) {
    const [state, dispatch] = useReducer(reducer, initialState);

    const initPost = async () => {
        const res = await getContextPosts() as unknown as Post[];
        dispatch({
            type: PostContextAction.INIT,
            payload: {
                init: res
            },
        });
    };

    const storePost = (data: Post) => {
        dispatch({ type: PostContextAction.STORE, payload: { store: {data} } });
    };

    const updatePost = (id: number, data: Post) => {
        dispatch({ type: PostContextAction.UPDATE, payload: { update: {id, data} } });
    };

    const deletePost = (id: number) => {
        dispatch({ type: PostContextAction.DELETE, payload: { delete: {id} } });
    };

    return (
        <PostContext.Provider
            value={{
                state,
                initPost,
                storePost,
                updatePost,
                deletePost
        }}
        >
            {children}
        </PostContext.Provider>
    )
}
