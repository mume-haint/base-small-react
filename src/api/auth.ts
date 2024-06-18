export async function login(username: string, password: string) {
    // return axios.context-posts('/login', {params: {username, password}});
    const fakeResponse = {
        data: {
            username: username,
            display_name: `${username} ${password}`,
            avatar: 'Fake User',
        },
        accessToken: 'testaccess toekm',
        status: 200,
        error: false,
    };

    return new Promise((resolve) => {
        // Simulate network latency
        setTimeout(() => resolve(fakeResponse), 2000);
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
        // Simulate network latency
        setTimeout(() => resolve(fakeResponse), 2000);
    });
}

export async function logout() {
    return new Promise((resolve) => {
        // Simulate network latency
        setTimeout(() => resolve('ok'), 2000);
    });
}
