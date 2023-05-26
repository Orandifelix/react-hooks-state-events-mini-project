import React, { useState } from "react";
//import Task from "./Task";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("All");

  function handleChange(event) {
    setText(event.target.value);
  }

  function handleCategory(event) {
    setCategory(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const formData = { text: text, category: category };
    onTaskFormSubmit(formData);
    setText("");
    setCategory("All");
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={handleChange} value={text} />
      </label>

      <label>
        Category
        <select name="category" onChange={handleCategory} value={category}>
          {categories.map((category) => (
            <option key={category}>{category}</option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
