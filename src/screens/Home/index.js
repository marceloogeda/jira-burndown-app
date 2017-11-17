import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import { blueGrey } from 'material-ui/colors';
import { withStyles } from 'material-ui/styles';

import QueryAllSprints from './../../components/ListAllSprints/QueryAllSprints';

const styles = {
  appBar: {
    backgroundColor: blueGrey[800],
    color: 'white',
  },
  flex: {
    flex: 1,
  },
};

class App extends Component {
  render() {
    const { classes } = this.props;
    const { REACT_APP_TEAM_NAME } = process.env;

    return (
      <div>
        <AppBar position="static" color="default" className={classes.appBar}>
          <Toolbar>
            <Typography type="title" color="inherit" className={classes.flex}>
              {REACT_APP_TEAM_NAME}
            </Typography>
            <QueryAllSprints />
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(App);
