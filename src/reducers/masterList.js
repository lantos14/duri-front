export default function masterList(state = {
  productsSelected: [],
  storesSelected: [],
}, action) {
  switch (action.type) {
    case 'PRODUCT_REGISTRATION_INITIATED': {
      return {
        ...state,
        productsSelected: [...state.productsSelected, action.payload],
      };
    }
    case 'PRODUCT_REMOVAL_INITIATED': {
      return {
        ...state,
        productsSelected: [
          ...state.productsSelected.slice(0, state.productsSelected.indexOf(action.payload)),
          ...state.productsSelected.slice(state.productsSelected.indexOf(action.payload) + 1)
        ]
      };
    }

    case 'STORE_REGISTRATION_INITIATED': {
      return {
        ...state,
        storesSelected: [...state.storesSelected, action.payload],
      };
    }
    case 'STORE_REMOVAL_INITIATED': {
      return {
        ...state,
        storesSelected: [
          ...state.storesSelected.slice(0, state.storesSelected.indexOf(action.payload)),
          ...state.storesSelected.slice(state.storesSelected.indexOf(action.payload) + 1)
        ]
      };
    }
    default:
      return state;
  }
}
