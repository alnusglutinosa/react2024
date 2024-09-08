const createTask = (newTask) => {
    return fetch(`https://6675570ea8d2b4d072efa0bb.mockapi.io/tasks`, {
        method: 'POST',
        headers: {'content-type':'application/json'},
        // Send your data in the request body as JSON
        body: JSON.stringify(newTask)
      }).then(res => {
        if (res.ok) {
            return res.json();
        }
    }).then(tasks => {
        return tasks;
      }).catch(error => {
        console.error('Error in createTask:', error);
      })
};

export { createTask } 