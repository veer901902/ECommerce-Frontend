export function createUser(userData) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8000/auth/signup", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: { "content-type": "application/json" },
    });

    const data = await response.json();
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
        const data = await response.text();
        resolve({ data });
      }
    } catch (error) {
      reject(error);
    }
  });
}

export function signOut() {
  return new Promise(async (resolve, reject) => {
    // TODO: on server we will remove user session info
    resolve({ data: "success" });
  });
}
