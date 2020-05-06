import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, TextField } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";

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
    marginTop: "25px",
    display: "flex",
    justifyContent: "left"
  }
}));
export default function Settings() {
  const classes = useStyles();
  const [nameError, setNameError] = useState({
    error: false,
    msg: ""
  });
  const [dobError, setDobError] = useState({
    error: false,
    msg: ""
  });

  const [proError, setProError] = useState({
    error: false,
    msg: ""
  });

  const [designationError, setDesignationError] = useState({
    error: false,
    msg: ""
  });

  const handleNameChange = e => {
    const containsNum = /^[a-zA-Z ]+$/.test(e.target.value);
    if (!containsNum) {
      setNameError({
        error: true,
        msg: "Entry should be albhabet only."
      });
    }
    if (containsNum) {
      setNameError({
        error: false,
        msg: ""
      });
    }
    if (e.target.value.length > 30) {
      setNameError({
        error: true,
        msg: "should not be more than 30 characters."
      });
    }
  };

  function isValidDate(dateString) {
    var regEx = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateString.match(regEx)) return false; // Invalid format
    var d = new Date(dateString);
    var dNum = d.getTime();
    if (!dNum && dNum !== 0) return false; // NaN value, Invalid date
    return d.toISOString().slice(0, 10) === dateString;
  }

  const handleDobChange = e => {
    const validDob = isValidDate(e.target.value);
    if (!validDob) {
      setDobError({
        error: true,
        msg: "DOB should contain YYYY-mm-DD format."
      });
    }
    if (validDob) {
      setDobError({
        error: false,
        msg: ""
      });
    }
  };

  const handleProChange = e => {
    const containsNum = /^[a-zA-Z ]+$/.test(e.target.value);
    if (!containsNum) {
      setProError({
        error: true,
        msg: "Entry should be albhabet only."
      });
    }
    if (containsNum) {
      setProError({
        error: false,
        msg: ""
      });
    }
    if (e.target.value.length >30) {
      setProError({
        error: true,
        msg: "should not be more than 30 characters."
      });
    }
  };

  const handleDesignationChange = e => {
    const containsNum = /^[a-zA-Z ]+$/.test(e.target.value);
    if (!containsNum) {
      setDesignationError({
        error: true,
        msg: "Entry should be albhabet only."
      });
    }
    if (containsNum) {
      setDesignationError({
        error: false,
        msg: ""
      });
    }
    if (e.target.value.length > 30) {
      setDesignationError({
        error: true,
        msg: "should not be more than 30 characters."
      });
    }
  };

  return (
    <div>
      <Typography className={classes.title} variant="h4" noWrap>
        Profile Info
      </Typography>
      <div className={classes.root}>
        <Grid spacing={3} style={{ width: "60%" }} container>
          <Grid item xs={6}>
            <Typography className={classes.text} variant="subtitle1">
              Name
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth className={classes.margin}>
              <TextField
                name="Name"
                label="Your Name"
                error={nameError.error}
                helperText={nameError.error ? nameError.msg : ""}
                onChange={handleNameChange}
                id="standard-adornment-amount"
              />
            </FormControl>
          </Grid>

          <Grid item xs={6}>
            <Typography className={classes.text} variant="subtitle1">
              Date of Birth
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth className={classes.margin}>
              <TextField
                name="DOB"
                label="DOB"
                error={dobError.error}
                helperText={dobError.error ? dobError.msg : ""}
                onChange={handleDobChange}
                id="standard-adornment-amount"
              />
            </FormControl>
          </Grid>

          <Grid item xs={6}>
            <Typography className={classes.text} variant="subtitle1">
              Profession
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth className={classes.margin}>
              <TextField
                name="Profession"
                label="Your Profession"
                error={proError.error}
                helperText={proError.error ? proError.msg : ""}
                onChange={handleProChange}
                id="standard-adornment-amount"
              />
            </FormControl>
          </Grid>

          <Grid item xs={6}>
            <Typography className={classes.text} variant="subtitle1">
              Desigation
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth className={classes.margin}>
              <TextField
                name="Designation"
                label="Your Designation"
                error={designationError.error}
                helperText={designationError.error ? designationError.msg : ""}
                onChange={handleDesignationChange}
                id="standard-adornment-amount"
              />
            </FormControl>
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
