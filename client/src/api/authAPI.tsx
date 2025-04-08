import { UserLogin } from "../interfaces/UserLogin";



const login = async (userInfo: UserLogin) => {
    try {
        const response = await fetch(
            '/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userInfo)
            }
        )
        const data = await response.json();

    if (!response.ok) {
      throw new Error("Invalid user login, please try again");
    }


    return data;
  } catch (err) {
    console.log("Error with login", err);
    return Promise.reject("Could not login user");
  }
};
    
   export { login };
