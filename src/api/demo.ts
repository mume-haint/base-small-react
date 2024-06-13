import axios from './base.ts'

export async function getPostDemo(params: object = {}) {
    return axios.get('/posts', {params});
}

export async function storePostDemo(data: object) {
    return axios.post('/posts', data);
}

export async function putPostDemo(id: string, data: object) {
    return axios.put(`/posts/${id}`, data);
}

export async function deletePostDemo(id: string) {
    return axios.delete(`/posts/${id}`);
}
