import axios from './base.ts'

export async function getContextPosts(params: object = {}) {
    return axios.get('/posts', {params});
}

export async function storeContextPost(data: object) {
    return axios.post(
        '/posts',
        data,
        {headers: {
            "Content-Type": "application/json"
        }}
    );
}

export async function updateContextPost(id: number, data: object) {
    return axios.put(
        `/posts/${id}`,
        data,
        {headers: {
                "Content-Type": "application/json"
            }}
    );
}

export async function deleteContextPost(id: number) {
    return axios.delete(`/posts/${id}`);
}
