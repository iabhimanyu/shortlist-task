import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import CardActionArea from "@material-ui/core/CardActionArea";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import PeopleIcon from "@material-ui/icons/People";
import AssignmentIcon from "@material-ui/icons/Assignment";
import { withRouter } from "react-router-dom";
import { useSelector } from "react-redux";

const useStyles = makeStyles(theme => ({
  paper: {
    // display: "none",
    padding: theme.spacing(2),
    textAlign: "left",
    height: "100%",
    color: theme.palette.text.secondary
    // [theme.breakpoints.up("md")]: {
    //     display: "unset"
    // }
  },
  title: {
    marginTop: "10px",
    marginBottom: "10px",
    marginLeft: "10px"
  },
  hr: {
    marginTop: "10px",
    marginBottom: "10px"
  },
  container: {
    display: "flex",
    alignItems: "center",
    marginLeft: 8
  },
  subNav: {
    marginLeft: 20
  }
}));

//Left hand side navigation menu
const NavComponent = props => {
  const classes = useStyles();
  const [ProfileSelected, setProfileSelected] = useState(false);
  const [TaskSelected, setTaskSelected] = useState(false);
  const tasks = useSelector(state => state.tasks);
  const checkUrl = path => {
    return props.location.pathname === path
      ? { backgroundColor: "#e8e8e8" }
      : null;
  };

  return (
    <Paper className={classes.paper}>
      <CardActionArea onClick={() => setProfileSelected(!ProfileSelected)}>
        <div className={classes.container}>
          <PeopleIcon />
          <Typography className={classes.title} variant="h6" noWrap>
            Profile
          </Typography>
        </div>
      </CardActionArea>
      {ProfileSelected && (
        <>
          <Link
            to="/profile/settings"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <CardActionArea
              style={checkUrl("/profile/settings")}
              className={classes.subNav}
            >
              <div className={classes.container}>
                <PeopleIcon />
                <Typography className={classes.title} variant="h6" noWrap>
                  Settings
                </Typography>
              </div>
            </CardActionArea>
          </Link>
          <Link
            to="/profile/notification"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <CardActionArea
              style={checkUrl("/profile/notification")}
              className={classes.subNav}
            >
              <div className={classes.container}>
                <PeopleIcon />
                <Typography className={classes.title} variant="h6" noWrap>
                  Notification
                </Typography>
              </div>
            </CardActionArea>
          </Link>
        </>
      )}
      <hr className={classes.hr} />
      <CardActionArea onClick={() => setTaskSelected(!TaskSelected)}>
        <div className={classes.container}>
          <AssignmentIcon />
          <Typography className={classes.title} variant="h6" noWrap>
            My Tasks
          </Typography>
        </div>
      </CardActionArea>
      {TaskSelected && (
        <>
          {tasks.map(task => (
            <Link
              to={`/mytask/${task.id}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <CardActionArea style={checkUrl("/mytask/" + task.id)} className={classes.subNav}>
                <div className={classes.container}>
                  <PeopleIcon />
                  <Typography className={classes.title} variant="h6" noWrap>
                    Task {task.id}
                  </Typography>
                </div>
              </CardActionArea>
            </Link>
          ))}
        </>
      )}
    </Paper>
  );
};

export default withRouter(NavComponent);
