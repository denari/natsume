import React, { Component } from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import NtBuildBlockList from './NtBuildBlockList'
import NtBuildPreview from './NtBuildPreview'

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
    return (
      <div className="builder-page-wrapper">
        <NtBuildBlockList
          items={items}
          onSortEnd={this.onSortEnd}
          useDragHandle={true}
        />
        <NtBuildPreview />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    state
  };
}

export default connect(mapStateToProps)(NtBuilder);
