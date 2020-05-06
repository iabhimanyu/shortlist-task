import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import { Grid } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import Checkbox from "@material-ui/core/Checkbox";
import Select from "@material-ui/core/Select";

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
  },
  checkbox: {
    marginTop: 15
  }
}));
export default function Mytask(props) {
  const classes = useStyles();
  const [source, setSource] = React.useState("");

  const {id} = props.match.params;
  const handleChange = event => {
    setSource(event.target.value);
  };

  const [checked, setChecked] = React.useState(true);

  const handleChecked = event => {
    setChecked(event.target.checked);
  };

  const [result, setResult] = React.useState("");
  const handleResult = event => {
    setResult(event.target.value);
  };

  return (
    <div>
      <Typography className={classes.title} variant="h4" noWrap>
        Task {id}
      </Typography>
      <div className={classes.root}>
        <Grid spacing={3} style={{ width: "60%" }} container>
          <Grid item xs={4}>
            <Typography className={classes.text} variant="subtitle1">
              Source Name
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <FormControl fullWidth className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">Source</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={source}
                onChange={handleChange}
              >
                <MenuItem value="Google">Jupiter</MenuItem>
                <MenuItem value="Twitter">Bank</MenuItem>
                <MenuItem value="Facebook">Customer</MenuItem>
                <MenuItem value="Tesla">Cards</MenuItem>
                <MenuItem value="Tesla">Transition</MenuItem>

              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={4}>
            <Typography className={classes.text} variant="subtitle1">
              Enable Logging
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <Checkbox
              className={classes.checkbox}
              checked={checked}
              onChange={handleChecked}
              inputProps={{ "aria-label": "primary checkbox" }}
            />
          </Grid>

          <Grid item xs={4}>
            <Typography className={classes.text} variant="subtitle1">
              Provide SQL
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <FormControl fullWidth className={classes.margin}>
              <InputLabel htmlFor="standard-adornment-amount">
                Write SQL here
              </InputLabel>
              <Input multiline={true} rows={4} id="standard-adornment-amount" />
            </FormControl>
          </Grid>

          <Grid item xs={4}>
            <Typography className={classes.text} variant="subtitle1">
              Target Result
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <FormControl fullWidth className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">
                Target Result
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={result}
                onChange={handleResult}
              >
                <MenuItem value="Jupiter">Xls</MenuItem>
                <MenuItem value="Bank">JSON</MenuItem>
                <MenuItem value="Customer">XML</MenuItem>
                <MenuItem value="Card">YML</MenuItem>
                <MenuItem value="Transition">CSV</MenuItem>


              </Select>
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
            <Button style={{ marginRight: 40,background:"green",color:"white" }} variant="contained" color="secondary">
              Submit
            </Button>
            
            <Button variant="contained" style={{background: "blue",color:"white"}}>Validate</Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
