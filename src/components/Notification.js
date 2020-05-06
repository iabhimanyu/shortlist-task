import React  from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Switch from '@material-ui/core/Switch';

const useStyles = makeStyles(theme => ({
  title: {
    marginTop: "20px",
    textAlign: "center"
  },
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "40px"
  },
  text: {
    marginTop: "12px",
    display: "flex",
    justifyContent: "left"
  },
  checkboxContainer : {
    display: "flex",
    justifyContent: "flex-end"
  }
}));

export default function Notification() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedC: false,
    checkedD: false
  });
  const handleChange = event => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  return (
    <div>
      <Typography className={classes.title} variant="h4" noWrap>
        Notification
      </Typography>
      <div className={classes.root}>
        <Grid spacing={3} style={{ width: "60%" }} container>
          <Grid item xs={6}>
            <Typography className={classes.text} variant="subtitle1">
              Send all alerts
            </Typography>
          </Grid>
          <Grid className={classes.checkboxContainer} item xs={6}>
            <Switch
              checked={state.checkedA}
              onChange={handleChange}
              name="checkedA"
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
          </Grid>

          <Grid item xs={6}>
            <Typography className={classes.text} variant="subtitle1">
              Alert only task success
            </Typography>
          </Grid>
          <Grid className={classes.checkboxContainer} item xs={6}>
            <Switch
              checked={state.checkedB}
              onChange={handleChange}
              name="checkedB"
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
          </Grid>

          <Grid item xs={6}>
            <Typography className={classes.text} variant="subtitle1">
              Alert only for failed tasks
            </Typography>
          </Grid>
          <Grid className={classes.checkboxContainer} item xs={6}>
            <Switch
              checked={state.checkedC}
              onChange={handleChange}
              name="checkedC"
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
          </Grid>

          <Grid item xs={6}>
            <Typography className={classes.text} variant="subtitle1">
              I do not want any alerts
            </Typography>
          </Grid>
          <Grid className={classes.checkboxContainer} item xs={6}>
            <Switch
              checked={state.checkedD}
              onChange={handleChange}
              name="checkedD"
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
          </Grid>
          <Grid style={{ marginTop: 20 }} container justify="center">
            <Button
              style={{ marginRight: 40 }}
              variant="contained"
              color="secondary"
            >
              Cancel
            </Button>
            <Button variant="contained" style={{background: "green",color:"white"}}>
              Submit
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
