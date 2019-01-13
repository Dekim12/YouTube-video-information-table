const initialState = {
  data: [],
  isLoading: false
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_LOADING':
      return { ...state, isLoading: !state.isLoading };
    case 'SET_VIDEO_INFO':
      return { ...state, data: action.payload, isLoading: false };
    default:
      return state;
  }
};
