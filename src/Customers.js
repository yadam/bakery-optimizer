import React, { memo, useContext, useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
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

export const Customers = memo(() => {
  const { breads, customers, setCustomers } = useContext(AppContext);
  const [currentCustomer, setCurrentCustomer] = useState({});
  const classes = useStyles();

  const radioChange = (bread) => (e) => {
    setCurrentCustomer({ ...currentCustomer, [bread]: e.target.value });
  };

  const addCustomer = () => {
    if (Object.keys(currentCustomer).length) {
      const customer = {
        ...currentCustomer,
        key: customers.length + 1,
      };
      setCustomers([...customers, customer]);
      // clear radio button current state
      setCurrentCustomer({});
    }
  };

  return (
    <Box className={classes.root}>
      <Typography className={classes.list}>Customers:</Typography>
      {customers.map((customer, index) => (
        <div key={customer.key}>
          {index + 1}:&nbsp;
          {breads.map((bread) => (
            <span key={`${customer.key}-${bread}`}>
              {bread} -&gt; {customer[bread] || 'none'}&nbsp;
            </span>
          ))}
        </div>
      ))}
      <Grid container className={classes.input}>
        <Grid xs={10} item>
          {breads.map((bread) => (
            <FormControl key={`customer-radio-${bread}`} component="fieldset">
              <FormLabel component="legend">{bread}</FormLabel>
              <RadioGroup
                aria-label={bread}
                name={bread}
                value={currentCustomer[bread] || ''}
                onChange={radioChange(bread)}
              >
                <FormControlLabel
                  value="round"
                  control={<Radio />}
                  label="Round Loaf"
                />
                <FormControlLabel
                  value="pan"
                  control={<Radio />}
                  label="Pan Loaf"
                />
              </RadioGroup>
            </FormControl>
          ))}
        </Grid>
        <Grid xs={2} item>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            fullWidth
            onClick={addCustomer}
          >
            Add
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
});

export default Customers;
