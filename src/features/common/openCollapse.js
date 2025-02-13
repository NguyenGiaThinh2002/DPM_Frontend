export const TOGGLE_COLLAPSE = 'TOGGLE_COLLAPSE';

// Action Creators
export const toggleCollapse = () => ({
  type: TOGGLE_COLLAPSE,
});

// Initial State
const initialState = {
  isCollapsed: false,
};

// Reducer
const openCollapseReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_COLLAPSE:
      return {
        ...state,
        isCollapsed: !state.isCollapsed,
      };
    default:
      return state;
  }
};

export default openCollapseReducer;
