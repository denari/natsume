import React, { Component } from 'react';
import { render } from 'react-dom';
import { SortableElement, SortableHandle } from 'react-sortable-hoc';
import { connect } from 'react-redux';
import OpenWith from 'material-ui/svg-icons/action/open-with';
import TextField from 'material-ui/TextField';
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from 'material-ui/Card';



const DragHandle = SortableHandle(() => {
  return (
    <OpenWith className="drag-handle-icon" />
  )
});

class NtBuildCard extends Component {
  constructor(props) {
    super(props);
    this.handleExpandChange = this.handleExpandChange.bind(this);
    this.state = {
      expanded: false,
    };
  }

  handleExpandChange(expanded) {
    this.setState({expanded: expanded});
  };

  render() {
    return (
      <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
        <CardHeader
          title={this.props.value.type}
          subtitle={this.props.value.name}
          avatar={<DragHandle />}
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardTitle title="Section" subtitle="コンテンツの入る白い箱" expandable={true} />
        <CardText expandable={true}>
        <TextField
          hintText="タイトルを入力"
          floatingLabelText="タイトル"
        />
        <TextField
          hintText="https://..."
          floatingLabelText="画像URL"
        />
        <TextField
          hintText="短く簡潔に..."
          floatingLabelText="本文"
          fullWidth={true}
        />
        </CardText>
      </Card>
    );
  }
}

const NtBuildBlock = SortableElement(({index, value}) => {
  return (
    <NtBuildCard value={value} index={index}/>
  );
});

export default NtBuildBlock;
