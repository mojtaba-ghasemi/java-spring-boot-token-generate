const tokenInfo = {};
export default function reducer(state = tokenInfo, action) {
  switch (action.type) {
    case "SET_TOKEN":
      return { ...state, token: action.data  };
    case "SET_AVAILABLE_DIGITS":
      return { ...state, availableDigit: action.data };
    default:
      return state;
  }
}
