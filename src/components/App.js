import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasksList, setTasksList] = useState(TASKS);
  const [category, setCategory] = useState("All");

  function handleDelete(deletedTaskName) {
    const newList = tasksList.filter((task) => task.text !== deletedTaskName);
    setTasksList(newList);
  }

  function handleFilter(event) {
    setCategory(event.target.textContent);
  }

  function handleFormSubmit(newData) {
    setTasksList([...tasksList, newData]);
  }

  const tasksFiltered = tasksList.filter((task) => {
    return category === "All" ? true : task.category === category;
  });

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        categoryName={handleFilter}
        selectCategory={category}
      />
      <NewTaskForm
        categories={CATEGORIES.filter((category) => category !== "All")}
        onTaskFormSubmit={handleFormSubmit}
      />
      <TaskList tasks={tasksFiltered} handleDelete={handleDelete} />
    </div>
  );
}

export default App;