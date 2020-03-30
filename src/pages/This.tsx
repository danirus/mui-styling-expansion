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
    color: palette.secondary.main
  }
});


const useStyles = makeStyles(styles);


export default function This() {
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
        This page.
      </Typography>
      <Container maxWidth="sm">
        <Typography variant="body1" className={classes.body}>
          Nullam molestie in risus eu lacinia. Pellentesque habitant morbi
          tristique senectus et netus et malesuada fames ac turpis egestas.
          Suspendisse sit amet tincidunt enim. Duis est dui, congue ac mi nec,
          malesuada imperdiet lorem. Etiam pulvinar congue nisi, non malesuada
          mi. Cras risus diam, pharetra nec facilisis et, convallis vel mi.
          Nulla lectus sem, convallis vitae luctus ut, vestibulum nec libero.
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
