import React from "react";
import Header from "../../components/Header/Header";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import NavComponent from "../../components/NavComponent";
import MainContent from '../../components/MainContent';



const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    container: {
        width: "100vw",
        height: "85.5vh"
    },
    item0: {
        width: "20%",
        display: "none",
        [theme.breakpoints.up("md")]: {
            display: "unset"
        }
    },
    item1: {
        width: "100%",
        [theme.breakpoints.up("md")]: {
            width: "80%"
        },
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    bottomNav: {
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        height: "30px",
        backgroundColor: "white",
        [theme.breakpoints.up("md")]: {
            display: "none"
        },

        position: "absolute",
        width: "100vw",
        bottom: "20px"
    },
    btn:{
        marginTop: "17px"
    }
}));

//Main Page component that the app shows. This encapsulates all the other components

const MainPage = () => {
    const classes = useStyles();
    return (
        <div>
            {/* Header componet */}
            <Header />
            <div>
                {/* the main app and side nav components */}
                <Grid container className={classes.container}>
                    <Grid item className={classes.item0}>
                        <NavComponent />
                    </Grid>
                    <Grid item className={classes.item1}>
                        <MainContent />
                    </Grid>
                </Grid>
            </div>


        </div>
    );
};

export default MainPage;
