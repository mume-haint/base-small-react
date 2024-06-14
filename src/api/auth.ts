import axios from './base.ts'

export async function login(username: string, password: string) {
    // return axios.post('/login', {params: {username, password}});
    const fakeResponse = {
        data: {
            username: username,
            display_name: `${username} 213`,
            avatar: 'Fake User',
        },
        accessToken: 'testaccess toekm',
        status: 200,
        error: false,
    };

    return new Promise((resolve) => {
        setTimeout(() => resolve(fakeResponse), 2000); // Simulate network latency
    });
}

export async function profile() {
    // return axios.get('/profile');
    const fakeResponse = {
        data: {
            username: 'fakeUser',
            display_name: 'fakeuser@example.com',
            avatar: 'Fake User',
        },
        status: 200,
        error: false,
    };

    return new Promise((resolve) => {
        setTimeout(() => resolve(fakeResponse), 500); // Simulate network latency
    });
}
