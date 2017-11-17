import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

class App extends Component {
  render() {
    const { REACT_APP_TEAM_NAME } = process.env;

    return (
      <div>
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography type="title" color="inherit">
              {REACT_APP_TEAM_NAME}
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default App;
