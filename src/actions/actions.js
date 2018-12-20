// example of a thunk using the redux-thunk middleware
export function example(settings) {
  return function (dispatch) {
    // thunks allow for pre-processing actions, calling apis, and dispatching multiple actions
    // in this case at this point we could call a service that would persist the fuel savings
    return dispatch({
      type: "ACTION_TEST_INITIATED",
      settings
    });
  };
}

export function regTag(tagName) {
  return {
    type: 'TAGNAME_REGISTRATION_INITIATED',
    payload: tagName,
  };
} 

export function delTag(tagName) {
  return {
    type: 'TAGNAME_REMOVAL_INITIATED',
    payload: tagName,
  };
} 
