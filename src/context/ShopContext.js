import createDataContext from './createDataContext';

const shopReducer = (state, action) => {
  switch (action.type) {
    case 'add_item':
      return [...state, { name: action.payload.name, description: action.payload.description, quantity: action.payload.quantity }];
    default:
      return state;
  }
};

const addItem = dispatch => {
  return (name, description, quantity, callback) => {
    dispatch({ type: 'add_item', payload: {name, description, quantity} });
    if (callback) {
      callback();
    }
  };
};

export const { Context, Provider } = createDataContext(
  shopReducer,
  { addItem },
  []
);
