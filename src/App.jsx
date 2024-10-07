import { useState } from 'react';
import Card from './components/Card';
import Header from './components/Header';
import Subheader from './components/Subheader';
import Button from './components/Button';
import TasksContainer from './components/TasksContainer';
import Task from './components/Task';
import tasksData from './assets/tasks';

function uniqueId() {
  return Math.floor(Math.random() * 10000000);
}

function App() {
  const [tasks, setTasks] = useState(tasksData);

  function addTask() {
    setTasks((prev) => [...prev, { id: uniqueId(), name: "New task", isNew: true }]);
  }

  function taskNameChangeHandler(id, newName) {
    const editedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, name: newName, isNew: false };
      } else {
        return task;
      }
    });

    setTasks(editedTasks);
  }

  function deleteTaskHandler(id) {
    const filterredTasks = tasks.filter((task) => task.id !== id);
    setTasks(filterredTasks);
  }

  function completedChangeHandler(id) {
    const editedTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      } else {
        return task;
      }
    });

    setTasks(editedTasks);
  }

  return (
    <Card>
      <Header>My Tasks</Header>
      <Subheader>Things I have to do</Subheader>
      <Button onClick={addTask}>+ Add Task</Button>
      <TasksContainer>
        {tasks.map(({ name, id, isNew, isCompleted }, i) => (
          <Task
            key={`task-${id}`}
            name={name}
            id={id}
            isNew={isNew}
            isCompleted={isCompleted}
            onNameChange={taskNameChangeHandler}
            onDelete={deleteTaskHandler}
            onCompletedChange={completedChangeHandler}
          />
        ))}
      </TasksContainer>
    </Card>
  );
}

export default App;
