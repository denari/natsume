import React, { Component } from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';

import NtHeader from './nt-header/NtHeader'
import NtBuilder from './nt-builder/NtBuilder'


class NtRoute extends Component {
  render() {
    return (
      <div>
        <NtHeader />
        <Tabs>
          <Tab label="Item One" >
            <NtBuilder />
          </Tab>
          <Tab label="Item Two" >
            <div>
              <p>
                This is another example tab.
              </p>
            </div>
          </Tab>
          <Tab label="onActive" >
            <div>
              <p>
                This is a third example tab.
              </p>
            </div>
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default NtRoute;
