// export function createOrder(order) {
//   return new Promise(async (resolve) => {
//     const response = await fetch("http://localhost:8000/orders", {
//       method: "POST",
//       body: JSON.stringify(order),
//       headers: { "content-type": "application/json" },
//     });
//     const data = await response.json();
//     // TODO: on server it will only return some info of user (not password)
//     resolve({ data });
//   });
// }

export function createOrder(order) {
  const token = localStorage.getItem("authToken");

  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch("http://localhost:8000/orders", {
        method: "POST",
        body: JSON.stringify(order),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to create order");
      }

      const data = await response.json();
      resolve({ data });
    } catch (error) {
      console.error("Error creating order:", error);
      reject(error);
    }
  });
}

// export function updateOrder(order) {
//   const token = localStorage.getItem("authToken");

//   return new Promise(async (resolve) => {
//     const response = await fetch("http://localhost:8000/orders/" + order.id, {
//       method: "PATCH",
//       body: JSON.stringify(order),
//       headers: { "content-type": "application/json" },
//     });
//     const data = await response.json();
//     resolve({ data });
//   });
// }

export function updateOrder(order) {
  const token = localStorage.getItem("authToken");

  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(`http://localhost:8000/orders/${order.id}`, {
        method: "PATCH",
        body: JSON.stringify(order),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to update order");
      }

      const data = await response.json();
      resolve({ data });
    } catch (error) {
      console.error("Error updating order:", error);
      reject(error);
    }
  });
}

export function fetchAllOrders(sort, pagination) {
  let queryString = "";

  for (let key in sort) {
    queryString += `${key}=${sort[key]}&`;
  }
  for (let key in pagination) {
    queryString += `${key}=${pagination[key]}&`;
  }

  const token = localStorage.getItem("authToken");

  return new Promise(async (resolve) => {
    const response = await fetch(
      "http://localhost:8000/orders?" + queryString,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = await response.json();
    const totalOrders = await response.headers.get("X-Total-Count");
    resolve({ data: { orders: data, totalOrders: +totalOrders } });
  });
}
