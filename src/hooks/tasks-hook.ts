import { useState, useEffect } from 'react';

import { task } from '../types';

export const useTasks = () => {
  const initialTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
  const [tasks, setTasks] = useState<Array<task>>(initialTasks);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const onDeleteTask = (id: number) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const onComplitedTask = (id: number) => {
    setTasks((prev) =>
      prev.map((task) => {
        if (task.id === id) {
          task.complited = !task.complited;
        }
        return task;
      }),
    );
  };

  const onEditTextTask = (id: number) => {
    setTasks((prev) =>
      prev.map((task) => {
        if (task.id === id) {
          task.edit = !task.edit;
        }
        return task;
      }),
    );
  };

  return {
    tasks,
    setTasks,
    onDeleteTask,
    onComplitedTask,
    onEditTextTask,
  };
};
