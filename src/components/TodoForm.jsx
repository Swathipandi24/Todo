import { useState } from 'react';
import PropTypes from 'prop-types';

const TodoForm = ({ addTodo }) => {
  const [todo, setTodo] = useState({ name: '', description: '', status: 'Not Completed' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTodo({
      ...todo,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({
      ...todo,
      id: Date.now(),
    });
    setTodo({ name: '', description: '', status: 'Not Completed' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={todo.name} onChange={handleChange} placeholder="Todo Name" required />
      <input type="text" name="description" value={todo.description} onChange={handleChange} placeholder="Todo Description" required />
      <button type="submit">Add Todo</button>
    </form>
  );
};

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default TodoForm;
