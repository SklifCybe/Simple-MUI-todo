import React, { FC } from 'react';
import { CssBaseline } from '@mui/material';

import { Todo } from './components/Todo';

export const App: FC = () => {
  return (
    <>
      <CssBaseline />
      <Todo />
    </>
  );
};
