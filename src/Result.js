import React, { memo, useContext, useEffect, useState } from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { AppContext } from './AppContext';
import { optimize } from './optimizer';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(6, 0, 3),
  },
  list: {
    padding: theme.spacing(0, 1, 1, 1),
  },
}));

export const Result = memo(() => {
  const { breads, customers } = useContext(AppContext);
  const [result, setResult] = useState({});
  const classes = useStyles();
  useEffect(() => {
    setResult(optimize(breads, customers));
  }, [breads, customers]);

  return (
    <Box className={classes.root}>
      <Typography className={classes.list}>Result:</Typography>
      {result &&
        !Object.keys(result).length &&
        'No solution exists. You will have to call you customers and get one to compromise'}
      {Object.keys(result).map((bread) => (
        <div key={bread}>{`${bread}: ${result[bread]}`}</div>
      ))}
    </Box>
  );
});

export default Result;
