import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';

class NtHeader extends Component {
  render() {
    return (
      <AppBar
        title="Natsume"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
      />
    );
  }
}

export default NtHeader;
