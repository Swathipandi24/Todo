import { useState } from 'react';
import PropTypes from 'prop-types';

const TodoItem = ({ todo, updateTodo, deleteTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editableTodo, setEditableTodo] = useState(todo);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditableTodo({
      ...editableTodo,
      [name]: value,
    });
  };

  const handleUpdate = () => {
    updateTodo(editableTodo);
    setIsEditing(false);
  };

  return (
    <div className="todo-item">
      {isEditing ? (
        <>
          <input type="text" name="name" value={editableTodo.name} onChange={handleChange} />
          <input type="text" name="description" value={editableTodo.description} onChange={handleChange} />
          <select name="status" value={editableTodo.status} onChange={handleChange}>
            <option value="Not Completed">Not Completed</option>
            <option value="Completed">Completed</option>
          </select>
          <button onClick={handleUpdate}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </>
      ) : (
        <>
          <h3>{todo.name}</h3>
          <p>{todo.description}</p>
          <p>Status: {todo.status}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </>
      )}
    </div>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
  updateTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

export default TodoItem;
