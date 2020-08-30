function toDoList() {
    return {
        newTodo: "", // il testo del todo che si sta inserendo
        todos: [], // la lista dei todo aggiunti
        addToDo() {
            this.todos.push({
                todoText: this.newTodo,
                completed: false,
                isEditing: false
            });

            this.newTodo = "";
        },
        toggleToDoCompleted(index, value) {
            this.todos[index].completed = value;
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
            this.todos[index].isEditing = true;
            this.todos[index].todoText = this.todos[index].todoText;
            this.$nextTick(() => {
                document.getElementById(`edit-elem-${index}`).focus()
              })
        },
        countIncomplete() {
            var count = 0;
            this.todos.forEach(todo=>{
                if (!todo.completed)
                    count++;                
            });
            return count;
        },
        clearCompleted() {
            this.todos = this.todos.filter(isNotCompleted);
        },
    };
}
function isNotCompleted( { completed }) {
    return !completed;
}
