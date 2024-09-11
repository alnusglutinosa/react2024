const deleteTaskById = (id) => {
    return fetch(`https://6675570ea8d2b4d072efa0bb.mockapi.io/tasks/${id}`, {
        method: 'DELETE',
      }).then(res => {
        if (res.ok) {
            return res.json();
        }
      }).then(tasks => {
          return tasks;
      }).catch(error => {
        console.error('Error in deleteTaskById:', error);
      })
};

export { deleteTaskById } 