import React, { Component } from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';

import NtHeader from './nt-header/NtHeader'
import NtBuilderPage from './nt-builder/NtBuilderPage'


class NtRoute extends Component {
  render() {
    return (
      <div>
        <NtHeader />
        <Tabs>
          <Tab label="Builder" >
            <NtBuilderPage class="hoge" />
          </Tab>
          <Tab label="Preview :: PC" >
            <div>
              <p>
                This is another example tab.
              </p>
            </div>
          </Tab>
          <Tab label="Preview :: SmartPhone" >
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
