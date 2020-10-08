import React, { memo, useContext, useState } from 'react';
import {
  Box,
  Button,
  Chip,
  Grid,
  TextField,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { AppContext } from './AppContext';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(6, 0, 3),
  },
  input: {
    margin: theme.spacing(2, 0, 0, 0),
  },
  list: {
    padding: theme.spacing(0, 1, 1, 1),
  },
  button: {
    margin: theme.spacing(1.25, 0, 0, 1),
  },
}));

export const Breads = memo(() => {
  const { breads, setBreads } = useContext(AppContext);
  const [breadInput, setBreadInput] = useState('');
  const classes = useStyles();

  const addBread = () => {
    if (breadInput && !breads.includes(breadInput)) {
      setBreads(breads.concat([breadInput]));
    }

    // clear the input field
    setBreadInput('');
  };

  const onChangeHandler = (e) => setBreadInput(e.target.value);

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addBread();
    }
  };

  return (
    <Box className={classes.root}>
      <Typography className={classes.list}>Bread types:</Typography>
      {breads.map((bread) => (
        <Chip key={bread} label={bread} />
      ))}
      <Grid container className={classes.input}>
        <Grid xs={10} item>
          <TextField
            id="new-bread"
            label="Enter Bread Type"
            variant="outlined"
            value={breadInput}
            onChange={onChangeHandler}
            onKeyPress={handleKeyPress}
            fullWidth
          />
        </Grid>
        <Grid xs={2} item>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={addBread}
            fullWidth
          >
            Add
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
});

export default Breads;
