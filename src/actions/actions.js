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

export function regProductTag(tagName) {
  return {
    type: 'PRODUCT_REGISTRATION_INITIATED',
    payload: tagName,
  };
}

export function delProductTag(tagName) {
  return {
    type: 'PRODUCT_REMOVAL_INITIATED',
    payload: tagName,
  };
}

export function regStoreTag(tagName) {
  return {
    type: 'STORE_REGISTRATION_INITIATED',
    payload: tagName,
  };
}

export function delStoreTag(tagName) {
  return {
    type: 'STORE_REMOVAL_INITIATED',
    payload: tagName,
  };
}

export function getResult(products, stores) {
  return {
    type: 'RESULT_REQUEST_INITIATED',
    payload: {
      products,
      stores
    }
  };
}

export function delResult() {
  return {
    type: 'RESULT_DELETED',
  };
}
