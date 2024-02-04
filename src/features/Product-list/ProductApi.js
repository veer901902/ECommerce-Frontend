// A mock function to mimic making an async request for data
export function fetchAllProducts() {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8000/products");
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchProductsByFilter({ filter, sort }) {
  // filter = {"category":["smartphone","laptops"]}
  // sort = {_sort:"price",_order="desc"}

  // TODO : on server we will support multi values in filter

  let queryString = "";

  for (let key in filter) {
    let categoryValues = filter[key];
    if (categoryValues.length > 0) {
      const lastCategoryValue = categoryValues[categoryValues.length - 1];
      queryString += `${key}=${lastCategoryValue}`;
    }
  }

  for (let key in sort) {
    queryString += `${key}=${sort[key]}&`;
  }

  return new Promise(async (resolve) => {
    const response = await fetch(
      "http://localhost:8000/products?" + queryString
    );
    const data = response.json();
    resolve({ data });
  });
}
