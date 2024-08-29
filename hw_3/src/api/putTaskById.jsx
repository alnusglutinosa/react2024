const putTaskById = (id, status) => {
  return fetch(`https://6675570ea8d2b4d072efa0bb.mockapi.io/tasks/${id}`, {
      method: 'PUT', // or PATCH
      headers: {'content-type':'application/json'},
      body: JSON.stringify({status: status})
    }).then(res => {
      if (res.ok) {
          return res.json();
      }
    }).then(tasks => {
      return tasks;
    }).catch(error => {
      console.error('Error in putTaskById:', error);
    })
};

export { putTaskById } 