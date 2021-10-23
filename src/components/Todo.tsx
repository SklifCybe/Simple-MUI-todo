import React, { FC } from 'react';
import { Container, Box, Grid } from '@mui/material';

import { useTasks } from '../hooks/tasks-hook';
import { TodoTitle } from './TodoTitle';
import { TodoInput } from './TodoInput';
import { TodoList } from './TodoList';

export const Todo: FC = () => {
  const { tasks, setTasks, onComplitedTask, onDeleteTask, onEditTextTask } = useTasks();

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
