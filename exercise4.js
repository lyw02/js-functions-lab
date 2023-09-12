fetch("https://jsonplaceholder.typicode.com/todos")
    .then(response => response.json())
    .then(json => {
        const completed = json.filter(todo => todo.completed) // Complete this code
        console.log(`Number of completed todos: ${completed.reduce((num, todo) => num + 1, 0)}.`)
    })
    .catch(function (err) {
        console.log(err);
    });