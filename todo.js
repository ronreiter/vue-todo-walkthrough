const TodoApp = {
  data() {
    return {
      todos: [],
      newTodo: "",
    }
  },
  mounted() {
    const saved = localStorage.getItem("todos");
    if (saved) {
      this.todos = JSON.parse(saved);
    }
  },
  methods: {
    addTask() {
      this.todos.push(this.newTodo);
      this.newTodo = "";
    },
    deleteTask(index) {
      this.todos.splice(index, 1);
    }
  },
  watch: {
    todos: {
      handler() {
        localStorage.setItem("todos", JSON.stringify(this.todos));
      },
      deep: true
    }
  }
}

const app = Vue.createApp(TodoApp);
const vm = app.mount('#app');