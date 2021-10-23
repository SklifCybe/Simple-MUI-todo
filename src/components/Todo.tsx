import React, { FC, useState } from 'react';
import { Container, Box, Grid } from '@mui/material';

import { TodoTitle } from './TodoTitle';
import { TodoInput } from './TodoInput';
import { TodoList } from './TodoList';
import { task } from '../types';

export const Todo: FC = () => {
  const [tasks, setTasks] = useState<Array<task>>([]);

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

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        <Grid container spacing={2}>
          <Grid item xs={12} textAlign="center">
            <TodoTitle />
          </Grid>
          <Grid item xs={12}>
            <TodoInput setTasks={setTasks} />
          </Grid>
          <Grid item xs={12}>
            <TodoList
              tasks={tasks}
              onDeleteTask={onDeleteTask}
              onComplitedTask={onComplitedTask}
              onEditTextTask={onEditTextTask}
              setTasks={setTasks}
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};
