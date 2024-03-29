import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    cursor: 'pointer',
  },
}));

export default function AppBarComponent(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar link="/" position="static">
        <Toolbar>
          <Typography onClick={() => props.browserHistory.push('/')} variant="h6" className={classes.title}>
            Gaming Acessível
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}