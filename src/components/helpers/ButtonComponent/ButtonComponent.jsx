import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {
  Link
} from "react-router-dom";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    width: '97%',
  },
}));

export default function UnderstoodButton() {
  const classes = useStyles();
  return(
    <Button color="primary" variant="contained" className={classes.button}>
        Okay, alles klar
    </Button>
  )
}