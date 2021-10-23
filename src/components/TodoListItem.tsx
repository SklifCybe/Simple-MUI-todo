import React, { ChangeEvent, FC, useState, KeyboardEvent, SetStateAction } from 'react';
import {
  ListItem,
  ListItemAvatar,
  Checkbox,
  IconButton,
  ListItemText,
  TextField,
} from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';

import { task } from '../types';

type TodoListItemProps = {
  text: string;
  id: number;
  complited: boolean;
  edit: boolean;
  onDelete: (id: number) => void;
  onComplited: (id: number) => void;
  onEditText: (id: number) => void;
  setTasks: (tasks: SetStateAction<task[]>) => void;
};

export const TodoListItem: FC<TodoListItemProps> = ({
  text,
  id,
  complited,
  edit,
  onDelete,
  onComplited,
  onEditText,
  setTasks,
}) => {
  const [checked, setChecked] = useState(complited);
  const [textEdit, setTextEdit] = useState(text);

  const deleteHandler = () => {
    if (window.confirm(`Delete this task: ${text}?`)) {
      onDelete(id);
    }
  };

  const complitedHandler = (event: ChangeEvent<HTMLInputElement>) => {
    onComplited(id);
    setChecked(event.target.checked);
  };

  const editHandler = () => {
    onEditText(id);
    setTasks((prev) =>
      prev.map((task) => {
        if (task.id === id) {
          task.text = textEdit;
        }
        return task;
      }),
    );
  };

  const onSubmitHandler = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' && textEdit) {
      setTasks((prev) =>
        prev.map((task) => {
          if (task.id === id) {
            task.text = textEdit;
            task.edit = false;
            task.complited = false;
            setChecked(false);
          }
          return task;
        }),
      );
    }
  };

  return (
    <ListItem sx={{ padding: '0' }}>
      <ListItemAvatar>
        <Checkbox checked={checked} onChange={complitedHandler} />
      </ListItemAvatar>
      {edit ? (
        <TextField
          value={textEdit}
          onChange={(e) => setTextEdit(e.target.value)}
          onKeyPress={onSubmitHandler}
          variant="standard"
          fullWidth
        />
      ) : (
        <ListItemText>{text}</ListItemText>
      )}
      <IconButton aria-label="edit" onClick={editHandler}>
        <CreateIcon />
      </IconButton>
      <IconButton aria-label="delete" onClick={deleteHandler}>
        <DeleteIcon />
      </IconButton>
    </ListItem>
  );
};
