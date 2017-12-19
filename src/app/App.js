import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Tabs, Tab } from 'material-ui/Tabs';

import NtRoute from './NtRoute'


class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <NtRoute />
      </MuiThemeProvider>
    );
  }
}

export default App;
