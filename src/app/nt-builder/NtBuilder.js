import React, {Component} from 'react';
import {render} from 'react-dom';
import {
  SortableContainer,
  SortableElement,
  SortableHandle,
} from 'react-sortable-hoc';
import { connect } from 'react-redux';

const DragHandle = SortableHandle(() => {
  return (
    <span>:hoge:</span>
  )
});

const SortableItem = SortableElement(({value}) => {
  return (
    <li>
      <DragHandle />
      {value}
    </li>
  );
});

const SortableList = SortableContainer(({items}) => {
  return (
    <ul>
      {items.map((value, index) => (
        <SortableItem key={`item-${index}`} index={index} value={value} />
      ))}
    </ul>
  );
});

class NtBuilder extends Component {
  constructor(props) {
    super(props);
    this.onSortEnd = this.onSortEnd.bind(this)
  }

  onSortEnd({oldIndex, newIndex}) {
    this.props.dispatch({
      type: "LIST_SORT",
      oldIndex: oldIndex,
      newIndex: newIndex
    })
  };

  render() {
    const {items} = this.props.state;
    console.log("render", this.props.state)
    return <SortableList items={items} onSortEnd={this.onSortEnd} useDragHandle={true} />;
  }
}

function mapStateToProps(state) {
  console.log("mapStateToProps", state)
  return {
    state
  };
}

export default connect(mapStateToProps)(NtBuilder);
