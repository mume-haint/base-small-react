import axios from './base.ts'

export async function getContextPosts(params: object = {}) {
    return axios.get('/posts', {params});
}

export async function storeContextPost(data: object) {
    return axios.post('/posts', data);
}

export async function putContextPost(id: string, data: object) {
    return axios.put(`/posts/${id}`, data);
}

export async function deleteContextPost(id: string) {
    return axios.delete(`/posts/${id}`);
}
