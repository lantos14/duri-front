export default function masterList(state = {
  productsSelected: '',
}, action) {
  switch (action.type) {
    case 'TAGNAME_REGISTRATION_INITIATED': {
      return {
        ...state,
        productsSelected: action.payload,
      };
    }

    default:
      return state;
  }
}
