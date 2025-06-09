export function createUser(userData) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8000/auth/signup", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(userData),
      headers: { "content-type": "application/json" },
    });

    const data = await response.json();
    const token = data.token;
    // Store the token in localStorage
    localStorage.setItem('authToken', token);
    resolve({ data });
  });
}

export function checkUser(loginInfo) {
  return new Promise(async (resolve, reject) => {
    const email = loginInfo.email;
    const password = loginInfo.password;

    try {
      const response = await fetch("http://localhost:8000/auth/login", {
        method: "POST",
        body: JSON.stringify(loginInfo),
        headers: { "content-type": "application/json" },
      });
      if (!response.ok) {
        const error = await response.json();
        reject(error);
      } else {
        const data = await response.json();
        const token = data.token;
        // Store the token in localStorage
        localStorage.setItem("authToken", token);
        resolve({ data });
      }
    } catch (error) {
      reject(error);
    }
  });
}

export function signOut() {
  return new Promise(async (resolve, reject) => {
    resolve({ data: "success" });
  });
}
