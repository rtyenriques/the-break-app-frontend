export function fetchCategories() {
    fetch('http://localhost:3000/api/v1/categories/1', {
      method: 'GET'
    })
    .then(response => response.json())
    .then(data => console.log(data))
}

// dispatch(actionObject)