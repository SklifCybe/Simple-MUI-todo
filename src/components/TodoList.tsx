import React, { FC, SetStateAction } from 'react';
import { List } from '@mui/material';

import { TodoListItem } from './TodoListItem';
import { task } from '../types';

type TodoListProps = {
  tasks: Array<task>;
  onDeleteTask: (id: number) => void;
  onComplitedTask: (id: number) => void;
  onEditTextTask: (id: number) => void;
  setTasks: (tasks: SetStateAction<task[]>) => void;
};

export const TodoList: FC<TodoListProps> = ({
  tasks,
  onDeleteTask,
  onComplitedTask,
  onEditTextTask,
  setTasks,
}) => {
  return (
    <List
      sx={{
        width: '100%',
        overflow: 'auto',
        maxHeight: 300,
      }}>
      {tasks.map((task) => (
        <TodoListItem
          key={task.id}
          text={task.text}
          id={task.id}
          complited={task.complited}
          edit={task.edit}
          onDelete={onDeleteTask}
          onComplited={onComplitedTask}
          onEditText={onEditTextTask}
          setTasks={setTasks}
        />
      ))}
    </List>
  );
};
