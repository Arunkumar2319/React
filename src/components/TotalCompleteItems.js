import React from 'react';
import { useSelector } from 'react-redux';
const TotalCompleteItems = () => {
  const getCompletedTodo = () => {
    const todos = useSelector((state) => state.todos?.tasks);
    return todos.filter((x) => x.completed).length;
  };
  return <h4 className="mt-3">Total Completed Items: {getCompletedTodo()}</h4>;
};

export default TotalCompleteItems;
