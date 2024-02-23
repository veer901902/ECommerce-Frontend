export function createUser(userData) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8000/users", {
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

    const response = await fetch("http://localhost:8000/users?email=" + email);
    const data = await response.json();
    if (data.length) {
      if (data[0].password === password) {
        // console.log("hello");
        resolve({ data: data[0] });
      } else {
        reject({ message: "Wrong credentials" });
      }
    } else {
      reject({ message: "User not found" });
    }
  });
}

export function signOut(userId) {
  return new Promise(async (resolve, reject) => {
    // TODO: on server we will remove user session info
    resolve({ data: 'success' });
  });
}

