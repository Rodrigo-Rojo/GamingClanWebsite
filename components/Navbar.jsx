import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import useStyles from "./styles";
import logo from "../assets/logo.png";




export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar style={{backgroundColor:"#161417"}} position="fixed">
        <Toolbar >
          <Typography  to="/" variant="h6" className={classes.title} color="inherit">
          <img src={logo} alt="IRLogo" height="30px" style={{padding: "0", width: "60px"}} className={classes.image} />Infinity Rage
          </Typography>
          <Button href="https://www.facebook.com/Infinity-Rage-Gaming-103714677670238" color="inherit">Facebook</Button>
          <Button href="#clips" color="inherit">Clips</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
