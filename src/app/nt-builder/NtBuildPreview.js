import React, { Component } from 'react';
import { render } from 'react-dom';
import { SortableContainer } from 'react-sortable-hoc';
import { connect } from 'react-redux';
import { List } from 'material-ui/List';
import NtBuildBlock from './NtBuildBlock'

const NtBuildBlockList = SortableContainer(({items}) => {
  return (
    <div className="nt-build-preview">
      　previewer here
    </div>
  );
});

export default NtBuildBlockList;
