fetch("https://jsonplaceholder.typicode.com/todos")
    .then(response => response.json())
    .then(json => {
        const completedNumber = json.reduce((res, todo) => {
            if (todo.completed) {
                res[todo.userId] ? res[todo.userId] += 1 : res[todo.userId] = 1;
            }
            return res;
        }, {})
        console.log(completedNumber)
    })
    .catch(function (err) {
        console.log(err);
    });