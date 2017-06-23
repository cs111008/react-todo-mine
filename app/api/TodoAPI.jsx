module.exports = {
  setTodos: (todos) => {
    if (todos.length > 0) {
      localStorage.setItem("todos", JSON.stringify(todos));
      return todos;
    }
  },
  getTodos: () => {
    var stringArray = localStorage.getItem("todos");
    var todos = [];

    try {
      todos = JSON.parse(stringArray);
    } catch (e) {

    }
    return Array.isArray(todos) ? todos : [];
  },
  sortTodos: (todos, showCompleted, searchText) => {
    var filteredTodo = todos;
    //Show All non-completed first
    filteredTodo=filteredTodo.sort((a,b) => {
      if (a.completed && !b.completed) {
        return 1;
      }else if (!a.completed && b.completed) {
        return -1;
      }else {
        return 0;
      }
    })

    //Short on Search text
    filteredTodo=filteredTodo.filter((todo) => {
      return searchText.length === 0 || todo.text.toLowerCase().indexOf(searchText) > -1;
    });

    //filter by showcompleted
    filteredTodo=filteredTodo.filter((todo) => {
      return !todo.completed || showCompleted;
    });
    return filteredTodo;
  }
}
