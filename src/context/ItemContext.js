import createDataContext from './createDataContext';
import backend from '../apis/backend';

const itemReducer = (state, action) => {
  switch (action.type) {
    case 'fetch_items':
      return action.payload;
    default:
      return state;
  };
};

const fetchItems = dispatch => async () => {
  const response = await backend.get('/items', { headers: {
    accept: 'application/json',
    }
  });
  dispatch({ type: 'fetch_items', payload: response.data });
};

export const { Provider, Context } = createDataContext(
  itemReducer,
  { fetchItems },
  []
);
