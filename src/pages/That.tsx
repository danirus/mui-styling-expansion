import React from 'react';
import { Link } from 'react-router-dom';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Typography } from '@material-ui/core';

import { baseStyles, theme } from '../theme';


const styles = ({ palette, spacing }: Theme) => createStyles({
  ...baseStyles(theme),
  body: {
    background: palette.background.paper,
    padding: spacing(4),
    marginBottom: spacing(4),
    color: palette.primary.main
  }
});


const useStyles = makeStyles(styles);


export default function That() {
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
        That page.
      </Typography>
      <Container maxWidth="sm">
        <Typography variant="body1" className={classes.body}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel
          libero eget mauris eleifend aliquam pretium nec elit. Orci varius
          natoque penatibus et magnis dis parturient montes, nascetur ridiculus
          mus.
      </Typography>
      </Container>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Link to={`/`} className={classes.link}>Back home.</Link>
      </Grid>
    </Grid>
  );
}
