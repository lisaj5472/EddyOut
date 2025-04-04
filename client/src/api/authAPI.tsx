import { UserLogin } from "../interfaces/UserLogin";

export const login = async (body: UserLogin) => {
    try {
        const response = await fetch(
            'api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body)
            }
        )
        const data = await response.json();

        if(!response.ok) {
            throw new Error('Invalid user login, please try again');
        }

        return data
    } catch (err) {
        console.log('Error with login')
        return Promise.reject('Could not login user')
    }
}

