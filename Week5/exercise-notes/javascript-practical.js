var todoList = {
	todos: [],
	displayTodos: function() {
		console.log('My Todos', this.todos);
		for (var i = 0; i < this.todos.length; i++) {
			console.log(this.todos[i].todoText);
		}
		// if there are no todos
		// console.log('Your todo list is empty!');
		// else
		// print todos
	}
};
