import React, { Component } from 'react';
import { render } from 'react-dom';
import { SortableContainer } from 'react-sortable-hoc';
import { connect } from 'react-redux';
import { List } from 'material-ui/List';
import NtBuildBlock from './NtBuildBlock'
import PlaylistAdd from 'material-ui/svg-icons/av/playlist-add';
import {
  Card,
  CardHeader,
} from 'material-ui/Card';

const NtBuildBlockList = SortableContainer(({items}) => {
  return (
    <div className="nt-build-block-list">
      {items.map((value, index) => (
        <NtBuildBlock key={`item-${index}`} index={index} value={index, value} />
      ))}
      <Card className="plus-button">
        <CardHeader
          title="セクションを追加する"
          subtitle="残念ながら未実装"
          avatar={<PlaylistAdd className="drag-handle-icon" />}
          actAsExpander={true}
        />
      </Card>
    </div>
  );
});

export default NtBuildBlockList;
