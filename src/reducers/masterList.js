export default function masterList(state = {
  productsSelected: [],
}, action) {
  switch (action.type) {
    case 'TAGNAME_REGISTRATION_INITIATED': {
      return {
        ...state,
        productsSelected: [...state.productsSelected, action.payload],
      };
    }
    case 'TAGNAME_REMOVAL_INITIATED': {
      return {
        ...state,
        productsSelected: [
          ...state.productsSelected.slice(0, state.productsSelected.indexOf(action.payload)),
          ...state.productsSelected.slice(state.productsSelected.indexOf(action.payload) + 1)
        ]
      };
    }

    default:
      return state;
  }
}
