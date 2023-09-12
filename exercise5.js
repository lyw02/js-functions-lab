fetch("https://jsonplaceholder.typicode.com/todos")
    .then(response => response.json())
    .then(json => {
        const uncompleted = json.reduce((arr, todo) => {
            if (!todo.completed) {
                arr.push(todo);
            }
            return arr;
        }, [])
        console.log(uncompleted)
    })
    .catch(function (err) {
        console.log(err);
    });