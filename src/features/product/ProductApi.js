// export function fetchAllProducts() {
//   return new Promise(async (resolve) => {
//     const response = await fetch("http://localhost:8000/products");
//     const data = await response.json();
//     resolve({ data });
//   });
// }

export function fetchAllProducts() {
  const token = localStorage.getItem("authToken");

  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch("http://localhost:8000/products", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }

      const data = await response.json();
      resolve({ data });
    } catch (error) {
      console.error("Error fetching products:", error);
      reject(error);
    }
  });
}

// export function fetchProductsByFilter({ filter, sort, pagination, admin }) {
//   // filter = {"category":["smartphone","laptops"]}
//   // sort = {_sort:"price",_order="desc"}
//   // pagination = {_page:1,_limit=10}
//   // TODO : on server we will support multi values in filter
//   // TODO : Server will filter deleted products in case of non-admin

//   let queryString = "";

//   for (let key in filter) {
//     let categoryValues = filter[key];
//     if (categoryValues.length > 0) {
//       const lastCategoryValue = categoryValues[categoryValues.length - 1];
//       queryString += `${key}=${lastCategoryValue}&`;
//     }
//   }

//   for (let key in sort) {
//     queryString += `${key}=${sort[key]}&`;
//   }

//   for (let key in pagination) {
//     queryString += `${key}=${pagination[key]}&`;
//   }

//   if (admin) {
//     queryString += "admin=true";
//   }

//   return new Promise(async (resolve) => {
//     //TODO: we will not hard-code server URL here
//     const response = await fetch(
//       "http://localhost:8000/products?" + queryString
//     );
//     const data = await response.json();
//     const totalItems = await response.headers.get("X-Total-Count");
//     resolve({ data: { products: data, totalItems: +totalItems } });
//   });
// }

export function fetchProductsByFilter({ filter, sort, pagination, admin }) {
  // filter = {"category":["smartphone","laptops"]}
  // sort = {_sort:"price",_order="desc"}
  // pagination = {_page:1,_limit=10}

  let queryString = "";

  for (let key in filter) {
    let categoryValues = filter[key];
    if (categoryValues.length > 0) {
      const lastCategoryValue = categoryValues[categoryValues.length - 1];
      queryString += `${key}=${lastCategoryValue}&`;
    }
  }

  for (let key in sort) {
    queryString += `${key}=${sort[key]}&`;
  }

  for (let key in pagination) {
    queryString += `${key}=${pagination[key]}&`;
  }
  // console.log(queryString);
  if (admin) {
    queryString += "admin=true";
  }

  const token = localStorage.getItem("authToken");

  return new Promise(async (resolve, reject) => {
    try {
      console.log(queryString);
      const response = await fetch(
        "http://localhost:8000/products?" + queryString,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch products by filter");
      }

      const data = await response.json();
      const totalItems = await response.headers.get("X-Total-Count");
      // console.log(totalItems);
      resolve({ data: { products: data, totalItems: +totalItems } });
    } catch (error) {
      console.error("Error fetching products by filter:", error);
      reject(error);
    }
  });
}

// export function fetchAllCategories() {
//   return new Promise(async (resolve) => {
//     const response = await fetch("http://localhost:8000/categories");
//     const data = await response.json();
//     resolve({ data });
//   });
// }

export function fetchAllCategories() {
  const token = localStorage.getItem("authToken");

  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch("http://localhost:8000/categories", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch categories");
      }

      const data = await response.json();
      resolve({ data });
    } catch (error) {
      console.error("Error fetching categories:", error);
      reject(error); // Reject the promise on error
    }
  });
}

// export function fetchAllBrands() {
//   return new Promise(async (resolve) => {
//     const response = await fetch("http://localhost:8000/brands");
//     const data = await response.json();
//     resolve({ data });
//   });
// }

export function fetchAllBrands() {
  const token = localStorage.getItem("authToken");

  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch("http://localhost:8000/brands", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch brands");
      }

      const data = await response.json();
      // console.log(data);
      resolve({ data });
    } catch (error) {
      console.error("Error fetching brands:", error);
      reject(error);
    }
  });
}

// export function fetchProductById(id) {
//   return new Promise(async (resolve) => {
//     const response = await fetch("http://localhost:8000/products/" + id);
//     const data = await response.json();
//     resolve({ data });
//   });
// }

export function fetchProductById(id) {
  const token = localStorage.getItem("authToken");

  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch("http://localhost:8000/products/" + id, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch product by ID");
      }

      const data = await response.json();
      resolve({ data });
    } catch (error) {
      console.error("Error fetching product by ID:", error);
      reject(error);
    }
  });
}

// export function createProduct(product) {
//   return new Promise(async (resolve) => {
//     const response = await fetch("http://localhost:8000/products/", {
//       method: "POST",
//       body: JSON.stringify(product),
//       headers: { "content-type": "application/json" },
//     });
//     const data = await response.json();
//     resolve({ data });
//   });
// }

export function createProduct(product) {
  const token = localStorage.getItem("authToken");

  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch("http://localhost:8000/products/", {
        method: "POST",
        body: JSON.stringify(product),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to create product");
      }

      const data = await response.json();
      resolve({ data });
    } catch (error) {
      console.error("Error creating product:", error);
      reject(error);
    }
  });
}

// export function updateProduct(update) {
//   return new Promise(async (resolve) => {
//     const response = await fetch(
//       "http://localhost:8000/products/" + update.id,
//       {
//         method: "PATCH",
//         body: JSON.stringify(update),
//         headers: { "content-type": "application/json" },
//       }
//     );
//     const data = await response.json();
//     // TODO: on server it will only return some info of user (not password)
//     resolve({ data });
//   });
// }

export function updateProduct(update) {
  const token = localStorage.getItem("authToken");

  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(
        "http://localhost:8000/products/" + update.id,
        {
          method: "PATCH",
          body: JSON.stringify(update),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update product");
      }

      const data = await response.json();
      resolve({ data });
    } catch (error) {
      console.error("Error updating product:", error);
      reject(error);
    }
  });
}
