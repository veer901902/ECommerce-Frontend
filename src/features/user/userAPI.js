// export function fetchLoggedInUserOrders() {
//   return new Promise(async (resolve) => {
//     const response = await fetch("http://localhost:8000/orders/own");
//     const data = await response.json();
//     resolve({ data });
//   });
// }

export function fetchLoggedInUserOrders() {
  // Retrieve the token from localStorage
  const token = localStorage.getItem("authToken");

  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch("http://localhost:8000/orders/own", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Add the token to the Authorization header
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch user orders");
      }

      const data = await response.json();
      resolve({ data });
    } catch (error) {
      console.error("Error fetching user orders:", error);
      reject(error); // Reject the promise on error
    }
  });
}

// export function fetchLoggedInUser() {
//   return new Promise(async (resolve) => {
//     const response = await fetch("http://localhost:8000/users/own");
//     const data = await response.json();
//     console.log(data);
//     resolve({ data });
//   });
// }

export function fetchLoggedInUser() {
  // Retrieve the token from localStorage
  const token = localStorage.getItem("authToken");

  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch("http://localhost:8000/users/own", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Add the token to the Authorization header
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch user information");
      }

      const data = await response.json();
      // console.log(data);
      resolve({ data });
    } catch (error) {
      console.error("Error fetching user information:", error);
      reject(error); // Reject the promise on error
    }
  });
}

// export function updateUser(update) {
//   return new Promise(async (resolve) => {
//     const response = await fetch("http://localhost:8000/users/" + update.id, {
//       method: "PATCH",
//       body: JSON.stringify(update),
//       headers: { "content-type": "application/json" },
//     });

//     const data = await response.json();

//     resolve({ data });
//   });
// }

export function updateUser(update) {
  // Retrieve the token from localStorage
  const token = localStorage.getItem("authToken");

  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch("http://localhost:8000/users/" + update.id, {
        method: "PATCH",
        body: JSON.stringify(update),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Add the token to the Authorization header
        },
      });

      if (!response.ok) {
        throw new Error("Failed to update user");
      }

      const data = await response.json();
      resolve({ data });
    } catch (error) {
      console.error("Error updating user:", error);
      reject(error); // Reject the promise on error
    }
  });
}
