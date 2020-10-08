import React from 'react';
import { Box, Container, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { AppContextProvider } from '../src/AppContext';
import { Breads } from '../src/Breads';
import { Customers } from '../src/Customers';
import { Result } from '../src/Result';
import { Copyright } from '../src/Copyright';

const useStyles = makeStyles((theme) => ({
  column: {
    margin: theme.spacing(2, 2, 2, 2),
  },
  center: {
    margin: theme.spacing(0, 'auto'),
  },
}));

export default function Index() {
  const classes = useStyles();
  return (
    <AppContextProvider>
      <Container maxWidth="md">
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            Adam&apos;s Bakery Oven Optimizer
          </Typography>
          <Grid container justify="space-between">
            <Grid item xs={5} className={classes.column}>
              <Breads />
            </Grid>
            <Grid item xs={5} className={classes.column}>
              <Customers />
            </Grid>
            <Grid item xs={12} className={classes.column}>
              <Result />
            </Grid>
          </Grid>
          <Copyright />
        </Box>
      </Container>
    </AppContextProvider>
  );
}
