import React, { useMemo, useState } from 'react'
import TodoList from './TodoList';
import Counter from './Counter';
import UseMemoComponent from './UseMemoComponent';

const App = () => {

    const [todos, setTodos] = useState([]);
    const [task, setTask] = useState("");


    const addTodo = () => {
        setTodos([...todos, "New todo"]);
    };

    const handleTaskChange = (e) => {
        setTask(e.target.value);
    }

    const SumbitTask = () => {
        if(task.length > 5) {
            setTodos([...todos, task]);
            setTask("");
        }else {
            alert("task must be more than 5 Characters");
        }
    }

   const taskCount = useMemo(() => todos.length, [todos]);

  return (
    <div>
        <h1> React Memo Optimization </h1>
        <button onClick={addTodo}> Add Todo </button>
        <input type="text" value={task} onChange={handleTaskChange} placeholder="Enter task..." />
        <button onClick={SumbitTask}> Sumbit </button>
        <TodoList todos={todos} />
        <Counter/>
        <UseMemoComponent taskCount={taskCount} />
    </div>
  )
}

export default App