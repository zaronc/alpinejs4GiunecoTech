function dropdown() {
    return {
        show: false,
        disable_btn: false,
        open() { this.show = true; this.disable_btn = true },
            close() { this.show = false, this.disable_btn = false },
        isOpen() { return this.show === true },
        antani(){ this.close(); window.alert('antani')}
    }
}

function toDoList() {
    return {
        newTodo: "", // il todo che si sta inserendo
        todos: [], // la lista dei todo già inseriti
        addToDo() {
            this.todos.push({
                todoText: this.newTodo,
                completed: false,
                isEditing: false
            });

            this.newTodo = "";
        },
        toggleToDoCompleted(index, { target: { checked } }) {
            this.todos[index].completed = checked;
        },
        deleteToDo(index) {
            this.todos = this.todos.filter((todo, todoIndex) => {
                return index !== todoIndex
            })
        },
        numberOfToDosCompleted() {
            return this.todos.filter(todo => todo.completed).length;
        },
        toDoCount() {
            return this.todos.length
        },
        isLastToDo(index) {
            return this.todos.length - 1 === index
        },
        edit(index) {
            const newTitle = this.todos[index].todoText.trim()
            if (!newTitle) {
              this.deleteToDo(index)
            } else {
              this.todos[index].todoText = newTitle
              this.todos[index].isEditing = false
            }
        },
        editing(index) {
            this.todos[index].isEditing = true
            this.todos[index].todoText = this.todos[index].todoText
        },
        countIncomplete() {
            return this.todos.reduce(
              (acc, { completed }) => acc + Number(!completed),
              0,
            )
        },
        clearIncomplete() {
            this.todos = this.todos.filter(isNotCompleted);
            var temp = this.todos;
            this.todos = [];
            this.todos = temp;
        },
    };
}
function isNotCompleted( { completed }) {
    return !completed;
}
