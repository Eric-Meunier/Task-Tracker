import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTasks from "./components/AddTasks";

const App = () => {
  const [showAddTask, setShowAddTask] = useState(true);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting at School",
      day: "Feb 6th at 1:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Food Shopping",
      day: "Feb 5th at 2:30pm",
      reminder: false,
    }
  ]);

  const addTask = (task) => {
    console.log("Saving Task")
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = {id, ...task};
    setTasks([...tasks, newTask]);
  }

  const reminderToggleHandler = (id) => {
    setTasks(tasks.map((task) => task.id === id? {...task, reminder: !task.reminder} : task))
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => {return task.id !== id; } ))
  }

  return (
    <div className="container">
      <Header title='Task Tracker'
      onAdd={() => setShowAddTask(!showAddTask)}
      showAddTask={showAddTask} />
      {showAddTask && <AddTasks onAdd={addTask} />}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask}onToggle={reminderToggleHandler} /> : "No Tasks Remain."}
    </div>
  );
}

export default App;
