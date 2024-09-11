const fetchAllTasks = () => {
    return fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'GET',
        headers: {'content-type':'application/json'},
      }).then(res => {
        if (res.ok) {
            return res.json();
        }
        }).then(tasks => {
        // Do something with the list of tasks
        return tasks;
      }).catch(error => {
        console.error('Error in fetchAllTasks:', error);
      })
};

export { fetchAllTasks } 