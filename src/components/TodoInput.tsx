import React, { FC, useState, SetStateAction, ChangeEvent, KeyboardEvent } from 'react';
import { TextField } from '@mui/material';

import { task } from '../types';

type TodoInputProps = {
  setTasks: (tasks: SetStateAction<task[]>) => void;
};

export const TodoInput: FC<TodoInputProps> = ({ setTasks }) => {
  const [text, setText] = useState<string>('');

  const onChangeValue = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  const onSubmitValue = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' && text) {
      const newTask: task = {
        id: Date.now(),
        text,
        complited: false,
        edit: false,
      };

      setTasks((prev) => [...prev, newTask]);
      setText('');
    }
  };

  return (
    <TextField
      name="task"
      fullWidth
      id="task"
      label="What you want..."
      autoFocus
      value={text}
      onKeyPress={onSubmitValue}
      onChange={onChangeValue}
    />
  );
};
