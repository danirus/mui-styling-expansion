import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

import { baseStyles } from '../theme';


const useStyles = makeStyles(baseStyles);


export default function Home() {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      className={classes.root}
    >
      <Typography variant="h3" className={classes.heading}>
        Homepage.
    </Typography>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Link to={`/this`} className={classes.link}>Visit this.</Link>
        <Link to={`/that`} className={classes.link}>Visit that.</Link>
      </Grid>
    </Grid>
  );
}
