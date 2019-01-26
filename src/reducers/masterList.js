export default function masterList(state = {
  productsSelected: [],
  storesSelected: [],
  result: [],
  loading: false,
}, action) {
  switch (action.type) {
    case 'PRODUCT_REGISTRATION_INITIATED': {
      return {
        ...state,
        productsSelected: [...state.productsSelected, action.payload],
      };
    }
    case 'PRODUCT_REMOVAL_INITIATED': {
      if (action.payload !== 'all') {
        return {
          ...state,
          productsSelected: [
            ...state.productsSelected.slice(0, state.productsSelected.indexOf(action.payload)),
            ...state.productsSelected.slice(state.productsSelected.indexOf(action.payload) + 1)
          ],
        };
      } else {
        return {
          ...state,
          productsSelected: [],
        }
      }
    }

    case 'STORE_REGISTRATION_INITIATED': {
      return {
        ...state,
        storesSelected: [...state.storesSelected, action.payload],
      };
    }
    case 'STORE_REMOVAL_INITIATED': {
      if (action.payload !== 'all') {
        return {
          ...state,
          storesSelected: [
            ...state.storesSelected.slice(0, state.storesSelected.indexOf(action.payload)),
            ...state.storesSelected.slice(state.storesSelected.indexOf(action.payload) + 1)
          ],
        };
      } else {
        return {
          ...state,
          storesSelected: [],
        }
      }
    }

    case 'RESULT_SUCCEEDED': {
      return {
        ...state,
        result: action.payload,
        loading: false,
      };
    }

    case 'RESULT_REQUEST_INITIATED': {
      return {
        ...state,
        loading: true,
      };
    }

    case 'RESULT_DELETED': {
      return {
        ...state,
        result: [],
      };
    }

    default:
      return state;
  }
}
