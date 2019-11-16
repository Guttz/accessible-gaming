import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
    },
    input: {
        display: 'none',
    },
}));

export default function AlternativeButtons(props) {
    const classes = useStyles();
    debugger;

    return (
        <div>
            <Grid container spacing={1}>
                <Grid item xs={6}>
                    <Button onClick={props.onClick} variant="contained" color="default"
                            style={{backgroundColor: '#dfdfdf', height: '30vh', width: '30vh'}}
                            className={classes.button}>
                        {props.alternatives.A}
                    </Button>
                </Grid>
                <Grid item xs={6}>
                    <Button onClick={props.onClick} variant="contained" color="default"
                            style={{backgroundColor: '#dfdfdf', height: '30vh', width: '30vh'}}
                            className={classes.button}>
                        {props.alternatives.B}
                    </Button>
                </Grid>
                <Grid item xs={6}>
                    <Button onClick={props.onClick} variant="contained" color="default"
                            style={{backgroundColor: '#dfdfdf', height: '30vh', width: '30vh'}}
                            className={classes.button}>
                        {props.alternatives.C}
                    </Button>
                </Grid>
                <Grid item xs={6}>
                    <Button onClick={props.onClick} variant="contained" color="default"
                            style={{backgroundColor: '#dfdfdf', height: '30vh', width: '30vh'}}
                            className={classes.button}>
                        {props.alternatives.D}
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
}