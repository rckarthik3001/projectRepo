export const loginService = async (email, password) => {
    // Mock API call for login
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (email === 'user@example.com' && password === 'password') {
                resolve({ token: 'fake-jwt-token' });
            } else {
                reject('Invalid credentials');
            }
        }, 1000);
    });
};

export const signupService = async (email, password) => {
    // Mock API call for signup
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ message: 'User created successfully' });
        }, 1000);
    });
};
