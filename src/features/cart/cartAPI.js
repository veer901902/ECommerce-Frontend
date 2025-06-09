// export function addToCart(item) {
//   return new Promise(async (resolve) => {
//     const response = await fetch("http://localhost:8000/cart", {
//       method: "POST",
//       body: JSON.stringify(item),
//       headers: { "content-type": "application/json" },
//     });
//     const data = await response.json();

//     resolve({ data });
//   });
// }

export function addToCart(item) {
  const token = localStorage.getItem("authToken");

  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch("http://localhost:8000/cart", {
        method: "POST",
        body: JSON.stringify(item),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to add item to cart");
      }

      const data = await response.json();
      resolve({ data });
    } catch (error) {
      console.error("Error adding item to cart:", error);
      reject(error);
    }
  });
}

// export function fetchItemsByUserId() {
//   return new Promise(async (resolve) => {
//     const response = await fetch("http://localhost:8000/cart");
//     const data = await response.json();
//     resolve({ data });
//   });
// }

export function fetchItemsByUserId() {
  const token = localStorage.getItem("authToken");

  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch("http://localhost:8000/cart", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch cart items");
      }

      const data = await response.json();
      resolve({ data });
    } catch (error) {
      console.error("Error fetching cart items:", error);
      reject(error);
    }
  });
}

// export function updateCart(update) {
//   return new Promise(async (resolve) => {
//     const response = await fetch("http://localhost:8000/cart/" + update.id, {
//       method: "PATCH",
//       body: JSON.stringify(update),
//       headers: { "content-type": "application/json" },
//     });
//     const data = await response.json();
//     // TODO: on server it will only return some info of user (not password)
//     resolve({ data });
//   });
// }

export function updateCart(update) {
  const token = localStorage.getItem("authToken");

  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch("http://localhost:8000/cart/" + update.id, {
        method: "PATCH",
        body: JSON.stringify(update),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to update cart");
      }

      const data = await response.json();
      resolve({ data });
    } catch (error) {
      console.error("Error updating cart:", error);
      reject(error);
    }
  });
}

// export function deleteItemFromCart(itemId) {
//   return new Promise(async (resolve) => {
//     const response = await fetch("http://localhost:8000/cart/" + itemId, {
//       method: "DELETE",
//       headers: { "content-type": "application/json" },
//     });
//     const data = await response.json();
//     // TODO: on server it will only return some info of user (not password)
//     resolve({ data: { id: itemId } });
//   });
// }

export function deleteItemFromCart(itemId) {
  const token = localStorage.getItem("authToken");

  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch("http://localhost:8000/cart/" + itemId, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to delete item from cart");
      }

      const data = await response.json();
      resolve({ data: { id: itemId } });
    } catch (error) {
      console.error("Error deleting item from cart:", error);
      reject(error);
    }
  });
}

// export function resetCart() {
//   return new Promise(async (resolve) => {
//     const response = await fetchItemsByUserId();
//     const items = response.data;
//     console.log(items);

//     for (let item of items) {
//       await deleteItemFromCart(item.id);
//     }
//     resolve({ status: "success" });
//   });
// }

export function resetCart() {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetchItemsByUserId();
      const items = response.data;
      console.log(items);

      for (let item of items) {
        await deleteItemFromCart(item.id);
      }

      resolve({ status: "success" });
    } catch (error) {
      console.error("Error resetting cart:", error);
      reject(error);
    }
  });
}
