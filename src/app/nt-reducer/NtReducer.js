import { arrayMove } from 'react-sortable-hoc';

function NtReducer(state = initialState, action) {
  switch(action.type) {
    case "LIST_SORT":
      const {items} = state;
      return Object.assign({}, {
        items: arrayMove(items, action.oldIndex, action.newIndex)
      })
    default:
      return state
  }
}

export default NtReducer;
